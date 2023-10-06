
import Iconify from '../../Iconify';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material';
import { Button, Box, Link, Container, Typography, Stack, Tooltip  } from '@mui/material';
// routes
import { PATH_DOCS } from '../../../routes/paths';
//
import {   varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

// const HeroOverlayStyle = styled(motion.img)({
//   zIndex: 9,
//   width: '100%',
//   height: '100%',
//   objectFit: 'cover',
//   position: 'absolute'
// });

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '80vh'
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        {/* <HeroOverlayStyle alt="overlay" src="" variants={varFadeIn} /> */}

        <HeroImgStyle alt="hero" src="/static/mock-images/imageHome/HOMELADIPAGE.png" variants={varFadeInUp} />

        <Container maxWidth="lg"  >
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" >
                Um dev <br />
                com nome<br /> de
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;Junior
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography >
                Possuo habilidades em desenvolvimento web, trabalhando com tecnologias como React, Node.js e
                banco de dados MySQL.
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
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DOCS}
                startIcon={<Iconify icon={'icon-park-solid:right-c'} width={20} height={20} />}
              >
               Mais sobre mim
              </Button>
            </motion.div>

            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
             <Tooltip title="Instagram" ><motion.div variants={varFadeInRight}  >  <Link  underline="always" href="https://www.instagram.com/junyor_oliveiraj/"target="_blank">  <Iconify icon={'skill-icons:instagram'} width={20} height={20} /></Link></motion.div></Tooltip> 
             <Tooltip title="Github" ><motion.div variants={varFadeInRight}  >  <Link  underline="always" href="https://github.com/JuniorOliveiraj"target="_blank"> <Iconify icon={'bi:github'} width={20} height={20} /> </Link></motion.div></Tooltip> 
             <Tooltip title="Linkedin" ><motion.div variants={varFadeInRight}  >  <Link  underline="always" href="https://www.linkedin.com/in/junior-oliveira-ba22381a3/"target="_blank"> <Iconify icon={'logos:linkedin-icon'} width={20} height={20} /> </Link></motion.div></Tooltip> 
             <Tooltip title="Facebook " ><motion.div variants={varFadeInRight}  >  <Link  underline="always" href="https://www.facebook.com/junior.oliveira.belem/"target="_blank">  <Iconify icon={'devicon:facebook'} width={20} height={20} /> </Link></motion.div></Tooltip> 
             <Tooltip title="Google" ><motion.div variants={varFadeInRight}  >  <Link  underline="always" href="https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view?usp=drive_link"target="_blank"><Iconify icon={'devicon:google'} width={20} height={20} />  </Link></motion.div></Tooltip> 
             <Tooltip title="whatsapp" ><motion.div variants={varFadeInRight}  >  <Link  underline="always" href="https://wa.me/5549998139167"target="_blank">   <Iconify icon={'logos:whatsapp-icon'} width={20} height={20} /></Link></motion.div></Tooltip> 
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
