import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Grid } from "@mui/material";

const GAP = 20;
const CONTAINER_PADDING = 60;


const MosaicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const MosaicItem = styled(motion.div)`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const images = [  "https://source.unsplash.com/random/1",  "https://source.unsplash.com/random/2",  "https://source.unsplash.com/random/3",  "https://source.unsplash.com/random/4",  "https://source.unsplash.com/random/5",  "https://source.unsplash.com/random/6",  "https://source.unsplash.com/random/7",  "https://source.unsplash.com/random/8",  "https://source.unsplash.com/random/9",];

const Mosaic = () => {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <MosaicContainer>
      <Grid container spacing={GAP} padding={CONTAINER_PADDING}>
        {images.map((image, i) => (
          <Grid item xs={4} key={i}>
            <MosaicItem
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.img
                src={image}
                alt={`Mosaic Item ${i}`}
                variants={itemVariants}
              />
            </MosaicItem>
          </Grid>
        ))}
      </Grid>
    </MosaicContainer>
  );
};
export default Mosaic;
