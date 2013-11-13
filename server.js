var express = require('express');
var app = express();
var vayKay =
{
"name" : "Tyler Van Ollefen",
"vacation" : {
	"places": ["25.03, -77.55","38.92, -74.93","51.51,  -0.12"]
	}
}

app.get('/', function(req, res){
  res.json(vayKay);
});

var port = process.env.PORT || 5000;
app.listen(port);