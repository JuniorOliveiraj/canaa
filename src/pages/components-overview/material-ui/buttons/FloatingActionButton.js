// material
import Iconify from '../../../../components/Iconify';
import { Grid, Fab } from '@mui/material';
// components
import { MFab } from '../../../../components/@material-extend';
//
import { Block } from '../../Block';

// ----------------------------------------------------------------------

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

export default function FloatingActionButton() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Block title="Base" sx={style}>
          <Fab color="default">
            <Iconify icon={'material-symbols:alarm'} />
          </Fab>
          <Fab>
            <Iconify icon={'material-symbols:alarm'} />
          </Fab>
          <Fab color="secondary">
            <Iconify icon={'material-symbols:alarm'} />
          </Fab>
          <Fab disabled>
            <Iconify icon={'material-symbols:alarm'} />
          </Fab>
          <Fab color="default" variant="extended">
            <Iconify icon={'material-symbols:alarm'} />
            Default
          </Fab>
          <Fab variant="extended">
            <Iconify icon={'material-symbols:alarm'} />
            Primary
          </Fab>
          <Fab disabled variant="extended">
            <Iconify icon={'material-symbols:alarm'} />
            Disabled
          </Fab>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Adding Colors" sx={style}>
          <MFab color="default">
            <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab>
            <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="secondary">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="info">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="success">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="warning">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="error">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>

          <MFab variant="extended" color="default">
             <Iconify icon={'material-symbols:alarm'} />
            Default
          </MFab>
          <MFab variant="extended">
             <Iconify icon={'material-symbols:alarm'} />
            Primary
          </MFab>
          <MFab variant="extended" color="info">
             <Iconify icon={'material-symbols:alarm'} />
            Info
          </MFab>
          <MFab variant="extended" color="success">
             <Iconify icon={'material-symbols:alarm'} />
            Success
          </MFab>
          <MFab variant="extended" color="warning">
             <Iconify icon={'material-symbols:alarm'} />
            Warning
          </MFab>
          <MFab variant="extended" color="error">
             <Iconify icon={'material-symbols:alarm'} />
            Error
          </MFab>
        </Block>
      </Grid>

      <Grid item xs={12} md={6}>
        <Block title="Size" sx={style}>
          <MFab color="info" size="small">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="info" size="medium">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>
          <MFab color="info">
             <Iconify icon={'material-symbols:alarm'} />
          </MFab>

          <MFab variant="extended" size="small" color="info">
             <Iconify icon={'material-symbols:alarm'} />
            Small
          </MFab>
          <MFab variant="extended" size="medium" color="info">
             <Iconify icon={'material-symbols:alarm'} />
            Medium
          </MFab>
          <MFab variant="extended" color="info">
             <Iconify icon={'material-symbols:alarm'} />
            Large
          </MFab>
        </Block>
      </Grid>
    </Grid>
  );
}
