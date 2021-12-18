const express = require('express');
const bodyParser = require('body-parser');

const buildingController = require('../controller/buildingController')

const buildingRoutes = express.Router({mergeParams: true});
buildingRoutes.use(bodyParser.json());

buildingRoutes.route('/')
    .post(async (req, res) => {
        await buildingController.createBuilding(req,res);
    });

buildingRoutes.route('/:cid')
    .delete(async (req, res) => {
        await buildingController.deleteBuilding(req,res);
    })

    .put(async (req, res) => {
        await buildingController.updateBuilding(req,res);
    });




module.exports = buildingRoutes;