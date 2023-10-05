import PropTypes from 'prop-types';
// material
import { Paper } from '@mui/material';
// components
import { MIconButton } from '../../../../../components/@material-extend';
import Iconify from '../../../../../components/Iconify';

// ----------------------------------------------------------------------

Toolbar.propTypes = {
  onRefresh: PropTypes.func,
  sx: PropTypes.string
};

export default function Toolbar({ onRefresh, sx, ...other }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...sx
      }}
      {...other}
    >
      <MIconButton onClick={onRefresh}>
        <Iconify icon={'Iconify'} width={20} height={20} />
      </MIconButton>
    </Paper>
  );
}
