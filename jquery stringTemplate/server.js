var express = require("express");
var app = express();
	
app.get("/", function(req, res){
	res.sendFile(`${__dirname}/www/index.html`);
});

app.get("/list", function(req, res){
	res.sendFile(`${__dirname}/data/list.json`);
});


app.get("*", function(req, res){
	res.sendFile(`${__dirname}/www${req.url}`)
})
app.listen(8888, "localhost", function(){
	console.log("sever running on port 8888");
})