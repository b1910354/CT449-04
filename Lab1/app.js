const express = require("express");
// Enable cross-origin resource sharing (CORS) with various options.
const cors = require("cors");
const { type } = require("os");

const app = express();

app.use(cors());
// parse JSON request to JS object
app.use(express.json());
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
app.get('/', (req, res, next) => {
    res.json({message: "Welcome to contact book application."});
});

module.exports = app;



