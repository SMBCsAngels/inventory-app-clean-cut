const express = require("express");
const router = express.Router();
const { Item } = require("../models");


// Get /item

router.get("/", async (req, res, next) => {
    try {
        const items = await Item.findAll();
        console.log(items)
        res.send(items);
    } catch(error) {
        next(error);
    }
});

module.exports = router;