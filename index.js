const http = require('http')

function serverHandle (request, response) {
  response.write('Hello iMasters')
  response.end()
}

const server = http.createServer(serverHandle)

server.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
