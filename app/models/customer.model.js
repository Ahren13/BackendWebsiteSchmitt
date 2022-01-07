/* 
const mongoose = require('mongoose');
Schema = mongoose.Schema;

const kundenDetails = require('../models/customerDetail.model');

const customer = new Schema({
    name: {
        type: String,
        required:[true, 'Name kann nicht leer sein.'],
    },
    billingAddress:  {
        type: String,
        required:[true, 'billingAddress kann nicht leer sein.'],
    },
    contactPerson: {
        type: String,
        required:[true, 'contactPerson kann nicht leer sein.'],
    },
    email:  {
        type: String,
        required:[true, 'email kann nicht leer sein.'],
    },
    mobileNumber: {
        type: String,
        required:[true, 'mobileNumber kann nicht leer sein.'],
    },
    kundenDetails: [kundenDetails],
},
    { timestamps: { createdAt: 'created_at' } }
);

module.exports = customer; */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const kundenDetails = require(
    '../models/customerDetail.model'
);


module.exports = mongoose => {
    const Customer = mongoose.model(
        "customer",
        Schema({
            name: {
                type: String,
                required:[true, 'Name kann nicht leer sein.'],
            },
            billingAddress:  {
                type: String,
                required:[true, 'billingAddress kann nicht leer sein.'],
            },
            contactPerson: {
                type: String,
                required:[true, 'contactPerson kann nicht leer sein.'],
            },
            email:  {
                type: String,
                required:[true, 'email kann nicht leer sein.'],
            },
            mobileNumber: {
                type: String,
                required:[true, 'mobileNumber kann nicht leer sein.'],
            },
            kundenDetails: [kundenDetails],
        },{timestamps: true}),
    )
    return Customer;
}