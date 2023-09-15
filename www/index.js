const http = require('http')


let server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'})
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node JS</title>
  </head>
  <body>
      <p>Hello, dog!</p>
  </body>
  </html>`)
})

const PORT = 3001
const HOST = '127.0.0.1'

server.listen(PORT, HOST, () => {
  console.log(`Success: http://${HOST}:${PORT}`)
})