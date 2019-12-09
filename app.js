'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('uploads'));
app.use("/cat",catRoute);
app.use("/user",userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));