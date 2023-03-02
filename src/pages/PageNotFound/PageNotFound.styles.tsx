import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  alignItems: 'center',
}));

export const PageNotFoundImage = () => (
  <Box
    component="img"
    src="/assets/illustrations/illustration_404.svg"
    sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
  />
);
