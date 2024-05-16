const Book = require('../models/book.model');

exports.getAll = (req, res) => {
    res.status(200).json(Book.getAll());
};

exports.getById = (req, res, next) => {
    res.status(200).json(Book.getById(req.params.id));
}

exports.save = (req, res, next) => {
    const newBook = new Book(req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author).save();
    res.status(201).json(newBook);
}

exports.deleteById = (req, res, next) => {
    res.status(200).json(Book.deleteById(req.params.id));
}

exports.updateById = (req, res, next) => {
    new Book(req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author)
        .update(req.params.id);
    res.status(204).end();
}