import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
// material
import { Button, styled, useMediaQuery, useTheme } from '@mui/material';
import { Box, Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
//
import Logo from '../../components/Logo';
import { motion } from 'framer-motion';
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../components/animate';
import Spline from '@splinetool/react-spline';
import MotionInView from '../../components/animate/MotionInView';
import { useEffect, useRef } from 'react';
// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: <Iconify icon={'uiw:github'} width={16} height={16} />, href: 'https://github.com/JuniorOliveiraj' },
  { name: 'Google', icon: <Iconify icon={'devicon:google'} width={16} height={16} />, href: '#' },
  { name: 'Linkedin', icon: <Iconify icon={'skill-icons:linkedin'} width={16} height={16} />, href: 'https://www.linkedin.com/in/junior-oliveira-ba22381a3/' },
  { name: 'instagram', icon: <Iconify icon={'skill-icons:instagram'} width={16} height={16} />, href: 'https://www.instagram.com/junyor_oliveiraj/' }
];

const LINKS = [
  {
    headline: 'Junior',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: 'junioroliveira.belem@gmail.com', href: '#' },
      { name: 'Brasil, 74  Gaspar Bela vista', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default

}));


const HeroOverlayStyle = styled(motion.img)({
  zIndex: 0,
  objectFit: 'cover',
  position: 'absolute',
  width: '100%',
  height: '100%',

  top: 0,
  left: 0,
});
// ----------------------------------------------------------------------

export default function MainFooterNew() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <RootStyle>
      <HeroOverlayStyle alt="overlay" src="static/mock-images/imageHome/NNkT15Ke5yDItC8ENkYmcbYd1hg-_1_.png" variants={varFadeIn} />

      <Divider />
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Grid container spacing={isDesktop ? 10 : 5}>
          <Grid item xs={12} md={6}>
            <MotionInView variants={varFadeInUp}>
              <FooterLink />
            </MotionInView>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <MotionInView variants={varFadeInUp}>
              <Element3d />
            </MotionInView>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Possuo habilidades em desenvolvimento web, trabalhando com tecnologias como React, Node.js e banco de dados MySQL
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }} href={social.href} component={Link} target="_blank">
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        component={RouterLink}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          © 2021. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}

const SplineWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -300,
  width: '100%',
  height: '500px',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  pointerEvents: 'none',
  [theme.breakpoints.up('lg')]: {
    height: '600px',
  },
}));

  function Element3d() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const splineWrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = splineWrapperRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
    };

    if (wrapper) {
      wrapper.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        wrapper.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <Box
      component={motion.div}
      sx={{
        width: '100%',
        maxWidth: '1200px',
        position: 'relative',
        display: !isDesktop ? 'none' : 'flex',
      }}
    >
      <SplineWrapper ref={splineWrapperRef}>
        <Spline
          scene="https://prod.spline.design/U7gv7mSf8PY-0JEj/scene.splinecode"
        />
      </SplineWrapper>
    </Box>
  );
}


function FooterLink({ href, children }) {
  return (

    <Box
      component={motion.div}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Top Section */}
      <Stack direction="column" alignItems="left" gap={2}>

        {/* Title */}
        <Box>
          <Typography variant="h2" sx={{ fontWeight: 400 }}>
            Junior de Oliveira Belem
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
          >
            Full stack developer
          </Typography>
        </Box>

        {/* Button */}
        <Box>
          <Button variant='outlined' color="primary" size="large" component={RouterLink} to={PATH_PAGE.contact}>
            Entrar em contato
          </Button>
        </Box>
      </Stack>

      <Box margin={1} />
    </Box>
  );
}
