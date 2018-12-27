'use strict'
const http = require('http')
const ip = process.env.IP || 'localhost'
const port = process.env.PORT || 8080
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(`This is simple bot server`)
})
server.listen(port)
console.log(`Server listening at http://${ip}:${port}/`)
