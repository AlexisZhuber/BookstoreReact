import express from 'express';
import { getBooks, createBook, getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);

export default router;
