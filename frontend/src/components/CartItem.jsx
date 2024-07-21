// src/components/CartItem.jsx
import React from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item, onRemove }) => {
  const { book, quantity, _id } = item;
  const imageUrl = `http://localhost:5000${book.image}`;

  return (
    <Box 
      display="flex" 
      alignItems="center" 
      mb={2} 
      p={2} 
      border={1} 
      borderRadius={4} 
      bgcolor="#2c2c2c" 
      color="#fff"
    >
      <Box component="img" src={imageUrl} alt={book.title} height="100px" width="100px" mr={2} />
      <Box flexGrow={1}>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="white">{book.author}</Typography>
        <Box display="flex" alignItems="center">
          <TextField
            type="number"
            variant="outlined"
            size="small"
            value={quantity}
            inputProps={{ min: 1, style: { color: 'white' } }}
            style={{ width: '60px', marginRight: '10px' }}
            onChange={(e) => {
              const newQuantity = Math.max(1, Number(e.target.value));
              // Aquí podrías agregar una función para manejar la actualización de la cantidad
            }}
          />
          <Typography variant="body1">{book.price} CAD</Typography>
        </Box>
      </Box>
      <IconButton onClick={() => onRemove(_id)} aria-label="delete" style={{ color: 'red' }}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
