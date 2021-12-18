const express = require('express');
const bodyParser = require('body-parser');

const doorController = require('../controller/doorController')

const doorRoutes = express.Router({mergeParams: true});
doorRoutes.use(bodyParser.json());

doorRoutes.route('/')
    .post(async (req, res) => {
        await doorController.createDoor(req,res);
    });

doorRoutes.route('/:did')
    .delete(async (req, res) => {
        await doorController.deleteDoor(req,res);
    })
    .put(async (req, res) => {
        await doorController.updateDoor(req,res);
    });


module.exports = doorRoutes;