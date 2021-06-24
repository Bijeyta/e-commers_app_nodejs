const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
     title: {
       type: Sequelize.STRING,
     },
     imageUrl: {
       type: Sequelize.STRING,
      },
     price: {
       type: Sequelize.DOUBLE,
     },
     description: {
       type: Sequelize.STRING,
     }
   });

module.exports = Product;