const mongoose = require('mongoose');
Schema = mongoose.Schema;

const doorSchema = require('../models/door.model')


const building = new Schema({
    buildingName: {
        type: String,
        required: [true, 'buildingName darf nicht leer sein !'],
    },
    grundrissPath: String,
    doors : [doorSchema],
});


module.exports = building;