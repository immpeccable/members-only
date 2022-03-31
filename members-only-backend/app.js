
const session = require('express-session');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const passport = require('passport');
const express = require('express');
/*const logger = require('morgan');*/
const path = require('path');
const authenticator = require("./authenticatior");
const mongoose = require("mongoose");

let cors = require("cors");

let mongoUrl = "mongodb+srv://tdundar:tdundar@cluster0.4b76o.mongodb.net/membersOnly?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let routeList = require('./routes/routeList');

const app = express();

process.env.SECRET_KEY_MEMBER = "membership-code";
process.env.SECRET_KEY_ADMIN = "admin-code";

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*app.use(logger('dev'));*/
app.use(cookieParser("cats"));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: "cats", resave: false, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

authenticator.apply(passport);



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/home", routeList);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
