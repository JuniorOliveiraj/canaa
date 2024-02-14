// routes
import Router from './routes';
import React, { useEffect } from 'react';
//import RouterUniasselvi from './routesUniasselvi';
// theme
import ThemeProvider from './theme';
import Settings from './components/settings';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { AlterThema } from './contexts/Themas';
import GoogleAnalytics from './components/GoogleAnalytics';
import { styled } from '@mui/material';
// ----------------------------------------------------------------------

const SliderTyle = styled('html')(({ theme }) => ({
  '*::-webkit-scrollbar-thumb': {
    "background-color": theme.palette.primary.main,  /* color of the scroll thumb */
    "border-radius": '20px'    /* roundness of the scroll thumb */
  }
}));
export default function App() {
  useEffect(() => {
    const { hostname } = window.location;

    if (hostname === 'sprightly-sopapillas-5d2e9b.netlify.app') {
      window.location.href = 'https://www.juniorbelem.com' + window.location.pathname + window.location.search;
    }
  }, []);
  return (
    <AlterThema>
      <ThemeProvider>
        <SliderTyle>
          <ScrollToTop />
          <Settings />
          <BaseOptionChartStyle />
          <GoogleAnalytics />
          <Router />
        </SliderTyle>
      </ThemeProvider>
    </AlterThema>
  );
}
