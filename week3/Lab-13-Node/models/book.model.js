const short = require('short-uuid');

let books = [
    { id: "uacfSn9ocXUpDW3ZPixiZT", title: 'Book1', ISBN: 111, publishedDate: "01-01-1999", author: 'Alfred' },
    { id: "kHiMCRaBL3N6H4HKbTbkj3", title: 'Book2', ISBN: 222, publishedDate: '01-01-2000', author: 'Toan' },
    { id: "saBaTtb1dshkvf2F45RFPN", title: 'Book3', ISBN: 333, publishedDate: '01-01-2001', author: 'Carol' },

];

module.exports = class Book {

    constructor(title, ISBN, publishedDate, author) {
        this.id = '';
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll() {
        return books;
    }

    static getById(id) {
        const book = books.find(b => b.id === id);
        if (book) {
            return book;
        } else {
            throw new Error(`No book found with Id: ${id}`);
        }
    }

    save() {
        this.id = short.generate();
        books.push(this);
        return this;
    }

    static deleteById(id) {
        const index = books.findIndex(b => b.id === id);
        if (index > -1) {
            const temp = books[index];
            books.splice(index, 1);
            return temp;
        } else {
            throw new Error(`No book found with Id: ${id}`);
        }
    }

    update(id) {
        const index = books.findIndex(b => b.id === id);
        if (index > -1) {
            this.id = id;
            books[index] = this;
        } else {
            throw new Error(`No book found with Id: ${id}`);
        }
    }

}