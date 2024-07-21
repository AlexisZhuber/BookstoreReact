// src/models/purchaseModel.js
import mongoose from 'mongoose';

const purchaseSchema = mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;