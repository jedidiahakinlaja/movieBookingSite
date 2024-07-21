const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DetailSchema = new Schema({

    sendId:{
        type:String
    },
    totalPrice:{
        type:Number
    },
    timeChosen:{
        type:String
    },
    QR:{
        type:String
    },
    img:{
        type:String
    },
    title:{
        type:String
    }
})


module.exports = mongoose.model('postDetails',DetailSchema);