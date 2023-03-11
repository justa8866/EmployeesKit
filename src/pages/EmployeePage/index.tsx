import React from 'react'
import Employee from '../../components/Employee'
import LayoutGrid from '../../common/LayoutGrid'
import { ModalProvider } from '../../common/Modal/context'
import NavProvider from '../../components/Navbar/Reducer/NavReducer'
import Navbar from '../../components/Navbar'
import { Grid } from '@mui/material'

const EmployeePage = () => {
  return (
    <ModalProvider>
      <NavProvider>
        <Navbar />
      </NavProvider>
      <LayoutGrid>
        <Grid container mt={10}>
          <Employee />
        </Grid>
      </LayoutGrid>
    </ModalProvider>
  )
}

export default EmployeePage
