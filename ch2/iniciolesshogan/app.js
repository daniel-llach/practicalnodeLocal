var express = require('express');

var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.all('*', function(req, res) {
  res.render('index', {msg: 'Welcome to the Practical Node.js!'})
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});



// require hogan
var hogan = require("hogan.js");
 
// compile template
var template = hogan.compile("@{{name}}");
 
var team = ['dhg', 'fat', 'jimio', 'nickgreen', 'sayrer'];
 
team.map(function (twitterer) {
 
  // Render context to template
  return template.render({name: twitterer });
 
});
 
// outputs "Follow: @dhg @fat @jimio @nickgreen @sayrer!"
console.log('Follow: ' + team.join(' ') + '!');