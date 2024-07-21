import Book from '../models/bookModel.js';

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  const { title, author, price, rating, description } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  const newBook = new Book({ title, author, price, rating, description, image });

  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
