import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Rating } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)({
  width: 200,
  margin: 'auto',
  textAlign: 'center',
  backgroundColor: '#282c34', 
  color: '#fff', 
});

const StyledCardMedia = styled(CardMedia)({
  height: 300,
  objectFit: 'contain',
});

const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const imageUrl = `http://localhost:5000${book.image}`;

  const handleClick = () => {
    navigate(`/details/${book._id}`);
  };

  return (
    <StyledCard onClick={handleClick}>
      <StyledCardMedia
        component="img"
        image={imageUrl}
        title={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="accent">
          by {book.author}
        </Typography>
        <Typography variant="h6" color="accent">
            ${book.price}
          </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          <Rating name="read-only" value={book.rating} readOnly />
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default BookCard;
