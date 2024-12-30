const express = require('express');
const itemRouter = express.Router();
const Item = require("../../models/Item");

// Get all items
itemRouter.get('/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noitemfound: "No items found" }));
});

itemRouter.post('/', (req, res) => {
    console.log("Request Body:", req.body); // Log the request body
    const { itemName, itemCount } = req.body;

    if (!itemName || !itemCount) {
        return res.status(400).json({ error: "itemName and itemCount are required." });
    }

    Item.create(req.body)
        .then((item) => res.status(201).json({ msg: "Item added successfully", item }))
        .catch((err) => {
            console.error("Error:", err); // Log the error
            res.status(400).json({ error: "Item not added", details: err.message });
        });
});


// Update an existing item by ID
itemRouter.post('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => res.json({ msg: "Item updated successfully", item: item }))
    .catch((err) => res.json({ error: "Item not updated", details: err.message }));
});

module.exports = itemRouter;
