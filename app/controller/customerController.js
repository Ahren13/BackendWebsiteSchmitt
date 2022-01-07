const { mongoose } = require("../index.js");
 const Customer = mongoose.model('customer'); 
 
/* const CustomerModel = require('../models/customer.model');
const Customer = mongoose.model('customer', CustomerModel); */

exports.findAllCustomers = async function(req, res) {
    try {
        const allCustomers = await Customer.find();
        res.status(200).json(allCustomers)
    } catch (e) {
        res.status(404).end('FEHLER: ' + e.message);
    }
}

exports.createCustomer = async function(req, res) {

    try {
        const customer = new Customer({
            name: req.body.name,
            billingAddress: req.body.billingAddress,
            contactPerson: req.body.contactPerson,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            kundenDetails: [],
        });
        const savedCustomer = await customer.save(customer);
        res.status(200).json(savedCustomer);
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}

exports.findOneCustomerById = async function(req, res) {
    const customerId = req.params.id;

    try {
        const customerById = await Customer.findById(customerId);
        res.status(200).json(customerById);
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}

exports.updateCustomerById = async function(req, res) {
    const customerId = req.params.id;

    try {
        await Customer.findByIdAndUpdate(customerId, req.body, { useFindAndModify: false });
        res.status(200).send('Customer with ID: ' + customerId + ' successfully updated');
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}

exports.deleteCustomerById = async function(req, res) {
    const customerId = req.params.id;

    try {
        await Customer.findByIdAndDelete(customerId);
        res.status(200).send(`Deleted Customer with ID:${customerId} successfully!`);
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}

exports.findCustomerByName = async function(req, res) {
    const customerName = req.body.name;

    try {
        const customersByName = await Customer.find({ "name": new RegExp(customerName, 'i') });
        res.status(200).json(customersByName);
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}