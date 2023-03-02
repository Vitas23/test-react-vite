// ----------------------------------------------------------------------

import { ThemeOptionsExtended } from '../types';

export const Table = (theme: ThemeOptionsExtended) => ({
  MuiTableCell: {
    styleOverrides: {
      head: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.neutral,
      },
    },
  },
});
