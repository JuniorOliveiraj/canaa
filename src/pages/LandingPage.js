// material
import { styled, Typography } from '@mui/material';
import Iconify from '../components/Iconify';
// components
import Page from '../components/Page';
import { Container, Link, alpha } from '@mui/material';
import LandingHero from '../components/_external-pages/landing/LandingHero';
import LandingjuniorHelps from '../components/_external-pages/landing/LandingJunior';
//import Landingprimeiro from '../components/_external-pages/landing/primeiro';
import GridAbout from '../Portifolio/Home/gridAbout';
import Mosaic from '../Portifolio/Home/mosaico/inde';
import GridCuses from '../Portifolio/Home/VHCurces';
import useMediaQuery from '@mui/material/useMediaQuery';
import PolstInstagram from '../Portifolio/Home/PolstsInstagram';
import LandingThemeColor from '../components/_external-pages/landing/LandingThemeColor';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));
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

// ----------------------------------------------------------------------

export default function LandingPage() {
  const matches = useMediaQuery('(min-width:700px)');
  const matches2 = useMediaQuery('(min-width:670px)');
  const matches3 = useMediaQuery('(min-width:1260px)');
  return (
    <RootStyle title="home | portifolio" id="move_top">
      <LandingHero />
      <ContentStyle>
      <LandingjuniorHelps />
        <Container maxWidth="sx" sx={{ marginTop: !matches ? '70px': 10, height: !matches && 250, width: matches3 ? '70%' : '100%' }}>
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
      <Container maxWidth="sx" sx={{ width: matches ? '70%' : '100%', marginTop: 25 }}>
        <Mosaic />
      </Container>
      <Container maxWidth="sx" sx={{ width: matches ? '70%' : '100%', marginTop: 40 }}>
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
          <Link sx={{ color: (theme) => alpha(theme.palette.grey[800], 1) }} href="/contato" target="_self"><TwoTiTleVh style={{ fontSize: matches2 ? '51px' : '30px', width: matches ? '648px' : '200', }}>vamos trabalhar juntos <Iconify icon="mdi:arrow-right" width={matches ? 35 : 25} height={matches ? 35 : 25} /> </TwoTiTleVh></Link>
        </CenterAll>
      </Container>
      <LandingThemeColor />
        {/* <LandingHugePackElements />
        <LandingDarkMode />
        <LandingThemeColor />
        <LandingCleanInterfaces />
        <LandingPricingPlans />
        <LandingAdvertisement /> */}
      </ContentStyle>
    </RootStyle>
  );
}
