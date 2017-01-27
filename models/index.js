const Sequelize = require('sequelize'),
    db = new Sequelize('postgres://localhost:5432/tripplaner')

const Place = db.define('place', {
    address: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    location: {
        type: Sequelize.ARRAY(DataTypes.DECIMAL)
    }
}, {

});

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
}, {

});

const Activity = db.define('activity',{
    name: {
        type: Sequelize.STRING
    },
    age_range: {
        type: Sequelize.STRING
    }

});

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


Hotel.belongsTo(Place, {
    as: 'geotag'
});

Restaurant.belongsTo(Place),{
    as: 'foodtag'
};

Activity.belongsTo(Place),{
    as: 'activitytag'
};
