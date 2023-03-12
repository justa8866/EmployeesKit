import React from 'react'
import { Grid } from '@mui/material'
import LayoutGrid from '../../common/LayoutGrid'
import { ModalProvider } from '../../common/Modal/context'
import NavProvider from '../../components/Navbar/Reducer/NavReducer'
import Navbar from '../../components/Navbar'
import StatisticsEmployee from '../../components/StatisticsEmployee'

const HomePage = () => {
  return (
    <ModalProvider>
      <NavProvider>
        <Navbar />
      </NavProvider>
      <LayoutGrid>
        <Grid container mt={10}>
          <StatisticsEmployee />
        </Grid>
      </LayoutGrid>
    </ModalProvider>
  )
}

export default HomePage
