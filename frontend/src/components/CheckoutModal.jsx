import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import { useCart } from '../context/CartContext';

const CheckoutModal = ({ open, setOpen }) => {
  const { dispatch } = useCart();

  const handleClose = () => {
    fetch('http://localhost:5000/api/cart', {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        dispatch({ type: 'CLEAR_CART' });
        setOpen(false);
        window.location.reload(); // Recargar la página al cerrar el modal
      })
      .catch(error => console.error('Error clearing cart:', error));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="thank-you-modal-title"
      aria-describedby="thank-you-modal-description"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          p={3}
          bgcolor="white"
          borderRadius={4}
          boxShadow={3}
          textAlign="center"
        >
          <Typography id="thank-you-modal-title" variant="h4" component="h2" color="black">
            ¡Thanks for your purchase!
          </Typography>
          <Typography id="thank-you-modal-description" sx={{ mt: 2 }} color="black">
            Your order has been processed successfully.
          </Typography>
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CheckoutModal;
