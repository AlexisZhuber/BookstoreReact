import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import CheckoutModal from '../components/CheckoutModal';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/cart')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_CART', payload: data }))
      .catch(error => console.error('Error fetching cart:', error));
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    fetch(`http://localhost:5000/api/cart/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
      })
      .catch(error => console.error('Error removing item from cart:', error));
  };

  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + (item.book?.price || 0) * item.quantity, 0) * (1 - discount) + shipping;
    const purchase = {
      total: total.toFixed(2),
      date: new Date().toLocaleString(),
    };

    fetch('http://localhost:5000/api/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchase),
    })
      .then(response => response.json())
      .then(() => {
        dispatch({ type: 'CLEAR_CART' });
        setOpen(true);
      })
      .catch(error => console.error('Error processing purchase:', error));
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
        <Box 
          display="flex" 
          justifyContent="space-between" 
          flexDirection={{ xs: 'column', md: 'row' }}
          width="100%"
        >
          <Box flex={3} pr={{ md: 2 }}>
            <Typography variant="h4" mb={2}>Shopping cart</Typography>
            {cart.map(item => (
              <CartItem key={item._id} item={item} onRemove={handleRemoveItem} />
            ))}
            <Box display="flex" justifyContent="space-between" mt={2}>
              <TextField 
                label="Coupon code" 
                variant="outlined" 
                size="small" 
                value={coupon} 
                onChange={(e) => setCoupon(e.target.value)} 
              />
              <Button variant="contained" color="primary" onClick={handleApplyCoupon}>
                Apply coupon
              </Button>
            </Box>
          </Box>
          <Box flex={1} mt={{ xs: 2, md: 0 }}>
            <CartSummary
              subtotal={cart.reduce((sum, item) => sum + (item.book?.price || 0) * item.quantity, 0).toFixed(2)}
              shipping={shipping}
              discount={discount}
              total={(cart.reduce((sum, item) => sum + (item.book?.price || 0) * item.quantity, 0) * (1 - discount) + shipping).toFixed(2)}
              setShipping={setShipping}
              handleCheckout={handleCheckout}
              isCartEmpty={cart.length === 0}
            />
          </Box>
        </Box>
      </Box>

      <CheckoutModal open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Cart;
