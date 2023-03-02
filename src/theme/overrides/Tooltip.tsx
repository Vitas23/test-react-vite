// ----------------------------------------------------------------------

import { ThemeOptionsExtended } from '../types';

export const Tooltip = (theme: ThemeOptionsExtended) => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.palette.grey[800],
      },
      arrow: {
        color: theme.palette.grey[800],
      },
    },
  },
});
