const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var myApp = express();
myApp.set('view engine', 'ejs');

myApp.use(express.static(__dirname+'/public'));
myApp.use(bodyParser.urlencoded({ extended:true }));

myApp.get('/calculator', function( req, res){
    res.render('sincos');
})

myApp.listen(3000);