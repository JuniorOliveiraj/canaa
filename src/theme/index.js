import PropTypes from 'prop-types';
import { useMemo, } from 'react';
//import { AlteracaoThema } from '../contexts/Themas';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//import palette2 from './Darkmode/DarkMOde';
//
//import palette from './palette';
import  { palette22 } from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import useSettings from '../hooks/useSettings';
import shape from './shape';
// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { themeMode, themeDirection, setColor } = useSettings();
  const isLight = themeMode === 'light';
  const themeOptions = useMemo(
    () => {
      const selectedPalette = palette22[themeMode]; // Obtém a paleta correspondente ao modo de tema (light ou dark)
      const selectedColor = setColor; // Obtém a cor da paleta selecionada pelo usuário

      return {
        palette: {
          ...selectedPalette,
          primary: {
            lighter: selectedColor.lighter,
            light: selectedColor.light,
            main: selectedColor.main,
            dark: selectedColor.dark,
            darker: selectedColor.darker,
            contrastText: selectedColor.contrastText
          },
          mode: isLight ? 'light' : 'dark' // Define o modo do tema (light ou dark) baseado no contexto
        },
        shape,
        typography,
        direction: themeDirection,
        shadows: isLight ? shadows.light : shadows.dark,
        customShadows: isLight ? customShadows.light : customShadows.dark
      };
    },
    [isLight, themeDirection, themeMode, setColor] // Adicione themeColor às dependências
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
