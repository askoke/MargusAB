const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/margusAB');

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize