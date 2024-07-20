const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    language:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:Number
    },
    timing:{
        type:Array
    },
    imageUrl:{
        type:String
    },
    qr:{
        type:String
    }

})

module.exports = mongoose.model('movies',MoviesSchema);