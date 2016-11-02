var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.static('public'))

//INDEX OF ALL POKEMON
// http://pokeapi.co/api/v2/pokemon/?limit=811
