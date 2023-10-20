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