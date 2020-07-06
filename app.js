var debug = require('debug')('road:route');
var express = require('express');
var app = express();
var router = require('./route');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');



// app.use(logger('dev'));
// app.set('view engine', 'ejs');
app.use(bodyParser.json({ "limit": "1000kb" }));
app.use(bodyParser.urlencoded({ extended: false }));
const corsOptions = {
    origin: [
        'http://localhost',
        'http://localhost:4200',
        'http://www.test.com',
        'http://www.test.com:4200',
        'http://34.231.173.182:8080',
        'http://34.231.173.182',
    ],
    allowedHeaders: ["Content-Type", "Cookie"],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
};
app.use(cors(corsOptions));

app.use(function(req, res, next) {
    if (req.query.key === "123") {
        debug("verification");
        next();
    } else {
        res.send("err");
    }
});

app.use(router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).send('<h1>404</h1>');
});



module.exports = app;