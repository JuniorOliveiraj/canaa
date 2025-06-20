// material
import { styled } from '@mui/material';
// components
import Page from '../components/Page';
import LandingHero from '../components/_external-pages/landing/LandingHero';
import LandingSobremim from '../components/_external-pages/landing/LandingSobremim';
import PrimeiraSecaoProjetos from '../components/_external-pages/landing/PrimeiraSecaoProjetos';
import Robo3d from '../components/_external-pages/landing/Robo3d';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// ----------------------------------------------------------------------
const metaAndTags = {
  meta_title: "Junior Oliveira - Portfólio",
  meta_description:
    "Portfólio Junior Oliveira, desenvolvedor React com foco em aplicações web, dashboards e sistemas administrativos.",
  meta_tags: "react,, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
}
const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));
const Cursor = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '15px', 
  height: '15px',
  borderRadius: '50%',  
  backgroundColor: 'white',  
  pointerEvents: 'none', 
  zIndex: 9999,
  transition: 'transform 180ms ease-out', 
}));

// ----------------------------------------------------------------------

export default function LandingPageNew() {
  const cursorRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <RootStyle title="home | portifolio" id="move_top" meta={metaAndTags}>
      <LandingHero />
      <ContentStyle>
        <LandingSobremim />
        <PrimeiraSecaoProjetos />
        <Robo3d />

      </ContentStyle>


      
      <Cursor
        animate={{
          x: mousePosition.x - 5,  
          y: mousePosition.y - 5,
        }}
        transition={{
          type: 'spring',
          stiffness: 100, // 🔧 Menor = mais molenga
          damping: 10,    // 🔧 Maior = menos vibração
        }}
      />

    </RootStyle>
  );
}
