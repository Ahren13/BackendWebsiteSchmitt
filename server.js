const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');

const customerRoutes = require('./app/routes/customerRoutes');
const customerDetailsRoutes = require('./app/routes/customerDetailsRoutes');
const buildingRoutes = require('./app/routes/buildingRoutes');
const doorRoutes = require('./app/routes/doorRoutes');
//const upload = require('express-fileupload');



const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Logging
app.use(morgan('dev'))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// ### ACTIVATE FOR UPLOADING ###
//app.use(upload());

const db = require("./app/index.js");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {

        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });



app.use('/api/customers',customerRoutes);

app.use('/api/customers/:id/customersDetail',customerDetailsRoutes);

app.use('/api/customers/:id/customersDetail/:bid/building',buildingRoutes);

app.use('/api/customers/:id/customersDetail/:bid/building/:cid/door', doorRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});