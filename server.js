var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  PORT = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.static('public'))

//INDEX OF ALL POKEMON
// http://pokeapi.co/api/v2/pokemon/?limit=811
app.get('/api/pokedex', function(req,res){
  var apiUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=811'

  request.get(apiUrl, function(err,response,body){
    res.json(JSON.parse(body))
  })
})

//show all pokemon
// http://pokeapi.co/api/v2/pokemon/1/
app.get('/api/pokedex/:id', function(req,res){
  var apiUrl = 'http://pokeapi.co/api/v2/pokemon/1/'
  request.get(apiUrl, function(err,response,body){
    res.json(JSON.parse(body))
  })
})


app.listen(PORT, function(err){
  console.log(err || "server running on " + PORT);
})
