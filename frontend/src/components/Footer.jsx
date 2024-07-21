// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', p: 4, mt: 4 }}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>
            Project Information
          </Typography>
          <Typography variant="body2">
            Class: 24S JavaScript Frameworks - 202
          </Typography>
          <Typography variant="body2">
            Project: Online Bookstore
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>
            Team Members
          </Typography>
          <Typography variant="body2">
            Alexis Mora
          </Typography>
          <Typography variant="body2">
            Gabriela Bueno
          </Typography>
          <Typography variant="body2">
            Pedro Froes
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
            GitHub Repository
          </Link>
          <Link href="https://legacy.reactjs.org/docs/getting-started.html" color="inherit" variant="body2" display="block" gutterBottom>
            Documentation
          </Link>
          <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
            Contact Us
          </Link>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2">
          &copy; 2024 Online Bookstore. All rights reserved.
        </Typography>
        <Typography variant="body2">
          24S JavaScript Frameworks - 202 | Prof. Sagara Samarawickrama
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
