import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import Iconify from '../../Iconify';
import { Swiper, SwiperSlide } from 'swiper/react';
// material
import { styled } from '@mui/material';
import { Box, Typography, Stack, MenuItem } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import { MIconButton } from '../../@material-extend';
//import { CarouselControlsPaging1 } from '../../carousel';
import MenuPopover from '../../MenuPopover';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from '../../../redux/store';
import { getListaDeGastos, getSaldoEmConta } from '../../../redux/slices/Analytics';
import axios from '../../../auth/Axios.interceptor';


// ----------------------------------------------------------------------
const HEIGHT = 276;

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT,
  '& .slick-list': {
    borderRadius: theme.shape.borderRadiusMd
  }
}));

const CardItemStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  height: HEIGHT - 16,
  backgroundSize: 'cover',
  padding: theme.spacing(3),
  backgroundRepeat: 'no-repeat',
  color: theme.palette.common.white,
  background: 'linear-gradient(rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8)) center center / cover no-repeat, url(https://minimals.cc/assets/background/overlay_2.jpg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 12,
  backdropFilter: 'blur(4px)',
  '& .swiper-pagination-bullet-active': {

    background: 'red',
  }
}));

const shadowStyle = {
  mx: 'auto',
  width: 'calc(100% - 16px)',
  borderRadius: 2,
  position: 'absolute',
  height: 200,
  zIndex: 8,
  bottom: 8,
  left: 0,
  right: 0,
  bgcolor: 'grey.500',
  opacity: 0.32
};

// ----------------------------------------------------------------------

const CARDS = [
  {
    id: '8baa359f-7e98-4c13-8d5b-fa210b643d82',
    balance: 1925.99,
    cardType: 'mastercard',
    cardHolder: 'Julianne Zemlak',
    cardNumber: '**** **** **** 3640',
    cardValid: '11/22'
  },
  {
    id: '32a7ed73-894f-4c79-a1d7-8a968ff69cc4',
    balance: 18000.23,
    cardType: 'visa',
    cardHolder: 'Pascale Schaefer',
    cardNumber: '**** **** **** 8864',
    cardValid: '11/25'
  },
  {
    id: 'ef0bca7b-4460-44bc-a606-1354ce3c0a3c',
    balance: 2000.89,
    cardType: 'mastercard',
    cardHolder: 'Tamara Hilll',
    cardNumber: '**** **** **** 7755',
    cardValid: '11/22'
  }
];

// ----------------------------------------------------------------------

function MoreMenuButton() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MIconButton ref={anchorRef} size="large" color="inherit" sx={{ opacity: 0.48 }} onClick={handleOpen}>
        <Iconify icon="ri:more-2-fill" width={20} height={20} />
      </MIconButton>
      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ p: 1, mt: -1, width: 'auto' }}>
        <MenuItem onClick={handleClose} sx={{ py: 0.75, px: 1.5, borderRadius: 0.75 }}>
          <Iconify icon="material-symbols:edit" sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }} />
          <Typography variant="body2">Edit card</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ py: 0.75, px: 1.5, borderRadius: 0.75 }}>
          <Iconify icon="material-symbols:add" sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }} />
          <Typography variant="body2">Add gastos</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ py: 0.75, px: 1.5, borderRadius: 0.75, color: 'error.main' }}>
          <Iconify icon="ph:trash-fill" sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }} />
          <Typography variant="body2">Delete card</Typography>
        </MenuItem>
      </MenuPopover>
    </>
  );
}

CardItem.propTypes = {
  card: PropTypes.shape({
    balance: PropTypes.number,
    cardHolder: PropTypes.string,
    cardNumber: PropTypes.string,
    cardType: PropTypes.string,
    cardValid: PropTypes.string
  })
  ,
  gastoTotal: PropTypes.number
};

function CardItem({ card , gastoTotal}) {
  const { cardType, balance, cardHolder, cardNumber, cardValid } = card;
  const [showCurrency, setShowCurrency] = useState(true);

  const onToggleShowCurrency = () => {
    setShowCurrency((prev) => !prev);
  };

  return (
    <>
      <CardItemStyle>
        <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 9 }}>
          <MoreMenuButton />
        </Box>

        <div>
          <Typography sx={{ mb: 2, typography: 'subtitle2', opacity: 0.72 }}>Current Balance</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ typography: 'h3' }}>{showCurrency ? '********' : fCurrency(gastoTotal ? gastoTotal :balance)}</Typography>
            <MIconButton color="inherit" onClick={onToggleShowCurrency} sx={{ opacity: 0.48 }}>
              {showCurrency ? <Iconify icon="mdi:eye" /> : <Iconify icon="mdi:eye-off" />}
            </MIconButton>
          </Stack>
        </div>

        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
          <Box
            component="img"
            src={`/static/icons/ic_${cardType === 'mastercard' ? 'mastercard' : 'visa'}.svg`}
            sx={{ height: 24 }}
          />
          <Typography sx={{ typography: 'subtitle1', textAlign: 'right' }}>{cardNumber}</Typography>
        </Stack>

        <Stack direction="row" spacing={5}>
          <div>
            <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>Card Holder</Typography>
            <Typography sx={{ typography: 'subtitle1' }}>{cardHolder}</Typography>
          </div>
          <div>
            <Typography sx={{ mb: 1, typography: 'caption', opacity: 0.48 }}>Valid Dates</Typography>
            <Typography sx={{ typography: 'subtitle1' }}>{cardValid}</Typography>
          </div>
        </Stack>
      </CardItemStyle>
    </>
  );
}

export default function BankingCurrentBalance() {

  // const settings = {
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   rtl: Boolean(theme.direction === 'rtl'),
  //   ...CarouselControlsPaging1({
  //     color: 'primary.main',
  //     bottom: '16px !important',
  //     right: '16px !important'
  //   })
  // };
  const { totalGasto } = useSelector((state) => state.Analytics);
  const dispatch = useDispatch();

 
  const [total, setTotal] = useState(0);
 
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    axios.get('/v1/ExpenseTransactions/Expenses', {
      params: { Year: year, Month: month, Type: 1, PageIndex: 0, PageSize: 1 } // Type: 1 para despesas (income)
    }).then((response) => {

      setTotal(response.data.totalAmount);

 
       
    }).catch(error => {
      console.error("Erro ao buscar os dados de renda:", error);
    });
  }, []);

  return (
    <RootStyle>
      {/* <Box sx={{ position: 'relative', zIndex: 9 }}>
        <Slider {...settings}>
          {CARDS.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
        </Slider>
      </Box> */}
      <Box sx={{ position: 'relative', zIndex: 9 }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          //onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {CARDS.map((card) => (
            <SwiperSlide>
              <Box sx={{ position: 'relative', zIndex: 9 }}></Box>
              <CardItem key={card.id} card={card} gastoTotal={total} />
              <Box />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/*       
      <Box sx={{ position: 'relative', zIndex: 9 }}>
        <CardItem key={CARDS[0].id} card={CARDS[0]} />
      </Box> */}


      <Box sx={{ ...shadowStyle }} />
      <Box
        sx={{
          ...shadowStyle,
          opacity: 0.16,
          bottom: 0,
          zIndex: 7,
          width: 'calc(100% - 40px)'
        }}
      />
    </RootStyle>
  );
}
