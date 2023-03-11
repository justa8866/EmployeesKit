import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'react-toastify/dist/ReactToastify.css'
import { LinearProgress } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { ToastContainer } from 'react-toastify'
import theme from './theme/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LinearProgress />}>
        <App />
        <ToastContainer />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
