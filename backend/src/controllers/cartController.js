import Cart from '../models/cartModel.js';
import Book from '../models/bookModel.js';

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('book');
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  const { bookId, quantity } = req.body;
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    let cartItem = await Cart.findOne({ book: bookId });
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({ book: bookId, quantity });
    }
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Cart.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    res.status(200).json({ message: 'Item removed from cart', item });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.status(200).json({ message: 'All items removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
