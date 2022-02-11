const Sequelize = require('sequelize');
var sequelize = require('./database');

var nametable = 'role';

var Role = sequelize.define(nametable, {
    role: Sequelize.STRING
}, 
{
    timestamps: false
});

module.exports = Role;
