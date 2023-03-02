import { ReactNode, useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
//
import { customShadows } from './customShadows';
import { GlobalStyles } from './globalStyles';
import { ComponentsOverrides } from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { ThemeOptionsExtended } from './types';
import { typography } from './typography';

// ----------------------------------------------------------------------
type Props = {
  children?: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const themeOptions = useMemo(
    () =>
      ({
        palette,
        shape: { borderRadius: 6 },
        typography,
        shadows: shadows(),
        customShadows: customShadows(),
      } as unknown as ThemeOptionsExtended),
    []
  );

  const theme = createTheme(themeOptions) as ThemeOptionsExtended;
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
