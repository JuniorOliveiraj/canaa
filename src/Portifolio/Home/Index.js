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
import GridAbout from './gridAbout';


export default function HomePortifolio() {
  const matches = useMediaQuery('(min-width:1060px)');

  return (
    <Page title="Home Portifolio" marginTop={8} >
      <RootStyle >
        <MenuSuperior />
      </RootStyle>
      <div style={{
        height: '800px',
        width: '100%',
      }}>
        {matches ? <PrimeiroVH /> : <PrimeiroMobile />}
      </div>
      <Container sx={{ width: '100%', marginTop: matches ? '300px' : '50px' }}>
        <GridAbout />
      </Container>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});