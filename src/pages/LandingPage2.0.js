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


// ----------------------------------------------------------------------

export default function LandingPageNew() {
  const cursorRef = useRef(null);

  

  return (
    <RootStyle title="home | portifolio" id="move_top" meta={metaAndTags}>
      <LandingHero />
      <ContentStyle>
        <LandingSobremim />
        <PrimeiraSecaoProjetos />
        <Robo3d />

      </ContentStyle>


      
     

    </RootStyle>
  );
}
