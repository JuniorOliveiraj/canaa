import PropTypes from 'prop-types';
import { useMemo, useContext } from 'react';
import { AlteracaoThema } from '../contexts/Themas';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import palette2 from './Darkmode/DarkMOde';
//
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  //const {asas} = useContext(AlteracaoThema);



  const themeOptions = useMemo(
    () => ({
      palette : palette,
      shape: { borderRadius: 7 },
      typography,
      shadows,
      customShadows,
    }),
    []
  );
  const themeOptions2 = useMemo(
    () => ({
      palette : palette2,
      shape: { borderRadius: 7 },
      typography,
      shadows,
      customShadows,
    }),
    []
  );
  

  const theme = createTheme(themeOptions);
  const themeDarkMOde = createTheme(themeOptions2);
  theme.components = componentsOverride(theme);
  themeDarkMOde.components = componentsOverride(themeDarkMOde);
  const { darkModeThem } = useContext(AlteracaoThema);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={darkModeThem ? themeDarkMOde: theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
