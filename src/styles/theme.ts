import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#062127',
    },
    secondary: {
      main: red.A100,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#062127',
    },
  },
});

export default theme;
