import { Typography, CardMedia, Box, Card, Stack } from "@mui/material";

import { useState, forwardRef, useEffect } from 'react';
import { alpha, styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import FormProdutosAgro from './formProdutos';
const drawerBleeding = 15;
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DrawerAddProduto({ media, drawerValue, handleClose, produtosReload, setProdutosReload, produtoSelecionado, ...other }) {
  const [openAdd, setOpenAdd] = useState(drawerValue);
  useEffect(() => {
    setOpenAdd(drawerValue);
  }, [drawerValue]);


  const feixar = (x) => {
    setOpenAdd(false);
    handleClose(false);
    if (x) {
      setProdutosReload(produtosReload + 1)
    }
  };
  const handleClose2 = (x) => {
    setOpenAdd(false);
    handleClose(false);
  };
  return (
    <Box>
      <SwipeableDrawer
        anchor="bottom"
        open={openAdd}
        onClose={handleClose2}
        onOpen={() => { }}
        TransitionComponent={Transition}
        disableSwipeToOpen
        {...other}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
            backgroundColor: (theme) => alpha(theme.palette.grey[999], 0.9),
          }}
        >
          <Puller />
        </Box>
        <List sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[100], 0.9), height: '100%', width: '100%' }}>
          <Divider />
          <ListItem sx={{ width: '100%', paddingTop: 5 }}>
            {produtoSelecionado ? <ProdutoDetalhe produtoSelecionado={produtoSelecionado} /> : <FormProdutosAgro feixar={feixar} />}
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Box>
  );
}

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.grey[200],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));
const ProdutoDetalhe = ({ produtoSelecionado }) => {
  console.log(produtoSelecionado)
  return (
    <>
      <>
        <CardPadrao sx={{ cursor: "pointer" , width: '90%', maxWidth:500}} >
          <CardMedia
            component="img"
            sx={{ width: '90%', minWidth:"80%"}}
            image={produtoSelecionado.imagem_produto ? produtoSelecionado.imagem_produto : "https://cdn-icons-png.flaticon.com/512/1311/1311423.png"}
            alt="Live from space album cover"
          />
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} sx={{ padding: 3 }}>
            <Typography component="div" variant="h5">
              {produtoSelecionado.name_produto}
            </Typography>
            <Typography
              color="text.secondary"
              component="div"
              variant="h5"
            >
              {'R$' + produtoSelecionado.valor_produto}
            </Typography>
          </Stack>
          <Box sx={{ marginLeft: "auto", paddingLeft:3, paddingBottom:2 }}>
            <Typography component="div" variant="h5">
                {produtoSelecionado.created_at}
            </Typography>
          </Box>
        </CardPadrao>
      </>
    </>
  )
}



const CardPadrao = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[999]

}))