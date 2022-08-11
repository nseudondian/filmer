import { ThemeContext } from "@emotion/react";
import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
  searchContainer: {
    [theme.breakpoints.down( 'sm' )]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100px'
    }
  },
  input: {
    color: theme.palette.mode === 'light' && 'black', 
    filter: theme.palette.mode === 'light' && 'invert(1)',
    [theme.breakpoints.down( 'sm' )]: {
        marginTop: '-10px',
        marginBottom: '10px'
    }
  }
}))