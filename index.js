var express = require('express');
var fs = require('fs');
var app = express();
var opener = require('opener');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({limit: '5000mb', extended: true}));

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/imgs', express.static('imgs'));

app.get('/', function (req, res) {
  res.send(fs.readFileSync('index.html').toString());
});

app.post('/save_photo', function (req, res) {
    var imgBase64 = new Buffer(req.body.imgBase64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    console.log(imgBase64);
    fs.writeFileSync('imgs/dcphoto.png', imgBase64);
    res.send('http://localhost:3000/imgs/dcphoto.png');
});

app.listen(3000, function () {
  opener('http://localhost:3000');
});


