const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// room Model
class Room extends Model {

}

Room.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscore: true,
        modelName: 'room'
    }
)

module.exports = Room