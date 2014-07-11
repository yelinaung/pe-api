var express   = require('express');     // call express
var app       = express();              // define our app using express
var read      = require('node-read'); 
$             = require('cheerio');

port          = process.env.PORT || 8080;     // set our port
var router    = express.Router();             // get an instance of the express Router

router.get('/', function(req, res) {
  read('http://programmingexcuses.com', function(err, article, response) {
    res.json({ message: $('a', article.content).text() });
  });
});

app.use('/', router);
app.listen(port);
console.log('Magic happens on port ' + port);
