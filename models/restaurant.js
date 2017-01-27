const Sequelize = require('sequelize');
const db = require('./db');

const Restaurant = db.define('restaurant',{
    name: {
        type: Sequelize.STRING
    },
    cuisine: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

module.exports = Restaurant;
