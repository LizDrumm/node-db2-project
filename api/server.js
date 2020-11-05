const express = require('express')

const carsRouter = require('../cars/cars-router')
const db= require ("../data/connection")

const server = express()

server.use(express.json())

server.use('api/cars', carsRouter)

server.get('/api', (req, res) => {
    res.status(200).json({ message: 'API Up' })
})

server.get('/api/cars', (req, res) => {
    db('car-dealer').then(cars=>{
        res.status(200).json({data:cars})
    })
    .catch(err=>{
        res.status(500).json({err:err.message})
    });
})

module.exports = server