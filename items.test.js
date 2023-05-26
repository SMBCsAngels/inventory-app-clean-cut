import {expect, describe, test} from '@jest/globals';
const request = require("supertest");
const router = require('./items');

describe('Item API', () => {
    let testItemId;

    describe('GET /items/:id', () => {
        test('all items', async () => {
            const response = await require(router).get('/items');
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
        
        });
    });

// GET 

    describe('POST /items/:id/new-item', () => {
        test('should create an item', async () => {
            const newItem = {
                name: 'New Item',
                description: 'This is a new item.',
                price: 9.99,
                category: 'Miscellaneous',
                image: 'new-item.jpg',
            };
    
        const response = await request(router).post('/items').send(newItem);
        expect(response.status).toBe(201);
        expect(response.body).toBeDefined();
        expect(response.body.id).toBeDefined();

        testItemId = response.body.id;
        });
    });

// PUT (update)

    describe('PUT /items/:id/edit-item', () => {
        test('should update an item', async () => {
            const updatedItem = {
                name: 'Updated Item',
                description: 'This is an updated item.',
                price: 9.99,
                category: 'Miscellaneous',
                image: 'update.jpg',
            };

        const response = await request(router).put(`/items/${testItemId}`).send(updatedItem);
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.id).toBe(testItemId);
        expect(response.body.name).toBe(updatedItem.name);

        });
    });


//DELETE

    describe('DELETE /items/:id/delete', () => {
        test('should update an item', async () => {
            const response = await request(router).delete(`/items/${testItemId}`);
            expect(response.status).toBe(200);
            expect(response.body).toBeNull();
            expect(response.body.message).toBe('item deleted');
         });
    });
});




