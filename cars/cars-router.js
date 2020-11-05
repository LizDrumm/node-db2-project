const express = require('express')

const db = require('../data/connection.js')

const router = express.Router()

router.get('/', (req, res) => {
    db('car-dealer')
        .then(cars => {
            res.status(200).json({ data: cars })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.post('/', (req, res) => {
    db('car-dealer').insert(req.body)
        .then(([id]) => {
            res.status(201).json({ message: 'Success', carId: id })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router