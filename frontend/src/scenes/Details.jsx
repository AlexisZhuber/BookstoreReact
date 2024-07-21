import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Rating, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const StyledImage = styled('img')({
  height: '400px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '20px',
});

const Details = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { book, quantity: 1 } });
    fetch('http://localhost:5000/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookId: book._id, quantity: 1 }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Book added to cart:', data);
      })
      .catch((error) => console.error('Error adding book to cart:', error));
  };

  if (!book) return <div>Loading...</div>;

  const imageUrl = `http://localhost:5000${book.image}`;

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-between" 
      p={3} 
      minHeight="100vh"
      width="100vw"
      overflow="hidden"
    >
      <Box width="100%">
        <Box p={3} display="flex" flexDirection="column" alignItems="center">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <StyledImage src={imageUrl} alt={book.title} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                by {book.author}
              </Typography>
              <Box display="flex" alignItems="center" mt={1}>
                <Rating name="read-only" value={book.rating} readOnly />
                <Typography variant="body2" color="textSecondary" ml={1}>
                  {book.rating}
                </Typography>
              </Box>
              <Typography variant="body1" component="p" gutterBottom style={{ marginTop: '20px' }}>
                {book.description}
              </Typography>
              <Typography variant="h5" color="accent" component="p" gutterBottom style={{ marginTop: '20px' }}>
                ${book.price}
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={addToCart} startIcon={<AddShoppingCartIcon />}>
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
