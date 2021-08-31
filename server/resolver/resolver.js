const { books, authors } = require('../data/static');

const resolver = {
    Query: {
        books: () => books,
        authors: () => authors,
    },
};

module.exports = resolver;
