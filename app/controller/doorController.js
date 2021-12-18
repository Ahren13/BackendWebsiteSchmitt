const {mongoose} = require("../index.js");
const Customer = mongoose.model('customer');

const DoorModel = require('../models/door.model');
const Door = mongoose.model('door', DoorModel);

exports.createDoor = async function (req, res) {

    const customerId = req.params.id;
    const customerDetailsId = req.params.bid;
    const buildingId = req.params.cid;

    try {
        const customer = await Customer.findById(customerId);

        const building = await customer.kundenDetails.id(customerDetailsId).buildings.id(buildingId);

        const door = new Door({
            year: req.body.year,
            number: req.body.number,
            hint: req.body.hint,
            nktip: req.body.nktip,
            typ: req.body.typ,
            din: req.body.din
        });

        await building.doors.push(door);

        await customer.save();

        res.status(200).end('Door successfully added !');
    } catch (e) {
        res.status(404).end('ERROR: ' + e.message.properties);
    }
}

exports.deleteDoor = async function(req,res){

    const customerId = req.params.id;
    const customerDetailsId = req.params.bid;
    const buildingId = req.params.cid;
    const doorId = req.params.did;

    try {
        const customer = await Customer.findById(customerId);

        const building = await customer.kundenDetails.id(customerDetailsId).buildings.id(buildingId).doors.id(doorId).remove();

        await customer.save();

        res.status(200).end('Door successfully deleted !');
    }catch (e) {
        res.status(404).end('ERROR: ' + e.message.properties);
    }

}

exports.updateDoor = async function(req,res){

    const customerId = req.params.id;
    const customerDetailsId = req.params.bid;
    const buildingId = req.params.cid;
    const doorId = req.params.did;

    try{
        const customer = await Customer.findById(customerId);

        const door = await customer.kundenDetails.id(customerDetailsId).buildings.id(buildingId).doors.id(doorId);

        await door.set(req.body);

        await customer.save();

        res.status(200).end('Updated Door with ID: ' + doorId);
    }catch (e) {
        res.status(404).end('ERROR: ' + e.message.properties);
    }
}