
const assert = require('assert');
const request = require("supertest");
const {describe, expect, test} = require("@jest/globals");

//IMPORTS
 // replace with express app later
const app = require('./app');

describe('Inventory Management API', () => {
    
})  

// GET 

test('create an items', (done) => {
    const newItem = {
        name: 'New Item',
        description: 'This is a new item.',
        price: 9.99,
        category: 'Miscellaneous',
        image: 'new-item.jpg',
    };

    request(app) //REPLACE LATER
        .post('/items')
        .send(newItem)
        .expect(201)
        .end((err, res) => {
            if (err) return done(err);

            assert.equal(res.body.name, newItem.name);
            assert.equal(res.body.description, newItem.description);
            assert.equal(res.body.price, newItem.price);
            assert.equal(res.body.category, newItem.category);
            assert.equal(res.body.image, newItem.image);
            assert.equal(typeof res.body.id, 'number');
            assert.equal(typeof res.body.slug, 'string');

            createdItemId = res.body.id;
            createdItemSlug = res.body.slug;
            done();
        })

})

// PUT (update)

test('should update an existing item', (done) => {
    const updatedItem = {
      name: 'Updated Item',
      description: 'This item has been updated.',
      price: 19.99,
      category: 'Miscellaneous',
      image: 'updated-item.jpg',
    };

    request(app) //replace later with express app instance
        .put(`/items/${createdItemSlug}`)
        .send(updatedItem)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);

            assert.equal(res.body.id, createdItemId);
            assert.equal(res.body.name, updatedItem.name);
            assert.equal(res.body.description, updatedItem.description);
            assert.equal(res.body.price, updatedItem.price);
            assert.equal(res.body.category, updatedItem.category);
            assert.equal(res.body.image, updatedItem.image);
            done();
        });
});

//DELETE

test('should delete an existing item', (done) => {
    request(app) // replace with express 
      .delete(`/items/${createdItemSlug}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.equal(res.body.message, 'Item deleted');
        done();
      });
  });


