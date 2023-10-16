import {  Outlet } from 'react-router-dom';
// material
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';
import { Box, styled } from '@mui/material';
// ----------------------------------------------------------------------
const ScrollbarStyle = styled(Box)(({ theme }) => ({
  "& ::-webkit-scrollbar": {
    width: "7px"
  },
  
  /* Track */
  '& ::-webkit-scrollbar-track:' :{
    background:' #f1f1f1'
  },
   
  /* Handle */
  '& ::-webkit-scrollbar-thumb': {
    background:  theme.palette.primary.light
  },
  
  /* Handle on hover */
  '& ::-webkit-scrollbar-thumb:hover':  {
    background:' #555'
  }
}));
export default function MainLayout() {
  return (
    <ScrollbarStyle>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

        <MainFooter />
    
    </ScrollbarStyle>
  );
}
