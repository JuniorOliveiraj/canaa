import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
// material
import { styled } from '@mui/material';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
//
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const SOCIALS = [
  { name: 'FaceBook', icon: <Iconify icon={'uiw:github'} width={16} height={16} /> , href: 'https://github.com/JuniorOliveiraj'},
  { name: 'Google', icon: <Iconify icon={'devicon:google'} width={16} height={16} /> , href: '#'},
  { name: 'Linkedin', icon: <Iconify icon={'skill-icons:linkedin'} width={16} height={16} /> , href: 'https://www.linkedin.com/in/junior-oliveira-ba22381a3/'},
  { name: 'instagram', icon: <Iconify icon={'skill-icons:instagram'} width={16} height={16} /> , href: 'https://www.instagram.com/junyor_oliveiraj/'}
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
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
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
                <IconButton key={social.name} color="primary" sx={{ p: 1 }} href={social.href}component={Link} target="_blank">
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
