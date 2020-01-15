const mongoose = require('mongoose');

const express = require('express');
const app = express();

app.use(express.static(__dirname + 'static'));
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.use(express.urlencoded({extended:true}));

mongoose.connect
