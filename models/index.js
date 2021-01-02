const User = require('./User');
const Plant = require('./Plant');
const Room = require('./Room');
const Home = require('./Home');
const Userplant = require('./Userplant')

// may incorporate at later date
// const Light = require('./Light');

// associations

// Home
Home.belongsTo(User, {
    foreignKey: 'user_id'
});

Home.hasMany(Room, {
    foreignKey: 'room_id'
});

Home.belongsTo(Userplant, {
    foreignKey: 'user_id'
});

// Room
Room.belongsTo(Home, {
    foreignKey: 'home_id'
});

Room.belongsTo(User, {
    foreignKey: 'user_id'
});

Room.hasMany(Plant, {
    foreignKey: 'room_id'
});

// User
User.hasMany(Plant, {
    foreignKey: 'user_id'
});

User.hasOne(Home, {
    foreignKey: 'user_id'
});

// User.hasMany(Room, {

// });

// Plant
Plant.belongsTo(User, {
    foreignKey: 'user_id'
});

Plant.belongsTo(User, {
    through: Userplant,
    as: 'owned_plants',
    foreignKey: 'user_id'
});

Plant.belongsTo(Home, {
    foreignKey: 'user_id'
});

// Plant.hasMany(Room, {
    
// })

// Userplant associations
Userplant.belongsTo(User, {
    foreignKey: 'user_id'
});

Userplant.belongsTo(Plant, {
    foreignKey: 'plant_id'
});

Userplant.belongsTo(Home, {
    foreignKey: 'home_id'
})

module.exports = { User, Plant, Room, Home, Userplant };