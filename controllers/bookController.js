const BookModel = require('../models/bookModel');

const getAllBooks = (req, res) => {
    const books = BookModel.getAllBooks();
    res.json(books);
};

const getBookById = (req, res) => {
    const book = BookModel.getBookById(req.params.id);
    res.json(book);
};

const createBook = (req, res) => {
    const { title, author, year, price } = req.body;

    if (!title) {
        return res.status(400).json({ message: 'Book title is required' });
    }

    if (!title || !author || !year) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newBook = BookModel.createBook({ title, author, year, price });
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author, year, price } = req.body;
    const updatedBook = BookModel.updateBook(bookId, { title, author, year, price });
    if (updatedBook) {
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

const deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const deletedBook = BookModel.deleteBook(bookId);
    if (deletedBook) {
        res.json({ message: 'Book deleted', book: deletedBook });
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};