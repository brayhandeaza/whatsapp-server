const { types } = require('pg')
const Sequelize = require('Sequelize')
const { db } = require('../db')

const Users = db.define("users", {
    fullName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },   
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }   
})

module.exports = Users
