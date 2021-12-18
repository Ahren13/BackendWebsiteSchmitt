const mongoose = require('mongoose');
Schema = mongoose.Schema;

const doorSchema = require('../models/door.model')


const building = new Schema({
    buildingName: {
        type: String,
        required: [true, 'buildingName darf nicht leer sein !'],
    },
    adresse: {
        type: String,
        required: [true, 'Adressfeld darf nicht leer sein !'],
    },
    contactPerson: {
        type: String,
        required: [true, 'Kontakt Person darf nicht leer sein !']
    },
    grundrissPath: String,
    doors : [doorSchema],
});


module.exports = building;