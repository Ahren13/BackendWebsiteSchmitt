const express = require('express');
const bodyParser = require('body-parser');

const customerController = require('../controller/customerController');

const customerRouter = express.Router();
customerRouter.use(bodyParser.json());


customerRouter.route('/')
    .get(async (req, res) => {
        await customerController.findAllCustomers(req,res);
    })

    .post(async (req, res) => {
        await customerController.createCustomer(req,res);
    });


customerRouter.route('/find')
    .post(async (req, res) => {
        await customerController.findCustomerByName(req,res);
    });


customerRouter.route('/:id')
    .get(async (req, res) => {
        await customerController.findOneCustomerById(req,res);
    })

    .put(async (req, res) => {
        await customerController.updateCustomerById(req,res);
    })

    .delete(async (req, res) => {
        await customerController.deleteCustomerById(req,res);
    });

module.exports = customerRouter;