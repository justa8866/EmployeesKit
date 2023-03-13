import React from 'react'
import { IconButton } from '@mui/material'
import { BoxColor, MainBox, Text } from './NavItems.style'
import { Link } from 'react-router-dom'
import { IItemNavElement } from './types/IItemNavElement.type'

interface IPropNavItems {
  items: IItemNavElement[]
}

const NavItems = ({ items }: IPropNavItems) => {
  return (
    <MainBox>
      {items.map(item => (
        <BoxColor key={item.value}>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <item.icon />
          </IconButton>
          <Link to={item.href || ''}>
            <Text href={item.href} underline='none' variant='h5'>
              {item.value}
            </Text>
          </Link>
        </BoxColor>
      ))}
    </MainBox>
  )
}

export default NavItems
