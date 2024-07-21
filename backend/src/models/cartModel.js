import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true, default: 1 },
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
