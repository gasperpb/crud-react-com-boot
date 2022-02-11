const Sequelize = require('sequelize');
var sequelize = require('./database');
// import Role for FK roleId
var Role = require('./Role');

var nametable = 'employee';

var Employee = sequelize.define(nametable, {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.BIGINT,

    roleId:{
        type: Sequelize.INTEGER,
        refences:{
            model: Role,
            key: 'id'
        }
    }
})

Employee.belongsTo(Role);

module.exports = Employee;