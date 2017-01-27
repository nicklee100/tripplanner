const db = require('./db');
const Activity = require('./activity');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');

Restaurant.belongsTo(Place);

Activity.belongsTo(Place);

Hotel.belongsTo(Place);

module.exports = db;
