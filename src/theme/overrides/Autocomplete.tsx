// ----------------------------------------------------------------------

import { ThemeOptionsExtended } from '../types';

export const Autocomplete = (theme: ThemeOptionsExtended) => ({
  MuiAutocomplete: {
    styleOverrides: {
      paper: {
        boxShadow: theme.customShadows.z20,
      },
    },
  },
});
