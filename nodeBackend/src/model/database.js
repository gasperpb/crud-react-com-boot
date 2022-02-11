var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'teste', //database
    'root', //username
    '', //password
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306'
    }
);

module.exports = sequelize;