// src/components/CartSummary.jsx
import React from 'react';
import { Box, Typography, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

const CartSummary = ({ subtotal, shipping, discount, total, setShipping, handleCheckout, isCartEmpty }) => {
  return (
    <Box p={2} border="1px solid grey" borderRadius={2} boxShadow={3}>
      <Typography variant="h6" mb={2}>Cart totals</Typography>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1">{subtotal} CAD</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="body1" mb={1}>Shipping</Typography>
        <RadioGroup value={shipping} onChange={(e) => setShipping(Number(e.target.value))}>
          <FormControlLabel value={0} control={<Radio />} label="Free shipping" />
          <FormControlLabel value={10} control={<Radio />} label="Flat rate: $10.00" />
          <FormControlLabel value={15} control={<Radio />} label="Pickup: $15.00" />
        </RadioGroup>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1">Discount</Typography>
        <Typography variant="body1">{(subtotal * discount).toFixed(2)} CAD</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="body1">Total</Typography>
        <Typography variant="body1">{total} CAD</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleCheckout}
        disabled={isCartEmpty}
      >
        Proceed to checkout
      </Button>
    </Box>
  );
};

export default CartSummary;
