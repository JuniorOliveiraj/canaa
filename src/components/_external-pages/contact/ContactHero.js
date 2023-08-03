import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material';
import { Box, Container, Typography, Grid } from '@mui/material';
//
import { varFadeIn, varWrapEnter, varFadeInRight, TextAnimate } from '../../animate';
import useMediaQuery from '@mui/material/useMediaQuery';
// ----------------------------------------------------------------------

const CONTACTS = [
  {
    country: 'React.js',
    address: 'frontEnd',
    phoneNumber: '2 years'
  },
  {
    country: 'Node.js',
    address: 'server backend,',
    phoneNumber: '1 year'
  },
  {
    country: 'SQL',
    address: 'database',
    phoneNumber: '2 years'
  },
  {
    country: 'API',
    address: 'development of rest api',
    phoneNumber: '1 year'
  }
];

const RootStyle = styled(motion.div)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:  `url(${'/static/mock-images/covers/wp5317946.jpg'})`,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10)
  }
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="let's" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text=" work " sx={{ mr: 2 }} />
            <TextAnimate text="together" sx={{ mr: 2 }} />
          </Box>

          <Grid container spacing={5} sx={{ mt: 5, color: 'common.white' }}>
            {CONTACTS.map((contact) => (
              <Grid key={contact.country} item xs={matches ? 12: 6} sm={matches ? 6: 4} md={3} lg={3} sx={{ pr: { md: 2 } }} >
                <motion.div variants={varFadeIn}>
                  <Typography variant="h6" paragraph>
                    {contact.country}
                  </Typography>
                </motion.div>
                <motion.div variants={varFadeInRight}>
                  <Typography variant="body2">
                    {contact.address}
                    <br /> {contact.phoneNumber}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
