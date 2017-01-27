const express = require('express');
const router = express.Router();
const db = require('../models');
// const Activity = db.model('activity');
// const Restaurant = db.model('');
// const Hotel = db.model('activity');
// const Place = models.Place;


router.get('/',function(req,res) {
    const ActivityPromise = db.model('activity').findAll();
    const RestaurantPromise = db.model('restaurant').findAll();
    const HotelPromise = db.model('hotel').findAll();

    Promise.all([ActivityPromise, RestaurantPromise, HotelPromise])
    .then(function(data){
        res.send(data);
    });
});

module.exports = router;
