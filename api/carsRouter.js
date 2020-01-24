const express = require('express');
const db = require('../data/dbConfig.js');

const router = express.Router();


router.post('/',(req, res) => {
    const carData = req.body;
     
     db("cars")
     .insert(carData)
     .then(newId => {
         db("cars")
         .where({ id : newId[0]})
         .then(newCar => {
             res.status(201).json(newCar)
         })
     })
     .catch(err => {
         console.log(err)
         res.status(500).json({message: "We ran into an issue creating that car"})
     });
     
     })



router.get('/', (req, res) => {
    db("cars")
    .then(carlist => {
        res.json(carlist)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "we ran into an issue fetching cars"})
    })
})

module.exports = router;