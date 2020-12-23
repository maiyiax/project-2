const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Home extends Model { }

Home.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        home_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'room',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscore: true,
        modelName: 'home'
    }
)

module.exports = Home;
