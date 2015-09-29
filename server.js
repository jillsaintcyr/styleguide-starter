var auth = require('basic-auth')
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(function (req, res, next) {
  var credentials = auth(req)

  if (!credentials || credentials.name !== 'sparkle' || credentials.pass !== 'pony') {
    res.statusCode = 401
    res.set('WWW-Authenticate', 'Basic realm="styleguide starter"')
    res.send('Access Denied')
  } else {
    next()
  }
});

app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
