import { Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { PageNotFoundImage, StyledContent } from './PageNotFound.styles';

const PageNotFound = () => {
  return (
    <>
      <title> 404 Page Not Found | Minimal UI </title>

      <Container>
        <StyledContent>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.
          </Typography>

          <PageNotFoundImage />

          <Button to="/dashboard" size="large" variant="contained" component={RouterLink}>
            Go to Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
};

export default PageNotFound;
