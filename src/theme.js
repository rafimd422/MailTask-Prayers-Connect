import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#27374D',
    },
    secondary: {
      main: '#526D82',
    },
    text: {
main:'#DDE6ED'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;