import { AppBar, Box, Container, Divider } from '@mui/material';
import Image from 'next/image';
import { NextMuiLink } from 'components/NextMuiLink';
import testImg from '../../public/image/wenpe_icon.svg';

export const Header = () => {
  return (
    <div>
      <AppBar position='static' sx={{ boxShadow: `none`, backgroundColor: `white` }}>
        <Container maxWidth='xl'>
          <Box
            sx={{
              display: `flex`,
              alignItems: `center`,
              height: `70px`,
            }}
          >
            <NextMuiLink href='/'>
              <Box
                sx={{
                  display: `flex`,
                  alignItems: `center`,
                  height: `70px`,
                }}
              >
                <Image
                  src='/image/wenpe_icon_mini.svg'
                  alt='WENPE PLAYGROUND'
                  width={60}
                  height={50}
                />
                <Image
                  src='/image/wenpe_typograph.svg'
                  alt='WENPE PLAYGROUND'
                  width={120}
                  height={60}
                />
              </Box>
            </NextMuiLink>
          </Box>
        </Container>
      </AppBar>
      <Divider sx={{ borderColor: `rgba(221, 221, 221, .5)`, borderWidth: `1px` }} />
    </div>
  );
};
