import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export default createTheme({
  palette: {
    primary: { main: blue[800] },
    secondary: red,
  },
});
