// @mui
import { Link, Typography } from '@mui/material';
import { Logo } from '../../components/Logo/Logo';
import { useResponsive } from '../../hooks/useResponsive';
import { LoginForm } from './LoginForm';
import { StyledContainer, StyledContent, StyledRoot, StyledSection } from './LoginPage.styles';

// ----------------------------------------------------------------------

const LoginPage = () => {
  const mdUp = useResponsive('up', 'md', 'md');

  return (
    <>
      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <StyledContainer>
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign in to TestXYZ
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

            <LoginForm />
          </StyledContent>
        </StyledContainer>
      </StyledRoot>
    </>
  );
};

export default LoginPage;
