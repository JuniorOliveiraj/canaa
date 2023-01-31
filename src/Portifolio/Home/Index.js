//import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
//import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
//import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';
import ProjectCards from './CarroseuDesenvolviodos/Index';


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
import GridCuses from './VHCurces';


export default function HomePortifolio() {
  const matches = useMediaQuery('(min-width:700px)');
  const matches2 = useMediaQuery('(min-width:670px)');
  return (
    <Page title="Home Portifolio" marginTop={8} >
      <RootStyle >
        <MenuSuperior />
      </RootStyle>
      <div style={{
        height: matches? '100vh' : '89vh',
        width: '100%',

      }}>

        {matches2 ? <PrimeiroVH /> : <PrimeiroMobile />}

      </div>
      <Container sx={{ width: '100%', marginTop: !matches &&'50px', height: !matches && 250}}>
        <GridAbout />
      </Container>
      <Container >
        <>
          <OneTiTleVh style={{ fontSize: matches2 ? '20px' : '17px', }}>Estudo de caso </OneTiTleVh>
          <TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '548px': '200', }}>Formações & Cursos</TwoTiTleVh>
          <GridCuses />
        </>
      </Container>
      <Container sx={{ width: '100%', marginTop: 25 }}>
        <>
          <OneTiTleVh style={{ fontSize: matches2 ? '20px' : '17px', }}>Fotografia e desenho</OneTiTleVh>
          <TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '548px': '200', }}>Projetos pessoais</TwoTiTleVh>
        </>
      </Container>
    <Container>  <ProjectCards/></Container>
    <Container sx={{height:500}}></Container>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const OneTiTleVh = styled('p')(({ theme }) => ({
  width: '311px',
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '35px',
  color: '#000000',
}));
const TwoTiTleVh = styled('h3')(({ theme }) => ({
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  // lineHeight: '72px',
  letterSpacing: '-0.06em',
  color: '#686868',


}));