//module.exports = User;
const mongoose = require('mongoose');
Schema = mongoose.Schema;
const buildings = require('./building.model')

const customerDetail = new Schema({
    location: String,
    contactPerson: String,
    contactPersonEmail: String,
    contactPersonMobile: String,
    maintenanceContract: Boolean,
    maintenanceInterval: String,
    calendarWeek: String,
    exterMaintenanceBusiness: String,
    noteField: String,
    buildings: [buildings]
});

module.exports = customerDetail;