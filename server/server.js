import * as Path from 'node:path'
// import * as URL from 'node:url'

import express from 'express'
import hbs from 'express-handlebars'

import routes from './routes/index.js'

const server = express()
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))
server.use(express.urlencoded({ extended: true }))
server.use('/', routes)

export default server
