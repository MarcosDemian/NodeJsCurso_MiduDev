const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/mc-lovin.jpg') {
    fs.readFile('./mclovin.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Estas en la ruta de contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
