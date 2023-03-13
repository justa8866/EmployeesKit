import React from 'react'
import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'
import Navbar from '../../components/Navbar'
import NavProvider from '../../components/Navbar/Reducer/NavReducer'
import LayoutGrid from '../LayoutGrid'
import { ModalProvider } from '../Modal/context'
import Footer from '../../components/Footer'

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <ModalProvider>
      <NavProvider>
        <Navbar />
      </NavProvider>
      <LayoutGrid>
        <Grid container mt={12} mb={12}>
          { children }
        </Grid>
      </LayoutGrid>
      <Footer/>
    </ModalProvider>
  )
}

export default PageLayout