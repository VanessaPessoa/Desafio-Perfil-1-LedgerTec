const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const parseurl = require('parseurl');
// const path = require('path');
// const expressValidator = require('express-validator');


const app = express();

// s

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


require("./app/routes/documentosroutes")(app);

require("./app/routes/userroutes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});