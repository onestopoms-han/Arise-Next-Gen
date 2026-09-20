$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "HTTP Server is listening on http://localhost:$port/ (HTTP 206 Streaming Enabled)"

$baseDir = $PSScriptRoot

function Process-Request($context) {
    try {
        $request = $context.Request
        $response = $context.Response

        # CORS and Streaming headers
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS")
        $response.AddHeader("Access-Control-Allow-Headers", "Range, Content-Type, Authorization")
        $response.AddHeader("Access-Control-Expose-Headers", "Content-Range, Accept-Ranges, Content-Length")
        $response.AddHeader("Accept-Ranges", "bytes")

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            return
        }

        $rawPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($rawPath)) {
            $rawPath = "index.html"
        }
        $decodedPath = [System.Uri]::UnescapeDataString($rawPath)
        $filePath = Join-Path $baseDir $decodedPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".pdf"  { "application/pdf" }
                ".mp4"  { "video/mp4" }
                ".mp3"  { "audio/mpeg" }
                ".srt"  { "text/plain; charset=utf-8" }
                ".lrc"  { "text/plain; charset=utf-8" }
                ".vtt"  { "text/vtt; charset=utf-8" }
                Default { "application/octet-stream" }
            }

            $fileInfo = New-Object System.IO.FileInfo($filePath)
            $totalLength = $fileInfo.Length
            $response.ContentType = $contentType

            $rangeHeader = $request.Headers["Range"]
            $isRange = $false
            $start = [int64]0
            $end = $totalLength - 1

            if (![string]::IsNullOrEmpty($rangeHeader) -and $rangeHeader.StartsWith("bytes=")) {
                $rangeVal = $rangeHeader.Substring(6).Trim()
                $dashIdx = $rangeVal.IndexOf('-')
                if ($dashIdx -ge 0) {
                    $startStr = $rangeVal.Substring(0, $dashIdx).Trim()
                    $endStr = $rangeVal.Substring($dashIdx + 1).Trim()
                    if (![string]::IsNullOrEmpty($startStr)) {
                        $start = [int64]::Parse($startStr)
                    }
                    if (![string]::IsNullOrEmpty($endStr)) {
                        $end = [int64]::Parse($endStr)
                    }
                    if ($end -ge $totalLength) {
                        $end = $totalLength - 1
                    }
                    if ($start -le $end) {
                        $isRange = $true
                    }
                }
            }

            if ($isRange) {
                $contentLength = $end - $start + 1
                $response.StatusCode = 206
                $response.AddHeader("Content-Range", "bytes $start-$end/$totalLength")
                $response.ContentLength64 = $contentLength
            } else {
                $response.StatusCode = 200
                $response.ContentLength64 = $totalLength
            }

            if ($request.HttpMethod -ne "HEAD") {
                $fileStream = [System.IO.File]::Open($filePath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
                try {
                    if ($start -gt 0) {
                        $fileStream.Seek($start, [System.IO.SeekOrigin]::Begin) | Out-Null
                    }
                    $buffer = New-Object byte[] 65536
                    $bytesRemaining = if ($isRange) { $contentLength } else { $totalLength }

                    while ($bytesRemaining -gt 0) {
                        $bytesToRead = [Math]::Min([int64]$buffer.Length, $bytesRemaining)
                        $bytesRead = $fileStream.Read($buffer, 0, $bytesToRead)
                        if ($bytesRead -le 0) { break }
                        try {
                            $response.OutputStream.Write($buffer, 0, $bytesRead)
                        } catch {
                            # Client closed connection (e.g., video player seeked)
                            break
                        }
                        $bytesRemaining -= $bytesRead
                    }
                } finally {
                    $fileStream.Close()
                    $fileStream.Dispose()
                }
            }
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    } catch {
        try { $context.Response.Close() } catch {}
    }
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        Process-Request $context
    }
} finally {
    $listener.Stop()
}
