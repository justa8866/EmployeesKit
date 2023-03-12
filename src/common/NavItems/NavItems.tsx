import { IconButton } from '@mui/material'
import { BoxColor, MainBox, Text } from './NavItems.style'
import React from 'react'
import { Link } from 'react-router-dom'

export interface IItemNavElement {
  value: string
  icon: () => JSX.Element
  href?: string
}

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
            <Text href={item.href} variant='h5'>
              {item.value}
            </Text>
          </Link>
        </BoxColor>
      ))}
    </MainBox>
  )
}

export default NavItems
