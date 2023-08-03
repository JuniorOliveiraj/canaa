import { styled } from '@mui/material';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// const RootstyleSwiper = styled('div')(({ theme }) => ({
//   '& .swiper-pagination-bullet-active': {
//     color: '#fff',
//     background: theme.palette.primary.main,
//     width: '10px',
//     height: '10px',
//   } ,

//   }));


  
const RootstyleSwiper = styled('div')(({ theme }) => {
   
  return {
    '& .swiper-pagination-bullet': {
      color: '#fff',
      background: theme.palette.primary.main,
     
    } ,
    '&  .swiper-pagination-bullet-active': {
      color: '#fff',
      background: theme.palette.primary.main,
      width: '10px',
      height: '10px',
    } ,
    '& .swiper-button-prev': {
      color:  theme.palette.primary.main,
    } ,
    '& .swiper-button-next': {
      color:  theme.palette.primary.main,
    } ,
    
    
  };
});
  
  export default RootstyleSwiper;