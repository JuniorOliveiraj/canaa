import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { varFadeInUp, MotionInView } from '../../animate';
// material
import { Box, Link, Grid, Paper, Typography, CardActionArea } from '@mui/material';
//

// ----------------------------------------------------------------------

ComponentCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default function ComponentCard({ item }) {
  const { name, icon, href } = item;
  return (
    <Grid item xs={12} sm={6} md={3}>
     
    </Grid>
  );
}
