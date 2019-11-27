'use strict';
const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();
const catController = require('../controllers/catController.js');

router.get('/', catController.cat_list_get);

module.exports = router;

app.get('/cat', (req, res) => {
    res.send(catController.cat_list_get(req, res));
});
app.get('/cat/:id/', (req, res) => {
    res.send(catController.cat_get(req.params.id, res));
});


app.post('/cat', (req, res) => {
    res.send('With this endpoint you can add cats.');
});
app.put('/cat', (req, res) => {
    res.send('With this endpoint you can edit cats.');
});
app.delete('/cat', (req, res) => {
    res.send('With this endpoint you can delete cats.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));