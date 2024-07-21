import React, { useState } from 'react';
import axios from '../axiosConfig'; // Importa tu configuración de axios
import { Box, Button, TextField, Typography, InputLabel, Input } from '@mui/material';

const UploadBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('image', image);

    try {
      const response = await axios.post('/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Book uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading book', error);
    }
  };
  
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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4">Upload a New Book</Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <TextField
        label="Rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <InputLabel htmlFor="upload-image">Upload Image</InputLabel>
      <Input
        id="upload-image"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Upload Book
      </Button>
    </Box>
    </Box>
    </Box>
  );
};

export default UploadBookForm;
