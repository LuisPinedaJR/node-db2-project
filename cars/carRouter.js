const express = require('express')
const db = require('../utils/db')

const router = express.Router()

router.get('/', (req, res) => {
  db('cars')
    .then(car => {
      res.status(200).json(car)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'Cannot retrieve cars' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db('cars')
    .where({ id: id })
    .then(car => {
      res.status(200).json(car)
    })
    .catch(err => {
      res.status(500).json({ error: 'can not retrieve account by ID' })
    })
})

router.post('/', (req, res) => {
  const data = req.body
  db('cars')
    .insert(data)
    .then(ids => {
      const id = ids[0]
      db('cars')
        .select('vin', 'make', 'model', 'mileage', 'transmission', 'title')
        .where({ id })
        .first()
        .then(posts => {
          res.status(200).json(posts)
        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: 'Could not post account info' })
    })
})

module.exports = router
