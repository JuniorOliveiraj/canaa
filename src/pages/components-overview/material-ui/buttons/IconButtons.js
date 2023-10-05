// material
import { Grid, IconButton } from '@mui/material';
// components
import { MIconButton } from '../../../../components/@material-extend';
//
import { Block } from '../../Block';
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
};

export default function IconButtons() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Block title="Base" sx={style}>
          <IconButton color="inherit">
             <Iconify icon={'material-symbols:alarm'} />
          </IconButton>
          <IconButton>
             <Iconify icon={'material-symbols:alarm'} />
          </IconButton>
          <IconButton color="primary">
             <Iconify icon={'material-symbols:alarm'} />
          </IconButton>
          <IconButton color="secondary">
             <Iconify icon={'material-symbols:alarm'} />
          </IconButton>
          <IconButton disabled>
             <Iconify icon={'material-symbols:alarm'} />
          </IconButton>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Adding Colors" sx={style}>
          <MIconButton color="inherit">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton>
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="primary">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="secondary">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="info">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="success">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="warning">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="error">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Size" sx={style}>
          <MIconButton size="small" color="info">
            <Iconify icon={'material-symbols:alarm'} fontSize="inherit" />
          </MIconButton>
          <MIconButton color="info">
            <Iconify icon={'material-symbols:alarm'} fontSize="small" />
          </MIconButton>
          <MIconButton color="info">
             <Iconify icon={'material-symbols:alarm'} />
          </MIconButton>
          <MIconButton color="info">
            <Iconify icon={'material-symbols:alarm'} fontSize="large" />
          </MIconButton>
        </Block>
      </Grid>
    </Grid>
  );
}
