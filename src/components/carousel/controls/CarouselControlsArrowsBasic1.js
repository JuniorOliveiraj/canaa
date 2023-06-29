import PropTypes from 'prop-types';
import Iconify from '../../Iconify';
// material
import { useTheme, styled } from '@mui/material';
import { Box } from '@mui/material';
//
import { MIconButton } from '../../@material-extend';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 20,
  height: 20
};

const RootStyle = styled(Box)(({ theme }) => ({
  zIndex: 9,
  display: 'flex',
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2)
}));

const ArrowStyle = styled(MIconButton)(({ theme }) => ({
  padding: 6,
  opacity: 0.48,
  color: theme.palette.common.white,
  '&:hover': { opacity: 1 }
}));

// ----------------------------------------------------------------------

CarouselControlsArrowsBasic1.propTypes = {
  arrowLine: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func
};

export default function CarouselControlsArrowsBasic1({ arrowLine, onNext, onPrevious, ...other }) {
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
          <Iconify icon={isRTL ? 'icon-park-outline:left-c' : 'icon-park-outline:right-c'} {...ICON_SIZE} />
        ) : (
          <Iconify icon={isRTL ? 'raphael:arrowleft' : 'raphael:arrowright'} {...ICON_SIZE} />
        )}
      </ArrowStyle>
    </RootStyle>
  );
}
