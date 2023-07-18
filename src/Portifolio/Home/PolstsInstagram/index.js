import styled from "styled-components";
import React, { useRef } from "react";
import {
    motion,
    animate,
    useTransform,
    useMotionTemplate,
    useSpring
  } from "framer-motion";
import { Grid, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
const ContainerImage = styled(motion.div)`
width: 100%;
max-width: 1120;
height: auto;
display: flex;
margin: 5%;

`;
// const ContainerImage1 = styled(motion.div)`
// width: 33%;
// max-width: 1120;
// height: auto;

// `;

// const Img = styled(motion.img)`
//   width: 95%;
//   height: auto;
//   margin: 0% 3% 0% 0%;
//   cursor:pointer;
//   border-radius:10px;
// `;
export default function PolstInstagram() {
    const matches = useMediaQuery('(min-width:700px)');
    const array = [...Array(3)].map((_,e)=>[e])
    return (
        <Box sx={{marginTop:matches ? 20 : 10}}>
            <Grid container spacing={2}>

                <Grid xs={14} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ContainerImage
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}

                    >
                        {array.map(()=>(

                       <Example/>
                       ))}

                    </ContainerImage>

                </Grid>
            </Grid>
        </Box>

    )
}


function Example() {
    const mouseX = useSpring(0);
    const mouseY = useSpring(0);
    // a reference for our animated card element
    const cardRef = useRef(null);

    const dampen = 5;
    const rotateX = useTransform(mouseY, (newMouseY) => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
  
      const newRotateX = newMouseY - rect.y - rect.height / 2;
      console.log("xxx", newRotateX);
      return newRotateX / dampen;
    });
  
    const rotateY = useTransform(mouseX, (newMouseX) => {
      if (!cardRef.current) return 0;
      const rect = cardRef.current.getBoundingClientRect();
  
      const newRotateY = newMouseX - rect.x - rect.width / 2;
      return -newRotateY / dampen;
    });
  
 
  
    const angle = useTransform([rotateX, rotateY], ([x, y]) => {
      return Math.atan2(x - 0.5, 0.5 - y) * (180 / Math.PI);
    });
  
    const shineTransform = useMotionTemplate`rotate(${angle}deg) translate3d(-50%, -50%, 0)`;
    const cardTransform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
    return (
<>
<style>
{
    `
    .text {
      z-index: 2;
      color: #fff;
      position: absolute;
      transform: translateZ(40px);
      font-size: 24px;
      /* box-shadow: 0 0 50px 0 rgba(51, 51, 51, 0.3); */
    }
    
    .card {
      position: relative;
      width: 200px;
      height: 300px;
      background-image: cover url('https://instagram.ffln11-1.fna.fbcdn.net/v/t51.2885-15/126842171_195891968777241_8969359398118339181_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ffln11-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YiCGvKuuiVQAX9NKsve&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjQ0NzUxNjc3NTU2OTMzMzM2Ng%3D%3D.2-ccb7-5&oh=00_AfDuNs814oICcxfQEwldFLACT-xNASmAB-LMs4uUFKoACA&oe=64BBA046&_nc_sid=ee9879');
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      box-shadow: rgba(0, 0, 0, 0.404) 0px 45px 100px;
      margin: 50px;
    }
    
    .shine {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      border-radius: 8px;
    }
    
    .shine-inner {
      z-index: 1;
      width: 400px;
      height: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      pointer-events: none;
      background-image: linear-gradient(
        0deg,
        rgb(255, 255, 255) 0%,
        rgb(0, 0, 0) 100%
      );
      transform: rotate(180deg) translate3d(-50%, -50%, 0);
      transform-origin: 0% 0%;
      opacity: 0.5;
    }
    `
}
</style>
        <motion.div
          ref={cardRef}
          className="card"
          style={{ transform: cardTransform }}
          onMouseMove={(e) => {
            // mouseX.set(e.clientX);
            // mouseY.set(e.clientY);
  
            const a = animate(mouseX, e.clientX, { ease: "linear" });
            a.time = 0.5;
  
            const b = animate(mouseY, e.clientY, { ease: "linear" });
            b.time = 0.5;
          }}
        >
          <span className="text">Text</span>
          <motion.div className="shine">
            <motion.div
              className="shine-inner"
              style={{ transform: shineTransform }}
            ></motion.div>
          </motion.div>
        </motion.div>
</>
 
    );
  }
