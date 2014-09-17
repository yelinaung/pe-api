var express     = require('express');     // call express
var app         = express();              // define our app using express
var read        = require('node-read'); 
$               = require('cheerio');

port            = process.env.PORT || 8080;     // set our port
var router      = express.Router();             // get an instance of the express Router
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/', function(req, res) {
  read('http://programmingexcuses.com', function(err, article, response) {
    res.json({ message: $('a', article.content).text() });
  });
});

router.post('/gcm', function(req, res) {
  console.log("uuid -> " + req.body.uuid);
  console.log("device id -> " + req.body.device_id);
  res.end("res_sent");
});

app.use('/', router);
app.listen(port);
console.log('Magic happens on port ' + port);
