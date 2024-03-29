// *** main dependencies *** //
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// *** routes *** //
var routes = require('./routes/index.js');
var authRoutes = require('./routes/auth.js');
var userRoutes = require('./routes/user-routes.js');
var menuRoutes = require('./routes/menu-routes.js');
var spaceRoutes = require('./routes/space-routes.js');
var eventRoutes = require('./routes/event-routes.js');
var twilioRoutes = require('./routes/twilio-routes.js');
var eventMenuRoutes = require('./routes/eventMenu-routes.js');


// *** express instance *** //
var app = express();

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../.')));


// *** main routes *** //
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './','../','client/','index.html'));
});

app.use('/', routes);
app.use('/auth', authRoutes);
app.use('/', userRoutes);
app.use('/', menuRoutes);
app.use('/', spaceRoutes);
app.use('/', eventRoutes);
app.use('/', twilioRoutes);
app.use('/', eventMenuRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res
    .status(err.status || 500)
    .send('error', {
      message: err.message,
      error: {}
    });
});


module.exports = app;
