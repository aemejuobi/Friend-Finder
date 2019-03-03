const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});