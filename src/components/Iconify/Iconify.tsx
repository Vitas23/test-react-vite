import { Icon, IconifyIcon } from '@iconify/react';
import { Box } from '@mui/material';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------
interface Props {
  icon: IconifyIcon | string;
  color?: string;
  width?: number;
  height?: number;
  sx?: object;
}

export const Iconify = forwardRef(({ icon, width = 20, sx, ...other }: Props, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
));
