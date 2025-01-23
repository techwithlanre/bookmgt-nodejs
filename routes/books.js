const express = require('express');
const router = express.Router();
//const bookController = require('../controllers/bookController');



/*
GET books
GET books/:id
POST books
PUT books/:id {update all data in the resource}
PATCH books/:id (update a particular data in the resource)

*/

const books = [
    {
        id: 1,
        title: 'book1',
        author: 'author1'
    },
    {
        id: 2,
        title: 'book2',
        author: 'author2'
    },
    {
        id: 3,
        title: 'book3',
        author: 'author3'
    },
];

router.get('/', (req, res) => {
    res.json(books);
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.filter((book) => book.id === id);
    res.json(book);
});

module.exports = router;