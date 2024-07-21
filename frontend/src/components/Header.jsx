import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Badge } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../theme";
import { styled } from '@mui/system';
import { useCart } from '../context/CartContext';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Header = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { cart } = useCart();

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <Offset />
    </>
  );
};

export default Header;
