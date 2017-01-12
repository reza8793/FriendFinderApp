var express = require ("express");
var bodyParser = require("body-parser");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 8010;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

 app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT)
});
