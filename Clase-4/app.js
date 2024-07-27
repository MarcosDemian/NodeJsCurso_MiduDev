import express, { json } from 'express' // require -> commonJS
import { corsMiddleware } from './middlewares/cors.js' // extension para manejo de cors
import { moviesRouter } from './routes/movies.js'

// Como leer un json en ESModules
// import fs from 'node:fs'
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'))

// Como leer un json en ESModules "recomendado por ahora", esta en las rutas

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

// Todos los recursos que sean MOVIES se identifican con /movies
app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
