import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#101117',
      contrastText: '#DDE1E5',
    },
    secondary: {
      main: '#1E1E28',
      contrastText: '#DDE1E5',
    },
  },
  typography: {
    button: {
      color: 'rgba(121,9,64,0.8575805322128851)',
      fontWeight: '700',
    },
    h1: {
      fontSize: '20px',
      fontFamily: 'Noto Sans',
      fontWeight: 'bold',
      letterSpacing: '1px',
      color: '#2a0818',
    },

    h6: {
      fontSize: '16px',
      fontWeight: '500',
      letterSpacing: '2px',
      color: '#fff',
    },
  },
})

export default theme
