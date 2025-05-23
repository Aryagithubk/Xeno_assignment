const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer',
        required : true
    },
    amout : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
},{
    timestamps : true
});

module.exports = mongoose.model('Order',orderSchema);