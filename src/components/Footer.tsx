import { Box, Typography, Container, Divider } from '@mui/material';
import { getCopyrightYear } from 'libs/getCopyrightYear';

export const Footer = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <Divider
          light
          sx={{ borderColor: `rgba(221, 221, 221, .5)`, borderWidth: `1px`, marginTop: `40px` }}
        />
        <Box
          sx={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Typography sx={{ margin: `10px` }}>© {getCopyrightYear()} Wenpe</Typography>
        </Box>
      </Container>
    </div>
  );
};
