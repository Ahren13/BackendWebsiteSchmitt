//module.exports = User;
const mongoose = require('mongoose');
Schema = mongoose.Schema;
const buildings = require('./building.model');
const timeZone = require('mongoose-timezone');


const customerDetail = new Schema({
    location: {
        type: String,
        required: [true, 'location darf nicht leer sein!'],
    },
    contactPerson: {
        type: String,
        required: [true, 'contactPerson darf nicht leer sein!'],
    },
    contactPersonEmail: {
        type: String,
        required: [true, 'contactPersonEmail darf nicht leer sein!'],
    },
    contactPersonMobile: {
        type: String,
        required: [true, 'contactPersonMobile darf nicht leer sein!'],
    },
    maintenanceContract: Boolean,
    maintenanceInterval: {
        type: String,
        required: [true, 'maintenanceInterval darf nicht leer sein!'],
    },
    calendarWeek: {
        type: Date,
        required: [true, 'calendarWeek darf nicht leer sein!'],
    },
    noteField: String,
    buildings: [buildings]
});

customerDetail.plugin(timeZone);
module.exports = customerDetail;