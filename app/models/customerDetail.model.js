//module.exports = User;
const mongoose = require('mongoose');
Schema = mongoose.Schema;
const buildings = require('./building.model')

const customerDetail = new Schema({
    location: {
        type: String,
        required: [true, 'location darf nicht leer sein!'],
    },
    contactPerson: String,
    contactPersonEmail: String,
    contactPersonMobile: String,
    maintenanceContract: Boolean,
    maintenanceInterval: String,
    calendarWeek: String,
    noteField: String,
    buildings: [buildings]
});

module.exports = customerDetail;