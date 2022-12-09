//import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
//import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
//import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';



// material
import { Container } from '@mui/material';
// components

import Page from '../../components/Page';
// mock
//import POSTS from '../_mock/blog';

import MenuSuperior from '../MenuSuperior';
// ----------------------------------------------------------------------
import PrimeiroVH from './vewHeight/PrimeiroVh';
import PrimeiroMobile from './1VhMobile/indexMobile';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function HomePortifolio() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Page title="Home" marginTop={8}>
      <RootStyle >
        <MenuSuperior />

      </RootStyle>
      {matches ? <PrimeiroVH /> : <PrimeiroMobile />


      }


      <Container sx={{ backgroundColor: 'red', width: '100%' }}>

      </Container>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});