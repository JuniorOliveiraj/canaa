// routes
import Router from './routes';
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
