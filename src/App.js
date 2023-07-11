// routes
import Router from './routes';
import React, { useEffect } from 'react';
//import RouterUniasselvi from './routesUniasselvi';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { AlterThema } from './contexts/Themas';
import GoogleAnalytics from './components/GoogleAnalytics';
// ----------------------------------------------------------------------

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
        <ScrollToTop />
        <BaseOptionChartStyle />
        <GoogleAnalytics />
        <Router />
      </ThemeProvider>
    </AlterThema>
    );
}
