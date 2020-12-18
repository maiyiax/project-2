const { Room } = require('../models');

const roomdata = [
    {
        room_name: 'Living Room'
    },
    {
        room_name: 'Bedroom'
    },
    {
        room_name: 'Office'
    },
    {
        room_name: 'Sunroom'
    },
    {
        room_name: 'Dining Room'
    },
    {
        room_name: 'Bathroom'
    },
    {
        room_name: 'Kitchen'
    }
]

const seedRooms = () => Room.bulkCreate(roomdata);

module.exports = seedRooms;