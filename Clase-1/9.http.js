const http = require('node:http')
const { findAvailablePort } = require('./10.free-port') //toma la funcion para encontrar un puerto de -
                                                        //la siguiente actividad

const desiredPort = process.env.PORT ?? 3000 //Port=??? node 9.http.js

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
