import {createTheme} from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#9747CC',
    },
    secondary: {
      main: '#68BF56',
    },
    success:{
      main:'#7CE667',
    },
    error:{
        main:'#FF284C',
    },
    background: {
      default: "#FAFAFA",
      light: "#f9f9f9",
    },
  },
});

export default theme;