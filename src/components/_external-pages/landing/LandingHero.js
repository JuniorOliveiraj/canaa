
import Iconify from '../../Iconify';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material';
import { Button, Box, Link, Container, Typography, Stack, Tooltip } from '@mui/material';
// routes
import { PATH_DOCS } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
import useSettings from '../../../hooks/useSettings';
import Spline from '@splinetool/react-spline';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({


}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 650,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  height: '100vh',


  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));


const HeroOverlayStyle = styled(motion.div)({
  zIndex: 0,
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  position: 'absolute',
  opacity: '0.8 !important',
});

const BackgroundVideo = styled(motion.video)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

});

const HeroImgStyle = styled(motion.div)(({ theme }) => ({
  // ... todos os outros estilos que já definimos
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: 'absolute',
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    display: 'block',
    opacity: 1,
    margin: 'unset',
    width: '60%',
    height: '100vh',
    right: 0,
    transformOrigin: 'right center',
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  const { themeColor } = useSettings();
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" variants={varFadeIn} >
          <BackgroundVideo autoPlay muted loop playsInline>
            <source src="static/background/x63grw3MJJK8pzlD0qnG8C0qVfs.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </BackgroundVideo>
        </HeroOverlayStyle>

        <HeroImgStyle variants={varFadeInUp} >
          <Spline scene="https://prod.spline.design/Stpx07992dBpMkVd/scene.splinecode" />
        </HeroImgStyle>

        <Container maxWidth="lg" sx={{ transform: 'scale(1.1)' }} >
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <HighlightTag />
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{
                fontWeight: 500, fontSize: { xs: '2.5rem', sm: '3rem', md: '5rem' }, lineHeight: { xs: '2rem', sm: '3rem', md: '5rem' },
                color: {  // Aplicando gradiente no texto
                  background: 'linear-gradient(to right, white, gray)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', // para alguns navegadores que suportam
                  color: 'transparent',
                }
              }}>
                Tecnologia, Design<br />
                & Código<br />
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{
                maxWidth: 500,
                color: {  // Aplicando gradiente no texto
                  background: 'linear-gradient(to right, white, gray)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', // para alguns navegadores que suportam
                  color: 'transparent',
                }
              }} >
                Unindo design, tecnologia e estratégia para construir experiências digitais que se destacam.
              </Typography>
            </motion.div>

            <Stack
              component={motion.div}
              variants={varFadeInRight}
              direction="row"
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Iconify icon={'teenyicons:pdf-outline'} width={20} height={20} />
              <Tooltip title="curriculo pdf" >
                <Link
                  underline="always"
                  href="https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view?usp=drive_link"
                  target="_blank"

                  sx={{ typography: 'body2' }}
                >
                  curriculo em pdf
                </Link>
              </Tooltip>


            </Stack>

            <motion.div variants={varFadeInRight}>
              <Stack direction="row" spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to={PATH_DOCS}
                  sx={{
                    bgcolor: 'white',
                    color: 'black',
                    '&:hover': { bgcolor: themeColor, opacity: 0.9 },
                    fontWeight: 400,
                    border: "3px solid rgba(255,255,255,0.15)",
                    boxShadow:
                      "0px 8px 40px rgba(0,85,255,0.5), 0px 0px 10px 1px inset rgba(255,255,255,0), 0px 0px 0px 1px rgba(0,85,255,0.12)",
                  }}
                  startIcon={<Iconify icon={'icon-park-solid:right-c'} width={20} height={20} />}
                >
                  Mais sobre mim
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  component={RouterLink}
                  to={PATH_DOCS}
                  sx={{
                    bgcolor: '#262626',
                    color: 'white',
                    '&:hover': { bgcolor: themeColor, opacity: 0.9 },
                    fontWeight: 400,
                    opacity: 0.8,  
                  }}
                  startIcon={<Iconify icon={'icon-park-solid:right-c'} width={20} height={20} />}
                >
                  Mais sobre mim
                </Button>
              </Stack>
            </motion.div>


            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Tooltip title="Instagram" ><motion.div variants={varFadeInRight}  >  <Link underline="always" href="https://www.instagram.com/junyor_oliveiraj/" target="_blank">  <Iconify icon={'skill-icons:instagram'} width={20} height={20} /></Link></motion.div></Tooltip>
              <Tooltip title="Github" ><motion.div variants={varFadeInRight}  >  <Link underline="always" href="https://github.com/JuniorOliveiraj" target="_blank"> <Iconify icon={'bi:github'} width={20} height={20} /> </Link></motion.div></Tooltip>
              <Tooltip title="Linkedin" ><motion.div variants={varFadeInRight}  >  <Link underline="always" href="https://www.linkedin.com/in/junior-oliveira-ba22381a3/" target="_blank"> <Iconify icon={'logos:linkedin-icon'} width={20} height={20} /> </Link></motion.div></Tooltip>
              <Tooltip title="Facebook " ><motion.div variants={varFadeInRight}  >  <Link underline="always" href="https://www.facebook.com/junior.oliveira.belem/" target="_blank">  <Iconify icon={'devicon:facebook'} width={20} height={20} /> </Link></motion.div></Tooltip>
              <Tooltip title="Google" ><motion.div variants={varFadeInRight}  >  <Link underline="always" href="https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view?usp=drive_link" target="_blank"><Iconify icon={'devicon:google'} width={20} height={20} />  </Link></motion.div></Tooltip>
              <Tooltip title="whatsapp" ><motion.div variants={varFadeInRight}  >  <Link underline="always" href="https://wa.me/5549998139167" target="_blank">   <Iconify icon={'logos:whatsapp-icon'} width={20} height={20} /></Link></motion.div></Tooltip>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}


const HighlightTag = () => {
  return (
    <Box
      sx={{
        marginTop: 4,
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '10px',
        backdropFilter: 'blur(2.5px)',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        display: 'flex',
        gap: 1,
        p: 1,
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          border: '2px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '6px',
          backdropFilter: 'blur(2px)',
          backgroundColor: 'rgb(0, 85, 255)',
          px: 1,
          py: 0.2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 350%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          DEV
        </Typography>
      </Box>

      <Typography
        variant="h6"
        sx={{
          background: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(153, 153, 153, 0) 350%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 200,
        }}
      >
        Junior de Oliveira Belem
      </Typography>
    </Box>
  );
};
