import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeOptionsExtended } from '../../theme/types';

export const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: (theme as ThemeOptionsExtended).customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

export const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export const StyledContainer = styled(Container)(() => ({
  background: `linear-gradient( rgb(255 255 255 / 80%), rgb(255 255 255 / 80%) ),
    url(/assets/illustrations/loginCover.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  maxWidth: '100% !important',
}));
