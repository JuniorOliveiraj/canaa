//import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
//import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
//import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';



// material
import {Container} from '@mui/material';
// components

import Page from '../../components/Page';
// mock
//import POSTS from '../_mock/blog';

import MenuSuperior from '../MenuSuperior';
// ----------------------------------------------------------------------
import PrimeiroVH from './vewHeight/PrimeiroVh';

export default function HomePortifolio() {


  return (
    <Page title="Home" marginTop={8}>
    <RootStyle >
      <MenuSuperior />
    
    </RootStyle>

    <PrimeiroVH/>
        
        <Container sx={{backgroundColor:'red', width:'100%'}}> 
   
        </Container>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});