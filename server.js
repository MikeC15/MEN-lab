const express = require("express");
const app = express();

const actorsController = require("./controllers/actors")

app.use("/actors", actorsController)

app.listen(3000, () => {
    console.log('We are LisTeNinG');
});