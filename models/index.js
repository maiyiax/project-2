const User = require('./User');
const Plant = require('./Plant');
const Room = require('./Room');
const Home = require('./Home');

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


// Room
// Room.belongsTo(Home, {

// });

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

// Plant.hasMany(Room, {
    
// })

module.exports = { User, Plant, Room, Home };