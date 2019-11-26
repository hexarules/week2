// Controller
'use strict';
const catModel = require('../models/catModel.js');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
    res.json(cats);
};
const cat_get = (req, res) => {
    let index =parseInt(req)-1
    res.json(cats[index])
};


module.exports = {
    cat_list_get,
    cat_get,
};

