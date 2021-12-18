const {mongoose} = require("../index.js");
const Customer = mongoose.model('customer');

const BuildingModel = require('../models/building.model');
const Building = mongoose.model('building', BuildingModel);

exports.createBuilding = async function (req, res) {
    const customerId = req.params.id;
    const customerDetailsId = req.params.bid;

    try {
        const customer = await Customer.findById(customerId);

        const kundenDetails = customer.kundenDetails.id(customerDetailsId);

        const building = new Building({
            buildingName: req.body.buildingName,
            adresse: req.body.adresse,
            contactPerson: req.body.contactPerson,
            grundrissPath: '',
            doors: [],
        });

        /*        let error = await building.validateSync();
                if (typeof error !== "undefined") {
                    await handleValidationError(error, res);
                    return;
                }*/

        await kundenDetails.buildings.push(building);

        await customer.save();

        res.status(200).end('Building successfully added !');
    } catch (e) {
        console.log(e);
        res.status(404).end('ERROR: ' + e.message.properties);
    }
}

exports.deleteBuilding = async function (req, res) {
    const customerId = req.params.id;
    const customerDetailId = req.params.bid;
    const buildingId = req.params.cid;

    try {
        const customer = await Customer.findById(customerId);

        const customerDetails = await customer.kundenDetails.id(customerDetailId);

        await customerDetails.buildings.id(buildingId).remove();

        await customer.save();

        res.status(200).end('Deleted Building with ID: ' + buildingId);
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}

exports.updateBuilding = async function (req, res) {
    const customerId = req.params.id;
    const customerDetailId = req.params.bid;
    const buildingId = req.params.cid;

    try {
        const customer = await Customer.findById(customerId);

        const customerDetails = await customer.kundenDetails.id(customerDetailId);

        const buildings = await customerDetails.buildings.id(buildingId);

        await buildings.set(req.body);

        await customer.save();

        res.status(200).end('Updated Building with ID: ' + buildingId);
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message);
    }
}


/*
async function handleValidationError(error,res) {
    // console.log(error.errors['adresse'].properties.type); ==> required
    //TODO Check error Type to give better error feedback

    if (error.errors['adresse']) {
        res.status(400).end(error.errors['adresse'].properties.message);
    } else if (error.errors['buildingName']) {
        res.status(400).end(error.errors['buildingName'].properties.message)
    } else if (error.errors['contactPerson']) {
        res.status(400).end(error.errors['contactPerson'].properties.message)
    }
}*/
