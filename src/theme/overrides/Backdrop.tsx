import { alpha } from '@mui/material/styles';
import { ThemeOptionsExtended } from '../types';

// ----------------------------------------------------------------------

export const Backdrop = (theme: ThemeOptionsExtended) => ({
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(theme.palette.grey[800], 0.8),
      },
      invisible: {
        background: 'transparent',
      },
    },
  },
});
