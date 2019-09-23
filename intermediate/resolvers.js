exports.resolvers = {

    Query: {
        getAllBooks: (_, args, { Book }) => {
            const books = Book.find();
            return books;
        },
        getBook: (_, { _id }, { Book }) => {
            const book = Book.findOne({ _id });
            return book;
        },
        getUser: async (_, { userId }, { User }) => {
            const user = await User.findOne({ _id: userId }).populate("favoriteBooks");
            return user;
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
        addFavoriteBook: async (_, { userId, bookId }, { User }) => {
            const user = await User.findOne({ _id: userId });
            await user.favoriteBooks.push(bookId);
            return await user.save();
        },
        removeBookFromFavorites: async (_, { userId, bookId }, { User }) => {
            const user = await User.findOne({ _id: userId });
            user.favoriteBooks.pull(bookId);
            user.save();
            return user;
        },
        deleteBook: async (_, { _id }, { Book }) => {
            const deletedBook = await Book.findOneAndDelete({ _id });
            return deletedBook;
        },
        createUser: async (_, { userInput: { name, age, email }}, { User }) => {
            const user = new User({
                name,
                age,
                email
            }).save();
            return user;
        }
    }
}