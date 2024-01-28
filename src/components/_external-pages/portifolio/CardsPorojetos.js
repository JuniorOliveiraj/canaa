import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { paramCase } from 'change-case';
// material
import { Box, Link, Grid, Paper, Typography, CardActionArea, Stack } from '@mui/material';
//
import { varFadeInUp, MotionInView } from '../../animate';
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------


ProjetsCard.propTypes = {
  item: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};


export default function ProjetsCard({ item, post }) {
  //const { name, icon, href } = item;
  const { cover, title, id} = post;
  const linkTo = `ler/${paramCase(title)}-${id}`;
  return (
    <Grid item xs={12} sm={6} md={6} sx={{ justifyContent: 'center', alignItems: 'center', }}>
      <MotionInView variants={varFadeInUp}>
        <Link component={RouterLink}
          to={linkTo}
          underline="none">
          <Paper
            sx={{
              p: 1,
              boxShadow: (theme) => theme.customShadows.z8,
              '&:hover img': { transform: 'scale(1.03)' },
            }}
          >
            <CardActionArea
              sx={{
                p: 1,
                borderRadius: 1,
                color: 'primary.main',
                bgcolor: 'background.neutral'

              }}
            >
              <Box
                component="img"
                src={cover}
                alt={title}
                sx={{
                  mx: 'auto',
                  transition: (theme) => theme.transitions.create('all'),
                  borderRadius: 1.2
                }}
              />
            </CardActionArea>
            <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ padding: '0 2%' }}>
              <Typography variant="subtitle2" sx={{ mt: 1, p: 1 }}>
                {title}
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 1, p: 1 }}>
                Ler mais <Iconify width={10} height={10} icon="teenyicons:right-solid" />
              </Typography>
            </Stack>
          </Paper>
        </Link>
      </MotionInView>
    </Grid>
  );
}
