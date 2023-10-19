// // import * as URL from 'node:url'

// export default server

import * as Path from 'node:path'
import * as fs from 'node:fs/promises'
// import * as URL from 'node:url'

import express from 'express'
import hbs from 'express-handlebars'
import indexRoutes from './routes/index.js'

const server = express()

// Server configuration

const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Your routes/router(s) should go here
// server.use('/routes', routes)
server.get('/', (req, res) => {
  res.render('openingStory', {})
})

export default server
