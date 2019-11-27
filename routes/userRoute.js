'use strict';
const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const userController = require('../controllers/userController.js');


router.get('/', userController.user_list_get);

module.exports = router;

app.get('/user', (req, res) => {
    res.send(userController.user_list_get(req, res));
});
app.get('/user/:id/', (req, res) => {
    res.send(userController.user_get(req.params.id, res));
});


app.post('/user', (req, res) => {
    res.send('With this endpoint you can add users.');
});
app.put('/user', (req, res) => {
    res.send('With this endpoint you can edit users.');
});
app.delete('/user', (req, res) => {
    res.send('With this endpoint you can delete users.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));