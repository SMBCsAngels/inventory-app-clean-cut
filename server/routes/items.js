const express = require("express");
const router = express.Router();
const { Item } = require("../models");


// Get /item

router.get("/", async (req, res, next) => {
    try {
        const items = await Item.findAll();
        res.send(items);
    } catch(error) {
        next(error);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const item = await Item.findByPk(itemId);
        if (!item) {
            return res.status("Item not found");
        }
        res.json(item);
    } catch (error) {
        console.log(error)
    }
});



module.exports = router;