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













//creating
router.post('/', async (req, res, next) => {
    const { name, description, price, category, image } = req.body;
  
    try { // creating a new item using the Item model
  
      const newItem = await Item.create({
        name,
        description,
        price,
        category,
        image,
      });
    
       // returns the newly created item in response
       res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  
  });
  
  //updating
  router.put('/', async (req, res) => {
    const { itemId } = req.params;
    const { name, description, price, category, image } = req.body;
  
    try {
      // find the item by id
      const item = await Item.findByPk(itemId);
  
      if (item) {
        // update properties
        item.name = name;
        item.description = description;
        item.price = price;
        item.category = category;
        item.image = image;
  
        // saving
        await item.save();
  
        // return in response
        res.json(item);
      } else {
        res.status(404).json({ message: 'not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error' });
    }
  });

//delete
router.delete('/', async (req, res) => {
    const { itemId } = req.params;
  
    try {
      // find using id
      const item = await Item.findByPk(itemId);
  
      if (item) {
        // dlete
        await item.destroy();
  
        res.json({ message: 'item deleted' });
      } else {
        res.status(404).json({ message: 'item not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error' });
    }
  });
  
module.exports = router;