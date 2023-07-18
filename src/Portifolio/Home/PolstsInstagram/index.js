import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Grid, Typography, Box } from "@mui/material";
import Iconify from "../../../components/Iconify";

const TextBox = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
  text-align: center;
  z-index: 2;
`;

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function PolstInstagram() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box sx={{ margin: 4, position: "relative", cursor:'pointer' }}
            
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            >
              <motion.img
                src={"https://fv9-2.failiem.lv/thumb_show.php?i=ytvgsa3ds&view&v=1"}
                alt="Curses"
                style={{ borderRadius: "10px", width: "100%" }}
 
              />
              {hoveredIndex === index && (
                <TextBox
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <motion.div>
                    <Typography>
                      Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics
                      artisan synth stumptown gastropub cornhole celiac
                      <br />
                      <Iconify icon="mdi:heart" width={20} height={20} />
                    </Typography>
                  </motion.div>
                </TextBox>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
