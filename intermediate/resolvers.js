exports.resolvers = {

    Query: {
        getBook: async (_, { _id }, { Book }) => {
            const book = await Book.findOne({ _id });
            return book;
        },
        getAllBooks: async (_, args, { Book }) => {
            const allBooks = Book.find();
            return allBooks;
        }
    },

    Mutation: {
        addBook: async (_, { book }, { Book }) => {
            const newBook = await new Book({
                name,
                author,
                description,
                category,
                pageCount
            }).save();
            return newBook;
        }
    }
}