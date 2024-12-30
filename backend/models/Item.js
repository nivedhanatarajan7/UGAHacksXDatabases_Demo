const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemCount: {
        type: Number,
        required: true
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);