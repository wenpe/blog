import { AppBar, Box, Typography, Container, Divider } from '@mui/material';
import { NextMuiLink } from 'components/NextMuiLink';

export const Header = () => {
  return (
    <div>
      <AppBar position='static' sx={{ boxShadow: `none`, backgroundColor: `#062127` }}>
        <Container maxWidth='xl'>
          <Box
            sx={{
              display: `flex`,
              alignItems: `center`,
              height: `70px`,
            }}
          >
            <NextMuiLink href='/'>
              <Typography sx={{ fontSize: `25px` }}>Wenpe Playground</Typography>
            </NextMuiLink>
          </Box>
        </Container>
      </AppBar>
      <Divider light sx={{ borderColor: `rgba(211, 211, 211, .3)` }} />
    </div>
  );
};
