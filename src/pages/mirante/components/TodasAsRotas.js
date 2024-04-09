// material
//
import { Link as RouterLink } from 'react-router-dom';
import { varFadeInUp,MotionInView } from '../../../components/animate';
import { Box, Link, Grid, Paper, Typography, CardActionArea } from '@mui/material';

import { snakeCase } from 'change-case';

// ----------------------------------------------------------------------
export const LISTA_ROTAS = [
    'chart_cupom',
    'mostrar_json',
    'zpl_view'

].map((item) => ({
    name: item,
    href: `/${snakeCase(item)}`,
    icon: `/static/illustrations/mirante/ic_extra_${snakeCase(item)}.svg`
}));


// ----------------------------------------------------------------------

export default function ComponentExtraMirante() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h5" paragraph>
                    Extra Component
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Chart, Map, Editor…
                </Typography>
            </Grid>

            <Grid item xs={12} sm={8}>
                <Grid container spacing={3}>
                    {LISTA_ROTAS.map((item) => {
                         const { name, icon, href } = item;
                        return (
                            <Grid item xs={12} sm={6} md={3}>
                            <MotionInView variants={varFadeInUp}>
                              <Link component={RouterLink} to={`.${href}`} underline="none">
                                <Paper
                                  sx={{
                                    p: 1,
                                    boxShadow: (theme) => theme.customShadows.z8,
                                    '&:hover img': { transform: 'scale(1.1)' }
                                  }}
                                >
                                  <CardActionArea
                                    sx={{
                                      p: 3,
                                      borderRadius: 1,
                                      color: 'primary.main',
                                      bgcolor: 'background.neutral'
                                    }}
                                  >
                                    <Box
                                      component="img"
                                      src={icon}
                                      alt={name}
                                      sx={{
                                        mx: 'auto',
                                        transition: (theme) => theme.transitions.create('all')
                                      }}
                                    />
                                  </CardActionArea>
                      
                                  <Typography variant="subtitle2" sx={{ mt: 1, p: 1 }}>
                                    {name}
                                  </Typography>
                                </Paper>
                              </Link>
                            </MotionInView>
                          </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    );
}
