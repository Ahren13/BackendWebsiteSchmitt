const express = require('express');
const bodyParser = require('body-parser');

const customerDetailController = require('../controller/customerDetailController');

const customerDetailsRoutes = express.Router({mergeParams: true}); // mergeParams:true without this option we would not have access to the /:id param
customerDetailsRoutes.use(bodyParser.json());

customerDetailsRoutes.route('/')
    .post(async (req, res) => {
        await customerDetailController.createCustomerDetail(req,res);
    });

customerDetailsRoutes.route('/:bid')
    .put(async (req, res) => {
        await customerDetailController.updateCustomerDetail(req,res);
    })

    .delete(async (req, res) => {
        await customerDetailController.deleteCustomerDetail(req,res);
    });

module.exports = customerDetailsRoutes;