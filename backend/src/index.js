import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import purchaseRoutes from './routes/purchaseRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); 

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/purchases', purchaseRoutes);


app.get('/hello', (req, res) => {
  res.send('Hola Mundo');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
