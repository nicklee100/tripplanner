const Sequelize = require('sequelize');
const db = require('./db');

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING
    },
    num_stars: {
        type: Sequelize.INTEGER
    },
    amenities: {
        type: Sequelize.STRING
    }
});

module.exports = Hotel;
