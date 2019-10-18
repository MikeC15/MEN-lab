const express = require("express");
const app = express();

const methodOverride = require('method-override')
const bodyParser = require('body-parser');

const actorsController = require("./controllers/actors")

require('./db/db')


//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use("/actors", actorsController)

app.listen(3000, () => {
    console.log('We are LisTeNinG');
});