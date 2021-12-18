const mongoose = require('mongoose');
Schema = mongoose.Schema;

const door = new Schema({
    year:{
      type: Number,
    },
    number: {
        type: Number,
    },
    hint: {
        type: String,
    },
    nktip: {
        type:String,
    },
    typ:{
        type:String,
    },
    din:{
        type:String,
    }
});

module.exports = door;