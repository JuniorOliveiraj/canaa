import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// material
import { alpha, useTheme, styled } from '@mui/material';

import { Box, Avatar, SpeedDial, Typography, SpeedDialAction, useMediaQuery, Link } from '@mui/material';
// utils
//import { fDate } from '../../../utils/formatTime';
import Iconify from '../../Iconify';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Iconify icon="logos:facebook" width={20} height={20} />
  },
  {
    name: 'Instagram',
    icon: <Iconify icon="skill-icons:instagram" width={20} height={20} />
  },
  {
    name: 'Linkedin',
    icon: <Iconify icon="devicon:linkedin" width={20} height={20} />
  },
  {
    name: 'Twitter',
    icon: <Iconify icon="logos:twitter" width={20} height={20} />
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  height: 480,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  [theme.breakpoints.up('md')]: {
    height: 'auto',
    paddingTop: 'calc(100% * 6 / 16)'
  },
  '&:before': {
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: alpha(theme.palette.grey[900], 0.72)
  }
}));

const TitleStyle = styled(Typography)(({ theme }) => ({
  top: 0,
  zIndex: 10,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10)
  }
}));

const FooterStyle = styled('div')(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'flex-end',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
    paddingRight: theme.spacing(3)
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(10)
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

BlogPostHero.propTypes = {
  post: PropTypes.object.isRequired
};

export default function BlogPostHero({ post, ...other }) {
  const { cover, title, author, description, id } = post;
  const location = useLocation();
  const partesDoCaminho = location.pathname.split('/');
  const primeiraParteDoCaminho = partesDoCaminho[1];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <RootStyle {...other} sx={{ maxHeight: 10, paddingTop: isMobile && 'calc(100% * 17 / 16)', marginTop: isMobile && 0, marginBottom: isMobile && 5 }}>
      <CoverImgStyle alt="post cover" src={cover} />

      <TitleStyle variant="h2" component="h1" sx={{ marginTop: isMobile && 6 }}>
        {title}<br />
        <Typography>{description}</Typography>
      </TitleStyle>


      <FooterStyle>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt={author.name} src={author.photoURL} sx={{ width: 48, height: 48 }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle1" sx={{ color: 'common.white' }}>
              {author.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              {author.role}
            </Typography>
          </Box>
        </Box>

        <Box display={'flex'}>
          <SpeedDial
            direction={isMobile ? 'up' : 'left'}
            ariaLabel="Share post"
            icon={<Iconify icon="material-symbols:share" width={20} height={20} />}
            sx={{ '& .MuiSpeedDial-fab': { width: 48, height: 48 } }}
          >
            {SOCIALS.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipPlacement="top"
                FabProps={{ color: 'default' }}
              />
            ))}
          </SpeedDial>
          {primeiraParteDoCaminho === 'dashboard' &&
            <Link to={`/dashboard/blog/edit-post/${id}`} component={RouterLink}>
              <SpeedDial
                direction={isMobile ? 'up' : 'left'}
                ariaLabel="Share post"
                icon={<Iconify icon="pepicons-pop:pen" width={20} height={20} />}
                sx={{ '& .MuiSpeedDial-fab': { width: 48, height: 48 } }}
              />
            </Link>
          }
        </Box>
      </FooterStyle>
    </RootStyle>
  );
}
