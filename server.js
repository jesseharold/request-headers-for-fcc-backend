var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

app.get("/", function(req, res){
    var responseHTML = "<html><body>";
    responseHTML += "ip address: " + req.headers["x-forwarded-for"];
    responseHTML += "<br><br>";
    responseHTML += "language: " + req.headers["accept-language"].slice(0, req.headers["accept-language"].indexOf(","));
    responseHTML += "<br><br>";
    responseHTML += "operating system: " + req.headers["user-agent"].slice(req.headers["user-agent"].indexOf("(")+1, req.headers["user-agent"].indexOf(")"));
    responseHTML += "<br><br>";
    responseHTML += "</body></html>";
    res.send(responseHTML);
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
})
