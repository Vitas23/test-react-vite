// ----------------------------------------------------------------------

import { ThemeOptionsExtended } from '../types';

export const Typography = (theme: ThemeOptionsExtended) => ({
  MuiTypography: {
    styleOverrides: {
      paragraph: {
        marginBottom: theme.spacing(2),
      },
      gutterBottom: {
        marginBottom: theme.spacing(1),
      },
    },
  },
});
