// src/controllers/purchaseController.js
import Purchase from '../models/purchaseModel.js';

export const createPurchase = async (req, res) => {
  const { total, date } = req.body;

  try {
    const newPurchase = new Purchase({ total, date });
    await newPurchase.save();
    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(500).json({ message: 'Error creating purchase', error });
  }
};
