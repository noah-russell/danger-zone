import * as path from 'node:path'
import express from 'express'
const router = express.Router()

// router.get('/', (req, res) => {
//   res.render('main', { hi: 'Hello World!' })
// })

router.get('/race1', async (req, res) => {
  // let jsonData = await fsPromises.readFile('server/data/data.json', 'utf-8')
  // let puppyData = JSON.parse(jsonData)
  res.render('race')
})

// router.get('/:id', async (req, res) => {
//   // JSON format is convenient for reading and writing
//   let jsonData = await fsPromises.readFile('server/data/data.json', 'utf-8')
//   let puppyData = JSON.parse(jsonData)

//   let singlePuppy = puppyData.puppies.find(
//     (element) => element.id === Number(req.params.id)
//   )

//   // console.log(singlePuppy)
//   res.render('details', singlePuppy)
// })

export default router
