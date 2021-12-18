const dbConfig = require(
    "../app/config/db.config.js"
);

const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.customers = require('./models/customer.model')(mongoose);

module.exports = db;