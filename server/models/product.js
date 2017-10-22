var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    created: { type: Number, default: Date.now() },
    creatorId: { type: ObjectId, ref: models.user.name, required: true },
});

module.exports = mongoose.model(models.product.name, schema);