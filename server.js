var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  bower = require('bower'),
  PORT = process.env.PORT || 3000


//EXPRESS CONFIGURATION
// ----------------------
//set the MongoDB connection

mongoose.connect('mongodb:/localhost/MeanMapApp')

//Logging and Parsing

app.use(logger('dev'))
app.use(express.static( __dirname +'/public')) // sets the static files location to public
app.use('/bower_components', express.static(__dirname + '/bower_components')) // Use BowerComponents
app.use(morgan('dev')) // log with Morgan
app.use(bodyParser.json()) // parse application/json
app.use(bodyParser.urlencoded({extended:true})) // parse application/x-www-form-urlencoded
app.use(bodyParser.text())  // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api +json'}))  // parse application/vnd.api+json as json
app.use(methodOverride())


//Routes
//---------------
// require('./app/routes.js')(app)



app.listen(PORT, function(err){
  console.log(err || "server running on " + PORT);
})
