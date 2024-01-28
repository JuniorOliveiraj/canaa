import PropTypes from 'prop-types';

// material
import {  useTheme, styled } from '@mui/material';

import {  useMediaQuery } from '@mui/material';
// utils
//import { fDate } from '../../../utils/formatTime';
 

// ----------------------------------------------------------------------

 

const RootStyle = styled('div')(({ theme }) => ({
  height: 480,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  [theme.breakpoints.up('md')]: {
    height: 'auto',
    paddingTop: 'calc(100% * 7 / 16)'
  },
  '&:before': {
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',

  }
}));

 
 

const CoverImgStyle = styled('img')({
  top: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ProjetostHero.propTypes = {
  post: PropTypes.object.isRequired
};

export default function ProjetostHero({ post, ...other }) {
  const { cover, title,} = post;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <RootStyle {...other} sx={{maxHeight:10, paddingTop:isMobile && 'calc(100% * 17 / 16)', marginTop:isMobile&&0, marginBottom:isMobile && 5}}>
      <CoverImgStyle alt={`post cover ${title}`} src={cover} />
    </RootStyle>
  );
}
