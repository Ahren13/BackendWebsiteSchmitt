const mongoose = require('mongoose');
Schema = mongoose.Schema;

const door = new Schema({
    number:{
      type: String,
    },
    hint: {
        type: String,
    },
    function: {
        type: String,
    },
    typ: {
        type:String,
    },
    din: {
        type:String,
    },
    supplierab:{
        type:String,
    },
    projectNbOld:{
        type:String,
    },
    supplierabPos:{
        type:String,
    },
    yearFirstCheck:{
        type:String,
    }
});

module.exports = door;