// Controller
'use strict';
const catModel = require('../models/catModel.js');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

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
const addCat = async (req, res,) => {
    console.log(req.body)
    const params = [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        req.file.filename,
    ];
    console.log('create', params);
    const result = await catModel.addCat(params);
    await res.json(result);
};
const putCat = async (req, res,) => {
    console.log(req.body);
    const params = [
        req.body.name,
        req.body.age,
        req.body.weight,
        req.body.owner,
        req.body.id];
    console.log('put', params);
    const result = await catModel.putCat(params);
    await res.json(result);
};
const deleteCat = async (req,res)=>{
    const params = [
        req.body.id
    ];
    console.log('delete', params);
    const cat = await catModel.deleteCat(params);
    await res.json(cat)
};


module.exports = {
    cat_list_get,
    cat_get,
    addCat,
    putCat,
    deleteCat
};
