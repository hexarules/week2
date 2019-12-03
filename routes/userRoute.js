'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');


router.get('/', userController.user_list_get);



router.get('/', (req, res) => {
    res.send(userController.user_list_get(req, res));
});
router.get('/:id', (req, res) => {
    res.send(userController.user_get(req.params.id, res));
});


router.post('/', (req, res) => {
    console.log("user post body", req.body)
});
router.put('/user', (req, res) => {
    res.send('With this endpoint you can edit users.');
});
router.delete('/user', (req, res) => {
    res.send('With this endpoint you can delete users.');
});
module.exports = router;