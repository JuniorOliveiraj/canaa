import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography, Box } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Logo from '../components/Logo';
// sections
import { LoginForm } from '../sections/auth/login';
import AuthSocial from '../sections/auth/AuthSocial';
import { motion } from 'framer-motion';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden', // Evita o conteúdo exceder os limites
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(static/background/overlay.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2, // Controla a opacidade da imagem
    zIndex: -1, // Garante que a imagem fique atrás do conteúdo
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

 

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));
const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(1, 5, 0, 7),
  },
}));

// ----------------------------------------------------------------------

export default function Login() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Login">
      <RootStyle>
      <HeaderStyle>
          <Logo />

        </HeaderStyle>
        <Container maxWidth="sm">
          <ContentStyle>
          <motion.div
              initial={{ rotateY: 50, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
            <Card>
              <Box sx={{margin:5, }}>
              <Typography variant="h4" gutterBottom>
                Sign now
              </Typography>

              <Typography sx={{ color: 'text.secondary', mb: 5 }}>Enter your details below.</Typography>
              {smUp && (
                <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                  Don’t have an account? {''}
                  <Link variant="subtitle2" component={RouterLink} to="/register">
                    Get started
                  </Link>
                </Typography>
              )}
              <br/>
              <AuthSocial />
              <LoginForm />
              {!smUp && (
                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                  Don’t have an account?{' '}
                  <Link variant="subtitle2" component={RouterLink} to="/register">
                    Get started
                  </Link>
                </Typography>
              )}


              </Box>
            </Card>
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
