import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Grid, Typography, Box, Link } from "@mui/material";
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
const descricao = [
  {
    desc: 'Se você está procurando por aquela pessoa que vai mudar sua vida, dê uma olhada no espelho.❤️',
    link: 'https://www.instagram.com/p/CH3U4o1npx2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    Photo: 'insta_'
  },
  {
    desc: 'O melhor que a vida tem pra nós dar muitas vezes está escondido atrás de muitas dificuldades. ❤️🤯🍃',
    link: 'https://www.instagram.com/p/CS7ugStHKV2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    Photo: 'insta_'
  },
  {
    desc: 'Ausência de desejo traz tranquilidade 🍃',
    link: 'https://www.instagram.com/p/CYNQT6aMlJn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    Photo: 'insta_'
  },
]

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
        {Array.from(descricao).map((Insta, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box sx={{ margin: 4, position: "relative", cursor: 'pointer' }}

              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}

            >
              <Link
                component={Link}
                href={Insta.link}
                target="_blank">

                <motion.img
                  src={`/static/mock-images/imageHome/${Insta.Photo}${index}.jpg`}
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
                      <Typography

                      >
                        {Insta.desc}
                        <br />
                        <Iconify icon="mdi:heart" width={20} height={20} />
                      </Typography>
                    </motion.div>
                  </TextBox>
                )}
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
