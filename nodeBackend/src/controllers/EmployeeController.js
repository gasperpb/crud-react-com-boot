const controllers = {}

//import model and sequalize

var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

sequelize.sync();

controllers.list = async (req, res) => {
    const data = await Employee.findAll({
        include: [Role]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })

    res.json({
        success: true,
        data: data
    });
}

controllers.create = async (req, res) => {
    const { name, email, address, phone, role } = req.body;

    const data = await Employee.create({
        name: name,
        email: email,
        address: address,
        phone: phone,
        roleId: role
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })

    res.status(200).json({
        success: true,
        message: "Data Saved Successfully",
        data: data
    })
}

controllers.get = async (req, res) => {
    const { id } = req.params;

    const data = await Employee.findAll({
        where: { id: id },
        include: [Role]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })

    res.json({
        success: true,
        data: data
    })
}

controllers.update = async (req, res) => {
    // parameter get id
    const { id } = req.params;
    // parameter POST
    const { name, email, address, phone, role } = req.body;
    // Update data
    const data = await Employee.update({
        name: name,
        email: email,
        address: address,
        phone: phone,
        roleId: role
    },
        {
            where: { id: id }
        })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ success: true, data: data, message: "Berhasil Di Update di database" });
}

controllers.delete = async (req, res) => {
    // parameter post
    const { id } = req.body;
    // delete sequelize
    const del = await Employee.destroy({
        where: { id: id }
    })
    res.json({ success: true, deleted: del, message: "Berhasil Dihapus" });
}

module.exports = controllers;