import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { Link } from '@mui/material';
import LoadingScreen from '../../Portifolio/Carregamnetopage';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});


const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DashboardLayout() {
  const [open, setOpen] = useState(false);


  const [open2, setOpen2] = React.useState(true);
  const TitleStyle = styled(Link)({
    height: 44,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    cursor:'pointer'
  });
 

  const handleClose = () => {
    setOpen2(false);
  };


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []); 
  return (
    
    <RootStyle >
       
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <>
      <div>
   
      <Dialog

        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{backgroundColor:"#CDCCCC"}}>{"Erro externo"}</DialogTitle>
        <DialogContent sx={{backgroundColor:'#CDCCCC'}}>
          <DialogContentText sx={{backgroundColor:'#CDCCCC'    , color : (theme) => alpha(theme.palette.grey[800])}} id="alert-dialog-slide-description" >
            Lamento mas essa dashboard está sem a API Back End e sem Banco de dados  Para fuinionamento. Não Subi ela  apenas em LocalHolst acesse
            <TitleStyle
            onClick={() => {
              window.location.replace('https://github.com/JuniorOliveiraj')
              
            }}
            > GitHub</TitleStyle>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor:'#CDCCCC'}}>
          
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
      </>
      <MainStyle>
        <Outlet />
      </MainStyle>
      {isLoading &&<div style={{position:'absolute', width:'100vh' , zIndex:9999999999999}}><LoadingScreen/></div>}
    </RootStyle>
  );
}
