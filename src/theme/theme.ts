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
      color: '#EBA62D',
      fontSize: '24px',
      fontFamily: 'Helvetica',
      fontWeight: '700',
    },
    h2: {
      color: '#fff',
      fontSize: '24px',
      fontFamily: 'Helvetica',
      fontWeight: '700',
    },
    h4: {
      fontSize: '22px',
      fontFamily: 'Noto Sans',
      fontWeight: '700',
      color: '#DDE1E5',
    },
    h5: {
      fontSize: '13px',
      fontFamily: 'Noto Sans',
      fontWeight: '700',
      color: '#DDE1E5',
    },
    h6: {
      fontSize: '13px',
      fontFamily: 'Noto Sans',
      fontWeight: '500',
      color: '#DDE1E5',
    },
  },
})

export default theme
