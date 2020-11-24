//https://www.youtube.com/watch?v=tHWtbdy0QHU&list=PLMYF6NkLrdN9noGbruLWtprOPvjA4rjmC&index=63 اهم درس

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 //logger=require('./config/logger')
const compression=require('compression')
var indexRouter = require('./routes/index');

var bodyParser = require('body-parser');
const helmet=require('helmet');

const morgan=require('morgan')

//-------------
const UserRoute=require('./routes/UserRoute')
const ProductRoute=require('./routes/ProductRoute')
const AuthRouter=require('./routes/AuthRoute')
const mongoose=require('mongoose')

//-------
mongoose.connect('mongodb://localhost/db_3',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.error('conected')).catch((e)=> console.error(e))
mongoose.set('useCreateIndex',true);

var app = express();
require('express-async-errors')
app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser())

app.use(compression())
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/', indexRouter);
//----------
app.use('/user',UserRoute)
app.use('/product',ProductRoute)
app.use('/auth',AuthRouter)
//--------------

app.all('*',(req,res)=> {
  res.status(404).json({
    status:'false',
    msg:'page not found '
  })
})


app.use(express.json())
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
  res.json({
    message : err.message
  })
});

module.exports = app;
