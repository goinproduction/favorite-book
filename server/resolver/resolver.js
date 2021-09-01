const { books, authors } = require('../data/static');
const Book = require('../models/Book');
const Author = require('../models/Author');

const resolver = {
    // QUERY
    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBooks(),
        book: (parent, args) => books.find((book) => book.id == args.id),
        authors: () => authors,
        author: (parent, args) =>
            authors.find((author) => author.id == args.id),
    },
    Book: {
        author: (parent, args) =>
            authors.find((author) => author.id == parent.authorId),
    },
    Author: {
        books: (parent, args) =>
            books.filter((book) => book.authorId == parent.id),
    },

    // MUTATION
    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args),
    },
};

module.exports = resolver;
