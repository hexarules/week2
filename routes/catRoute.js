'use strict';
const express = require('express');
const port = 3000;
const router = express.Router();
const catController = require('../controllers/catController.js');
const multer = require("multer");
const upload = multer({dest: './uploads/'})
router.get('/', catController.cat_list_get);


router.get('/', (req, res) => {
    res.send(catController.cat_list_get(req, res));
});
router.get('/:id/', (req, res) => {
    res.send(catController.cat_get(req.params.id, res));
});


router.post('/', upload.single('cat'), (req, res, next) => {
    console.log("cat file", req.file, req.filename);


});
router.put('/cat', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});
router.delete('/cat', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

module.exports = router;