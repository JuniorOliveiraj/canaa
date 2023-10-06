import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------

export default function Select() {
  return {
    MuiSelect: {
      defaultProps: {
      //  IconComponent: <Iconify icon={'material-symbols:expand-more-rounded'}/>
      },

      styleOverrides: {
        root: {}
      }
    }
  };
}
