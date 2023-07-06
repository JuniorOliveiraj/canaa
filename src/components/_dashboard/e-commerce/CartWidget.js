import { sum } from 'lodash';
import Iconify from '../../Iconify';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material';
import { Badge } from '@mui/material';
import { useState, useEffect } from 'react';
// redux

// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

const RootStyle = styled(RouterLink)(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: theme.shape.borderRadiusMd,
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 }
}));

// ----------------------------------------------------------------------

export default function CartWidget() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Coloque aqui a lógica para obter os itens do carrinho ou deixe vazio para simular um carrinho vazio
    const fetchedCartItems = [];
  
    setCartItems(fetchedCartItems);
  }, []);
  const totalItems = sum(cartItems.map((item) => item.quantity));
  
  return (
    <RootStyle to={PATH_DASHBOARD.eCommerce.checkout}>
      <Badge showZero badgeContent={totalItems} color="error" max={99}>
        <Iconify icon={'eva:shopping-cart-fill'} width={24} height={24} />
      </Badge>
    </RootStyle>
  );
}
