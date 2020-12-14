const { Sequelize } = require("sequelize")


const authenticate = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const db = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite"
})


module.exports = {
    db,
    authenticate
}