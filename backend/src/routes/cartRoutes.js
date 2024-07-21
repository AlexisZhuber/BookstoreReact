import express from 'express';
import { getCartItems, addToCart, removeFromCart, clearCart } from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addToCart);
router.delete('/:id', removeFromCart);
router.delete('/', clearCart);

export default router;
