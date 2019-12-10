'use strict';
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const catController = require('../controllers/catController');

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), (req, res, next) => {
    catController.addCat(req,res);


});
router.put('/cat', (req, res) => {
    res.send(catController.putCat);
});
router.delete('/cat', (req, res) => {
    res.send(catController.deleteCat);
});

module.exports = router;
