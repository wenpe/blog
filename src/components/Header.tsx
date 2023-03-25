import * as React from 'react';
import { AppBar, Box, Container, Divider } from '@mui/material';
import Image from 'next/image';
import { NextMuiLink } from 'components/NextMuiLink';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import { MarginOutlined } from '@mui/icons-material';

type page = {
  title: string;
  url: string;
};

const pages: Array<page> = [
  {
    title: 'Github',
    url: 'https://github.com/wenpe',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/wenpe2567',
  },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                  display: { xs: 'none', md: 'flex' },
                  alignItems: `center`,
                  height: `70px`,
                  marginRight: `20px`,
                }}
              >
                <Box sx={{ marginRight: `10px` }}>
                  <Image
                    src='/image/wenpe_icon_mini.svg'
                    alt='WENPE PLAYGROUND'
                    width={38}
                    height={45}
                  />
                </Box>
                <Image
                  src='/image/wenpe_typograph.svg'
                  alt='WENPE PLAYGROUND'
                  width={90}
                  height={45}
                />
              </Box>
            </NextMuiLink>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NextMuiLink key={page.title} href={page.url}>
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'black',
                      display: 'block',
                      fontSize: '17px',
                    }}
                  >
                    {page.title}
                  </Button>
                </NextMuiLink>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
              <IconButton
                size='large'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon css={{ color: 'gray' }} />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <NextMuiLink key={page.title} href={page.url}>
                    <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                      {page.title == 'Github' && (
                        <GitHubIcon sx={{ color: 'black', marginRight: '5px' }} />
                      )}
                      {page.title == 'Twitter' && (
                        <TwitterIcon sx={{ color: '#1da1f2', marginRight: '5px' }} />
                      )}
                      <Typography textAlign='center' color='black'>
                        {page.title}
                      </Typography>
                    </MenuItem>
                  </NextMuiLink>
                ))}
              </Menu>
              <NextMuiLink href='/'>
                  <Box
                    sx={{
                      display: { xs: 'flex', md: 'none' },
                      alignItems: `center`,
                    height: `70px`
                      ,marginLeft: `-40px`
                    }}
                  >
                    <Box sx={{ marginRight: `10px` }}>
                      <Image
                        src='/image/wenpe_icon_mini.svg'
                        alt='WENPE PLAYGROUND'
                        width={38}
                        height={45}
                      />
                    </Box>
                    <Image
                      src='/image/wenpe_typograph.svg'
                      alt='WENPE PLAYGROUND'
                      width={90}
                      height={45}
                    />
                  </Box>
              </NextMuiLink>
              <Box></Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Divider sx={{ borderColor: `rgba(221, 221, 221, .5)`, borderWidth: `1px` }} />
    </div>
  );
};
