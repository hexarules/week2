// Controller
'use strict';
const catModel = require('../models/catModel.js');


/*
const cat_list_get = (req, res) => {
    res.json(cats);
};*/
const cat_get = async (req, res) => {
    const cat = await catModel.getCat(req.params.id);

    res.json(cat[0]);
};
const cat_list_get = async (req, res) => {
    const cats = await catModel.getAllCats();
    res.json(cats);
};

module.exports = {
    cat_list_get,
    cat_get
};
