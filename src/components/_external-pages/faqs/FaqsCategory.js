import PropTypes from 'prop-types';
// material
import { Typography, Box, Grid, Paper } from '@mui/material';
//
import { varFadeIn, MotionInView } from '../../animate';
import { Navigation, Pagination, Mousewheel, Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RootstyleSwiper from '../../SwiperStyle/RootstyleSwiper';
// Import Swiper styles
import useMediaQuery from '@mui/material/useMediaQuery';
// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: 'React js ',
    icon: '/static/faqs/react.svg',
    href: '#'
  },
  {
    label: 'Node js',
    icon: '/static/faqs/node-js.svg',
    href: '#'
  },
  {
    label: 'DataBase ',
    icon: '/static/faqs/data-base.png',
    href: '#'
  },
  {
    label: 'GutHub',
    icon: '/static/faqs/github2.svg',
    href: '#'
  },
  {
    label: 'Full Stack',
    icon: '/static/faqs/full-stack-64.png',
    href: '#'
  },
  {
    label: 'Apis',
    icon: '/static/faqs/api-100.png',
    href: '#'
  }
];

// ----------------------------------------------------------------------

CategoryCard.propTypes = {
  category: PropTypes.object
};

function CategoryCard({ category }) {
  const { label, icon } = category;
  return (
    <Paper
      sx={{
        px: 2,
        height: 260,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: (theme) => theme.customShadows.z8
      }}
    >
      <Box component="img" src={icon} sx={{ mb: 2, width: 80, height: 80 }} />
      <Typography variant="subtitle2">{label}</Typography>
    </Paper>
  );
}

export default function FaqsCategory() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  const matches = useMediaQuery('(min-width:700px)');


  return (

    <RootstyleSwiper>
     

      <Swiper
        spaceBetween={!matches ? 20: 30}
        slidesPerView={!matches ? 2 : 4}
       // onSlideChange={() => console.log('slide change')}
       // onSwiper={(swiper) => console.log(swiper)}
         // navigation={true}
        loop={true}
        pagination={pagination}
        modules={[Navigation, Pagination, Mousewheel, Autoplay,Keyboard]}
        className="mySwiper"
        //onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {CATEGORIES.map((category) => (
          <SwiperSlide>
            <Grid item xs={12} sm={4} md={2} key={category.label}  >
              <MotionInView variants={varFadeIn}>
                <CategoryCard category={category} />
              </MotionInView>
            </Grid>
            <Box sx={{height: 60,}}/>
          </SwiperSlide>

        ))}
      </Swiper>

    </RootstyleSwiper>







  );
}
 