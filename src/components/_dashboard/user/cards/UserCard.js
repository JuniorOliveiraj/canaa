import PropTypes from 'prop-types';
import Iconify from '../../../Iconify';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Grid, Avatar, Tooltip, Divider, Typography, IconButton } from '@mui/material';
// utils
import { fShortenNumber } from '../../../../utils/formatNumber';
//
import SvgIconStyle from '../../../SvgIconStyle';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Iconify icon="logos:facebook"  width={20} height={20} color="#1C9CEA"/>
  },
  {
    name: 'Instagram',
    icon: <Iconify icon="skill-icons:instagram"  width={20} height={20} color="#1C9CEA"/>
  },
  {
    name: 'Linkedin',
    icon:<Iconify icon="devicon:linkedin"  width={20} height={20} color="#1C9CEA"/>
  },
  {
    name: 'Twitter',
    icon: <Iconify icon="logos:twitter"  width={20} height={20} color="#1C9CEA"/>
  }
  
];


const CardMediaStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  paddingTop: 'calc(100% * 9 / 16)',
  '&:before': {
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)', // Fix on Mobile
    borderTopLeftRadius: theme.shape.borderRadiusMd,
    borderTopRightRadius: theme.shape.borderRadiusMd,
    backgroundColor: alpha(theme.palette.primary.darker, 0.72)
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

function InfoItem(number) {
  return (
    <Grid item xs={4}>
      <Typography variant="caption" sx={{ mb: 0.5, color: 'text.secondary', display: 'block' }}>
        Follower
      </Typography>
      <Typography variant="subtitle1">{fShortenNumber(number)}</Typography>
    </Grid>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default function UserCard({ user, ...other }) {
  const { name, cover, position, follower, totalPost, photoURL, following } = user;

  return (
    <Card {...other}>
      <CardMediaStyle>
        <SvgIconStyle
          color="paper"
          src="/static/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            bottom: -26,
            position: 'absolute'
          }}
        />
        <Avatar
          alt={name}
          src={photoURL}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            position: 'absolute',
            transform: 'translateY(-50%)'
          }}
        />
        <CoverImgStyle alt="cover" src={cover} />
      </CardMediaStyle>

      <Typography variant="subtitle1" align="center" sx={{ mt: 6 }}>
        {name}
      </Typography>
      <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
        {position}
      </Typography>

      <Box sx={{ textAlign: 'center', mt: 2, mb: 2.5 }}>
        {SOCIALS.map((social) => (
          <Tooltip key={social.name} title={social.name}>
            <IconButton>{social.icon}</IconButton>
          </Tooltip>
        ))}
      </Box>

      <Divider />

      <Grid container sx={{ py: 3, textAlign: 'center' }}>
        {InfoItem(follower)}
        {InfoItem(following)}
        {InfoItem(totalPost)}
      </Grid>
    </Card>
  );
}
