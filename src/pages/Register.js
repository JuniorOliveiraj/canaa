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
import { RegisterForm } from '../sections/auth/register';
import AuthSocial from '../sections/auth/AuthSocial';
// Framer Motion
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
    backgroundImage: 'url(https://free.minimals.cc/assets/background/overlay.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.2, // Controla a opacidade da imagem
    zIndex: -1, // Garante que a imagem fique atrás do conteúdo
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
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

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle>
          <Logo />
        </HeaderStyle>

        <Container>
          <ContentStyle>
            {/* Adicionando o efeito de flip no Card */}
            <motion.div
              initial={{ rotateY: 50, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card>
                <Box sx={{ padding: 5 }}>
                  <Typography variant="h4" gutterBottom>
                    Get started absolutely free.
                  </Typography>

                  <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                    Free forever. No credit card needed.
                  </Typography>
                  {smUp && (
                    <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                      Already have an account? {''}
                      <Link variant="subtitle2" component={RouterLink} to="/login">
                        Login
                      </Link>
                    </Typography>
                  )}
                  <br />
                  <AuthSocial />

                  <RegisterForm />

                  <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                    By registering, I agree to junior&nbsp;
                    <Link underline="always" color="text.primary" href="#">
                      Terms of Service
                    </Link>
                    {''}and{''}
                    <Link underline="always" color="text.primary" href="#">
                      Privacy Policy
                    </Link>
                    .
                  </Typography>

                  {!smUp && (
                    <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                      Already have an account?{' '}
                      <Link variant="subtitle2" to="/login" component={RouterLink}>
                        Login
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
