
import Iconify from '../../Iconify';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled, useTheme } from '@mui/material';
import { Button, Box, Container, Typography, Stack, useMediaQuery} from '@mui/material';
// routes
import { PATH_DOCS } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------
import React, { useState } from 'react';
const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#212B36',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 1,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  transition: 'background-image 0.5s ease-in-out, opacity 0.5s ease-in-out',
  opacity: ' 0.15 !important',

});

const HeroImgStyle = styled(motion.div)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '80vh',
    
  }
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://avatars.githubusercontent.com/u/85002295?v=4',
    'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/325503362/original/fdb7207bc8c80f27bb5af2e7edf1ed4f5a8af157/offer-the-very-finest-ui-ux-design-services.png',
    'https://www.youngontop.com/wp-content/uploads/2023/03/C496.jpg',
    'https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg',
  ];
 const textos =[
  {
    title1:'I’m Junior',
    title2:'Oliveira',
    subtitulo:'Sou designer e desenvolvedor full stack'
  },
  {
    title1:'UI/UX ',
    title2:'designer',
    subtitulo:'UI/UX designer , I create web pages UI /UX i have years of experience'
  },
  {
    title1:'Desenvolvedor',
    title2:'Front end',
    subtitulo:'Sou desenvolvedor com linguagem como React js,'
  },
  {
    title1:'DEsenvolvedor',
    title2:'Back end',
    subtitulo:'Node js, mysql, e apis'
  },
 ]

  const handleImageHover = (index) => {
    setActiveIndex(index);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>


    <HeroOverlayStyle alt="overlay" src={`${images[activeIndex]}`} variants={varFadeIn} sx={{ backgroundColor: 'black' }} />
        {
          matches &&<HeroImgStyle variants={varFadeInUp} >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {images.map((imageUrl, index) => {
              const styles = {
                width: index === activeIndex ? '550px' : '60px',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '20px',
                marginRight: '10px',
                cursor: 'pointer',
                transition: 'width 0.5s ease-in-out',
              }
          
              return (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Imagem ${index + 1}`}
                  className={index === activeIndex ? 'active' : ''}
                  onMouseOver={() => handleImageHover(index)}
                  style={ styles  }
                />
              )
            })}
          </Box>
        </HeroImgStyle>
        }



        <Container maxWidth="lg"  >
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h1" sx={{ fontWeight: 700,color: '#fff', }} >
                {textos[activeIndex].title1} <br />

                <Typography component="span" variant="h1" sx={{ color: 'primary.main', fontWeight: 700,  }}>
                {textos[activeIndex].title2}<br />
                </Typography>
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color:'#fff'}}>
              {textos[activeIndex].subtitulo}
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DOCS}
                startIcon={<Iconify icon={'icon-park-solid:right-c'} width={20} height={20} />}
              >
                Mais sobre mim
              </Button>
            </motion.div>


          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
