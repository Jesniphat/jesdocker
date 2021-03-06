var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();


// view engine setup
// app.set('view engine', 'html');
// app.set('views', path.join(DIST_FOLDER, 'GSB-Exchange'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'dist', 'GSB-Exchange', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './dist/GSB-Exchange')));

// All regular routes use the Universal engine
// app.get('*', (req, res) => {
//   res.render(path.join(__dirname, './dist/GSB-Exchange/index.html', { req }));
// });


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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
