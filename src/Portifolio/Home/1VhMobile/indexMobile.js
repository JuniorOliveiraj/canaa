



import './stylle.css';
import imgs from "../vewHeight/imagens";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { styled } from '@mui/material/styles';

import { Button , Typography, alpha} from "@mui/material";


const Container = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  overflowY: 'hidden',



}));
const FigureTextContainer = styled('div')(({ theme }) => ({
  height: '500px',
  minHeight: '150px',
  maxHeight: '70vh',
  borderRadius: '322px 380px 0px 0px',
  padding: ' 0px 0px 0px 0px',
  paddingRight: 0,
  flex: '0 0 58.333333%',
  maxMidth: '58.333333%',
  position: 'relative',
  



}));
// const Item = styled('div')(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: 'center',
//   color: '#000000',
//   fontFamily: 'Satoshi',
//   height: '100vh',
//   width: '100%'

// }));


const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };

  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0

    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};


const PrimeiroMobile = () => {




  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, imgs.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container>

      <AnimatePresence initial={false} custom={direction} >
        <motion.div
          style={{
            textAlign: 'center',
            color: '#000000',
            fontFamily: 'Satoshi',
            height: '100vh',
            width: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            //backgroundImage: `url(${imgs[imageIndex].img})`
          }}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          < Typography component= {motion.h2}
            sx={{
              top:0,
              fontSize: '35px',
              color: (theme) => alpha(theme.palette.grey[800], 0.8),
              lineHeight: '50px',
              fontWeight: 'bold',
              padding: 0,
              margin:4
            }}>
            {imgs[imageIndex].title}
          </Typography>


          <FigureTextContainer sx={{ background: `linear-gradient(to bottom, ${imgs[imageIndex].corFrom}  0%,  ${imgs[imageIndex].corTo}  100%)`, }}>
            <figure
              style={{
                top:0,
                position: 'relative',
                margin: 0, 
                height: '60vh',
                alignItems: 'center',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <img
                style={{ width: '100%', maxWidth: '700px' }}
                src={imgs[imageIndex].perfil} alt="#" />
            </figure>
          </FigureTextContainer>
          < Typography component= {motion.p}
            sx={{
              padding: '40px 10px 40px 20px',
              textAlign: 'left',
              fontSize: '15px',
              lineHeight: ' 15px',
              fontWeight: '500',
              paddingBottom: ' 20px',
              display: 'flex',
              color:(theme) => alpha(theme.palette.grey[800],2)
            }}
          >{imgs[imageIndex].Text}</Typography>
          <motion.h1 style={{
            color: imgs[imageIndex].corTo,
            textAlign: 'left',
            paddingLeft: 20
          }}>
            {imgs[imageIndex].text2}
          </motion.h1>
          <Button
          variant="contained" 
            sx={{
              fontSize: '17px',
              color: '#fff',
              padding: '13px 0px',
              width: '100%',
              maxWidth: '190px',
              float: 'left',
              textAlign: 'center',
              display: 'inline-block',
              borderRadius: '15px',
              marginLeft: 2,
              "&:hover": {
                opacity: '0.8',
                transform: 'scale(1.02)',
                backgroundColor: imgs[imageIndex].corTo,
              }
            }}
            as={motion.div}
            initial={{ x: -240, opacity: 0 }}
            animate={{ x: 0, opacity: 1, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", }}
            transition={{
              type: 'spring',
              damping: 4,
              mass: 0.5,
              stiffness: 150
            }}
          >Conhecer</Button>
        </motion.div>


      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </Container>
  );
};
export default PrimeiroMobile;