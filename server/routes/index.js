import * as path from 'node:path'
import express from 'express'
const router = express.Router()

// --Races Routes--

router.get('/race', (req, res) => {
  res.render('race')
})

router.get('/race/race', (req, res) => {
  res.render('raceRace')
})

router.get('/race/race/race', (req, res) => {
  res.render('raceRaceRace')
})

router.get('/loseScreen', (req, res) => {
  res.render('loseScreen')
})

router.get('/winScreen', (req, res) => {
  res.render('winScreen')
})

function checkCondition(req, res, next) {
  // You can define your condition here
  const roundWin = true // Change this to your actual condition

  if (roundLose) {
    // Execute the next middleware in the chain
    next()
  }
}
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

// // puppies/edit/1
// router.get('/edit/:id', async (req, res) => {
//   let jsonData = await fsPromises.readFile('server/data/data.json', 'utf-8')
//   let puppyData = JSON.parse(jsonData)

//   let singlePuppy = puppyData.puppies.find(
//     (element) => element.id === Number(req.params.id)
//   )
//   // console.log(singlePuppy)
//   res.render('edit', singlePuppy)
// })

// router.post('/edit/:id', async (req, res) => {
//   const id = Number(req.params.id)
//   const { name, breed, owner, image } = req.body
//   // const name = req.body.name|||| long form of above
//   const updatedPuppy = { id, name, breed, owner, image }

//   let jsonData = await fsPromises.readFile('server/data/data.json', 'utf-8')
//   let puppyData = JSON.parse(jsonData)
//   let singlePuppy = puppyData.puppies.find(
//     (element) => element.id === Number(req.params.id)
//   )

//   console.log(singlePuppy)
//   //update the retrieved puppy details with req.body details
//   Object.assign(singlePuppy, updatedPuppy)
//   console.log(singlePuppy)
//   //write the entire array back into json
//   let updatedJson = JSON.stringify(puppyData)
//   await fsPromises.writeFile('server/data/data.json', updatedJson, 'utf-8')
//   //redirect to the get route
//   res.redirect('/puppies/' + id.toString())
// })
