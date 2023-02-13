// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import { AlterThema } from './contexts/Themas';
// ----------------------------------------------------------------------
import ConfigColor from './components/ConfigColor';
export default function App() {
  return (
    <AlterThema>
      <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
        <ConfigColor />
      </ThemeProvider>
    </AlterThema>

  );
}
