class Book{
    constructor(id, title, author, year, price){
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
    }
}

let books = [
    new Book(1, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 10.99),
    new Book(2, 'To Kill a Mockingbird', 'Harper Lee', 1960, 12.99),
    new Book(3, '1984', 'George Orwell', 1949, 10.99)
];

module.exports = {
    getAllBooks: () => books,
    getBookById: (id) => books.find(book => book.id === parseInt(id)),
    createBook: (bookData) => {
        const newBook = new Book(
            books.length + 1,
            bookData.title,
            bookData.author,
            bookData.year
        );
        books.push(newBook);
        return newBook;
    },
    updateBook: (id, bookData) => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return null;
        books[bookIndex] = { ...books[bookIndex], ...bookData };
        return books[bookIndex];
    },
    deleteBook: (id) => {
        const bookIndex = books.findIndex(book => book.id === id);
        if (bookIndex === -1) return null;
        const deletedBook = books.splice(bookIndex, 1);
        return deletedBook[0];
    }
};