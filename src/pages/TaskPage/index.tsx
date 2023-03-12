import React from 'react'
import LayoutGrid from '../../common/LayoutGrid'
import { ModalProvider } from '../../common/Modal/context'
import NavProvider from '../../components/Navbar/Reducer/NavReducer'
import Navbar from '../../components/Navbar'
import { Grid } from '@mui/material'
import Task from '../../components/Task'

const HomePage = () => {
  return (
    <ModalProvider>
      <NavProvider>
        <Navbar />
      </NavProvider>
      <LayoutGrid>
        <Grid container mt={10}>
          <Task />
        </Grid>
      </LayoutGrid>
    </ModalProvider>
  )
}

export default HomePage
