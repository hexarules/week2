// Controller
'use strict';
const userModel = require('../models/userModel.js');

const users = userModel.users;

const user_list_get = (req, res) => {
    res.json(users);
};
const user_get = (req, res) => {
    let index =parseInt(req)-1
    res.json(users[index])
};


module.exports = {
    user_list_get,
    user_get,
};

