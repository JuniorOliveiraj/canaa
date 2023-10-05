import PropTypes from 'prop-types';
import Iconify from '../../../../../components/Iconify';
// material
import { Paper } from '@mui/material';
// components
import { MIconButton } from '../../../../../components/@material-extend';

// ----------------------------------------------------------------------

Toolbar.propTypes = {
  onRefresh: PropTypes.func
};

export default function Toolbar({ onRefresh, ...other }) {
  return (
    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} {...other}>
      <MIconButton onClick={onRefresh}>
        <Iconify icon={'material-symbols:refresh'} width={20} height={20} />
      </MIconButton>
    </Paper>
  );
}
