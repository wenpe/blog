import { Box, Typography, Container, Divider } from '@mui/material';
import { getCopyrightYear } from 'libs/getCopyrightYear';

export const Footer = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <Divider light sx={{ borderColor: `rgba(211, 211, 211, .3)`, marginTop: `40px` }} />

        <Box
          sx={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Typography sx={{ color: `white`, margin: `10px` }}>
            © {getCopyrightYear()} Wenpe
          </Typography>
        </Box>
      </Container>
    </div>
  );
};
