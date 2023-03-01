//import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
//import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
//import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';
import Mosaic from './mosaico/inde';
import Iconify from '../../components/Iconify';
import { useState, useEffect } from 'react';
// material
import { Container, Typography, Link , alpha } from '@mui/material';
// components

import Page from '../../components/Page';
// mock
// import POSTS from '../_mock/blog';

import MenuSuperior from '../MenuSuperior';
// ----------------------------------------------------------------------
import PrimeiroVH from './vewHeight/PrimeiroVh';
import PrimeiroMobile from './1VhMobile/indexMobile';
import useMediaQuery from '@mui/material/useMediaQuery';
import GridAbout from './gridAbout';
import GridCuses from './VHCurces';
import PolstInstagram from './PolstsInstagram';
import FooterPortifolio from './Footer';
import LoadingScreen from '../Carregamnetopage';
//import ScrollSticky from './Scrool Sticky';



export default function HomePortifolio() {
  const matches = useMediaQuery('(min-width:700px)');
  const matches2 = useMediaQuery('(min-width:670px)');
  const matches3 = useMediaQuery('(min-width:1260px)');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Page title="Home Portifolio" marginTop={!isLoading &&8} sx={{ maxWidth: '2200px', margin: '0 alto', alignItems: 'center', backgroundColor: isLoading && 'black' }}>
{
  isLoading && <LoadingScreen style={{zIndex:99999, position: 'absolute', top:10000}}/>
}
      <RootStyle >
       { !isLoading && <MenuSuperior />}
      </RootStyle>
      <div style={{
        height: '100vh',
        width: '100%',

      }}>
        {matches2 ? <PrimeiroVH /> : <PrimeiroMobile />}

      </div>
      <Container maxWidth="sx" sx={{ marginTop: !matches && '50px', height: !matches && 250, width: matches3 ? '70%' : '100%' }}>
        <GridAbout />
      </Container>
      <Container maxWidth="sx" sx={{ width: matches ? '70%' : '100%' }}>
        <>
          <OneTiTleVh style={{ fontSize: matches2 ? '20px' : '17px', }}>Estudo de caso </OneTiTleVh>
          <TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '548px' : '200', }}>Formações & Cursos</TwoTiTleVh>
          <GridCuses />
        </>
      </Container>
      <Container maxWidth="sx" sx={{ width: matches ? '70%' : '100%', marginTop: 25 }}>
        <>
          <OneTiTleVh style={{ fontSize: matches2 ? '20px' : '17px', }}>Fotografia e desenho</OneTiTleVh>
          <TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '548px' : '200', }}>Projetos pessoais</TwoTiTleVh>
        </>
      </Container>

      {/* <Container>  <ProjectCards/></Container> */}
      {/* <Container><TEste/></Container> */}
      <Container maxWidth="sx" sx={{ width: matches ? '70%' : '100%', marginTop: 25 }}>
        <Mosaic />
      </Container>
      <Container maxWidth="sx" sx={{ width: matches ? '70%' : '100%', marginTop: 25 }}>
        <>
          <OneTiTleVh style={{ fontSize: matches2 ? '20px' : '17px', }}>oque há de novo</OneTiTleVh>
          <TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '648px' : '200', }}>Mais recentes no instagram</TwoTiTleVh>
        </>
      </Container>
      <Container>
        <PolstInstagram />
      </Container>
      <Container maxWidth="sx" sx={{ width: matches ? '50%' : '100%', marginTop: 25 }}>
        <CenterAll> <OneTiTleVh style={{ fontSize: matches2 ? '20px' : '17px', }}>Entre em contato</OneTiTleVh></CenterAll>
        <CenterAll>
                  <Link sx={{color: (theme) => alpha(theme.palette.grey[800], 1)}}  href="/contato" target="_self"><TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '648px' : '200', }}>vamos trabalhar juntos <Iconify icon="mdi:arrow-right" width={matches ? 35: 25} height={matches ? 35: 25}  /> </TwoTiTleVh></Link> 
        </CenterAll>
      </Container>
      <Container maxWidth="sx" sx={{ width: matches ? '80%' : '100%', marginTop: 25 }}>
        <FooterPortifolio />
      </Container>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const OneTiTleVh = styled(Typography)(({ theme }) => ({
  width: '311px',
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '35px',

}));
const TwoTiTleVh = styled(Typography)(({ theme }) => ({
  fontFamily: 'Work Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  // lineHeight: '72px',
  letterSpacing: '-0.06em',



}));
const CenterAll = styled('div')(({ theme }) => ({
  width: '100%',
  margin: 0,
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  flex: 'wrap',
  flexWrap: 'wrap',



}));
