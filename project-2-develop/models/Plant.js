const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

// plantModel
class Plant extends Model {

}

Plant.init(
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
        modelName: 'plant'
    }
)

module.exports = Plant