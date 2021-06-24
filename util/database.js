const Sequelize = require('sequelize');

const sequelize = new Sequelize('folder-4','root','yourpassword',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;