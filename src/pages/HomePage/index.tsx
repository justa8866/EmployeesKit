import React from 'react'
import Employee from '../../components/Employee'
import LayoutGrid from '../../common/LayoutGrid'
import { ModalProvider } from '../../common/Modal/context'

const HomePage = () => {
  return (
    <ModalProvider>
      <LayoutGrid>
        <Employee />
      </LayoutGrid>
    </ModalProvider>
  )
}

export default HomePage
