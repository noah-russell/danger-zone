import * as path from 'node:path'
import express from 'express'
const router = express.Router()

// --Races Routes--

router.get('/race', (req, res) => {
  res.render('race')
})

router.get('/loseScreen', (req, res) => {
  res.render('loseScreen')
})

router.get('/winScreen', (req, res) => {
  res.render('winScreen')
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
