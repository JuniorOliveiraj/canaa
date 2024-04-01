import {  Outlet } from 'react-router-dom';
// material
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';
import {  styled } from '@mui/material';
// ----------------------------------------------------------------------
const ScrollbarStyle = styled('div')(({ theme }) => ({
  "& ::-webkit-scrollbar": {
    width: 2,
    height: 2
  },

  /* Track */
  '& ::-webkit-scrollbar-track:': {
    background: ' #f1f1f1'
  },

  /* Handle */
  '& ::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main
  },

  /* Handle on hover */
  '& ::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.light
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
