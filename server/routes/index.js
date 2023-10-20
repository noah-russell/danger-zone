import * as path from 'node:path'
import express from 'express'
const router = express.Router()

// router.get('/', (req, res) => {
//   res.render('main', { hi: 'Hello World!' })
// })

router.get('/race1', (req, res) => {
  res.render('race')
})

export default router
