import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color:{
        primary : '#01579b',
        secondary : '#90caf9',
        error : '#d50000'
    },
    typography : {
        fontFamily : 'Roboto'
    },
    shape : {
        borderRadius : 4,
        backgoundColor : '#FFCDD2',
        textColor : '#FFC107'
    }
});
export default theme;
