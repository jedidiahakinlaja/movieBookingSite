const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recomendSchema =new Schema({
    "_id":{
        type:String
    },
    "id":{
        type:String
    },
    "name":{
        type:String
    },
    "imageUrl":{
        type:String
    },
    "type":{
        type:String
    },
    "language":{
        type:String
    },
    "rating":{
        type:String
    }
})

module.exports = mongoose.model('recoms', recomendSchema);