const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    volleyball = require('volleyball'),
    router = require('./router');

app.use(morgan(console));
app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status(404);
    next(err);
});

app.use('/', router);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err);
    res.send(err);
})

app.listen(3000);
