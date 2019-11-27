'use strict';
const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');

const router = express.Router();
const catController = require('./controllers/catController.js');
const userController = require('./controllers/userController.js');

app.use(cors());

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80');
});

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


/*app.get('/cat', (req, res) => {
  res.send('With this endpoint you can get cats.');
});
app.get('/cat/:id/', (req, res) => {
  res.send("You requested a cat whose id is "+ req.params.id);
});



app.post('/cat', (req, res) => {
  res.send('With this endpoint you can add cats.');
});
app.put('/cat', (req, res) => {
  res.send('With this endpoint you can edit cats.');
});
app.delete('/cat', (req, res) => {
  res.send('With this endpoint you can delete cats.');
});*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`));