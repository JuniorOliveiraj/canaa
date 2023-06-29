import PropTypes from 'prop-types';
// material
import { useTheme, styled } from '@mui/material';
import { Box } from '@mui/material';
//
import { MIconButton } from '../../@material-extend';
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------

const SIZE = 40;

const ICON_SIZE = {
  width: 20,
  height: 20
};

const RootStyle = styled(Box)(({ theme }) => ({
  top: 0,
  bottom: 0,
  zIndex: 9,
  height: SIZE,
  width: '100%',
  margin: 'auto',
  display: 'flex',
  position: 'absolute',
  padding: theme.spacing(0, 2),
  justifyContent: 'space-between'
}));

const ArrowStyle = styled(MIconButton)(({ theme }) => ({
  width: SIZE,
  height: SIZE,
  opacity: 0.48,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  background: theme.palette.grey[900],
  borderRadius: theme.shape.borderRadiusSm,
  transition: theme.transitions.create('opacity'),
  '&:hover': {
    opacity: 1,
    background: theme.palette.grey[900]
  }
}));

// ----------------------------------------------------------------------

CarouselControlsArrowsBasic2.propTypes = {
  arrowLine: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func
};

export default function CarouselControlsArrowsBasic2({ arrowLine, onNext, onPrevious, ...other }) {
  const theme = useTheme();
  const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle {...other}>
      <ArrowStyle size="small" onClick={onPrevious}>
        {arrowLine ? (
          <Iconify icon={isRTL ? 'icon-park-outline:right-c' : 'icon-park-outline:left-c'} {...ICON_SIZE} />
        ) : (
          <Iconify icon={isRTL ? 'raphael:arrowright' : 'raphael:arrowleft'} {...ICON_SIZE} />
        )}
      </ArrowStyle>

      <ArrowStyle size="small" onClick={onNext}>
        {arrowLine ? (
          <Iconify icon={isRTL ? 'icon-park-outline:left-c' :'icon-park-outline:right-c'} {...ICON_SIZE} />
        ) : (
          <Iconify icon={isRTL ?  'raphael:arrowleft' : 'raphael:arrowright'} {...ICON_SIZE} />
        )}
      </ArrowStyle>
    </RootStyle>
  );
}
