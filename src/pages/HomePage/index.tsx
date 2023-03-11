import React from 'react'
import Employee from '../../components/Employee'
import LayoutGrid from '../../common/LayoutGrid'
import { ModalProvider } from '../../common/Modal/context'
import NavProvider from '../../components/Navbar/Reducer/NavReducer'
import Navbar from '../../components/Navbar'

const HomePage = () => {
  return (
    <ModalProvider>
      <NavProvider>
        <Navbar />
      </NavProvider>
      <LayoutGrid>
        <Employee />
      </LayoutGrid>
    </ModalProvider>
  )
}

export default HomePage
