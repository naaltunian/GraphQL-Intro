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
        addBook: async (_, { book: { name, author, description, category, pageCount } }, { Book }) => {
            const newBook = await new Book({
                name,
                author,
                description,
                category,
                pageCount
            }).save();
            return newBook;
        },

        deleteBook: async (_, { _id }, { Book }) => {
            const deletedBook = await Book.deleteOne({ _id });
            return deletedBook;
        }
    }
}