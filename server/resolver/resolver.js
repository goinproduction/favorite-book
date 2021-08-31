const resolver = {
    Query: {
        books: () => [
            {
                id: 1,
                name: 'De men',
                genre: 'Adventure',
            },
            {
                id: 2,
                name: 'De men 2',
                genre: 'Adventure',
            },
        ],
    },
};

module.exports = resolver;
