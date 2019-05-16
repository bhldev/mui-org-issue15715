import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

export const createTheme = (theme: ThemeOptions = {}) => createMuiTheme(theme);
