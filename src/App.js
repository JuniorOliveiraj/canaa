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
import LenisProvider from './components/LenisProvider';
// ----------------------------------------------------------------------

const ScrollbarStyle = styled('div')(({ theme }) => ({
  "& ::-webkit-scrollbar": {
    width: 2,
    height: 2
  },

  /* Track */
  '& ::-webkit-scrollbar-track:': {
    background: ' #f1f1f1'
  },

  /* Handle */
  '& ::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main
  },

  /* Handle on hover */
  '& ::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.light
  }
}));
export default function App() {
  useEffect(() => {
    const { hostname } = window.location;

    if (hostname === 'sprightly-sopapillas-5d2e9b.netlify.app') {
      window.location.href = 'https://canaa.vercel.app' + window.location.pathname + window.location.search;
    }
  }, []);

  return (
    <AlterThema>
      <ThemeProvider>
        <LenisProvider>
          <ScrollbarStyle>
            <ScrollToTop />
            <Settings />
            <BaseOptionChartStyle />
            <GoogleAnalytics />
            <Router />
          </ScrollbarStyle>
        </LenisProvider>
      </ThemeProvider>
    </AlterThema>
  );
}
