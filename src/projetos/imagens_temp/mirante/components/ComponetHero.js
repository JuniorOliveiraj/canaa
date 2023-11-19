import { motion } from 'framer-motion';
import Iconify from '../../../../components/Iconify';
// material
import { useTheme, styled } from '@mui/material';
import { Box, Link, Container, Typography, Stack } from '@mui/material';
// components
import { varFadeInUp, varWrapEnter,varFadeInDown } from '../../../../components/animate';
//
import { MHidden } from '../../../../components/@material-extend';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
}));

export default function ComponentHeroMirante() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <motion.div initial="initial" animate="animate" variants={varWrapEnter}>
        <Container
          maxWidth="lg"
          sx={{
            display: { md: 'flex' },
            justifyContent: { md: 'space-between' }
          }}
        >
          <div>
            <motion.div variants={varFadeInUp}>
              <Typography variant="h3" component="h1">
                Todas as rotas Mirante
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Typography
                sx={{
                  mt: 3,
                  mb: 5,
                  color: isLight ? 'text.secondary' : 'common.white'
                }}
              >
                Veja todos os projetos para <br />melhoria da empresa 
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInUp}>
              <Link href="https://lojamirante.com.br/" target="_blank">
                <Stack direction="row" spacing={1} alignItems="center" sx={{ display: 'inline-flex' }}>
                  <Typography variant="button"> Fast preview</Typography>
                  <Iconify icon={'Iconify'} width={20} height={20} />
                </Stack>
              </Link>
            </motion.div>
          </div>

          <MHidden width="mdDown">
            <motion.div variants={varFadeInDown}>
              <Box component="img" src="https://www.lojamirante.com.br/assets/img/logo/logo-mirante.webp" sx={{ maxHeight: 320 }} />
            </motion.div>
          </MHidden>
        </Container>
      </motion.div>
    </RootStyle>
  );
}
