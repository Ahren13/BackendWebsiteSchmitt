const {mongoose} = require("../index.js");
const Customer = mongoose.model('customer');

const CustomerDetailModel = require('../models/customerDetail.model');
const CustomerDetail = mongoose.model('customerDetail', CustomerDetailModel);

exports.createCustomerDetail = async function (req, res) {
    const customerId = req.params.id;

    try {
        const customerDet = new CustomerDetail({
            location: req.body.location,
            contactPerson: req.body.contactPerson,
            contactPersonEmail: req.body.contactPersonEmail,
            contactPersonMobile: req.body.contactPersonMobile,
            maintenanceContract: req.body.maintenanceContract,
            maintenanceInterval: req.body.maintenanceInterval,
            calendarWeek: req.body.calendarWeek,
            exterMaintenanceBusiness: req.body.exterMaintenanceBusiness,
            noteField: req.body.noteField,
        });


        const customer = await Customer.findById(customerId);

        await customer.kundenDetails.push(customerDet);

        await customer.save();

        res.status(200).send('CustomerDetail successfully saved!');
    } catch (e) {
        res.status(404).end('FEHLER: ' + e.message);
    }
}

exports.deleteCustomerDetail = async function (req, res) {
    const customerId = req.params.id;
    const customerDetailId = req.params.bid;

    try {
        const customer = await Customer.findById(customerId);
        await customer.kundenDetails.id(customerDetailId).remove();
        await customer.save();
        res.status(200).send(`Deleted CustomerDetails with ID:${customerDetailId} for Customer with ID: ${customerId} successfully!`);
    }catch (e) {
        res.status(404).end('FEHLER: ' + e.message);
    }
}

exports.updateCustomerDetail = async function (req, res) {
    const customerId = req.params.id;
    const customerDetailId = req.params.bid;

    try {
        const customer = await Customer.findById(customerId);
        const customerDetail = await customer.kundenDetails.id(customerDetailId);
        await customerDetail.set(req.body);
        await customer.save();
        res.status(200).send(`Updated CustomerDetails with ID:${customerDetailId} for Customer with ID: ${customerId} successfully!`);
    } catch (e) {
        res.status(404).end('FEHLER: ' + e.message);
    }
}