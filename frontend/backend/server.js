const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


const app = experss();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established!");
})

const dataRouter = require('./data/previousSearchData');
const users = require('./users');

app.listen(port, () => {
    console.log('Server is running on port : ${port}');
})