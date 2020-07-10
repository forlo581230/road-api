var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var schema = new Schema({
    company: String,
    carNum: String,
    endDateTime: String,
    address: String,
    name: String,
    city: String,
    town: String,
    nameType: String,
    km: Number,
    speedLimit: Number,
    overSpeed: Number,
    lat: Number,
    lng: Number,
    driver: String,
    memberCode: String
});

// Create a model.
var OverSpeedRecord = mongoose.model('OverSpeedRecord', schema);

module.exports = schema;