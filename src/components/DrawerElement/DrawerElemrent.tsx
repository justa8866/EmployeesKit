import React from 'react'
import { Box, Divider, IconButton, List, ListItem, ListItemText } from '@mui/material'
import Logo from '../../common/Logo'
import { NavActionKind, useNav } from '../Navbar/Reducer/NavReducer'
import { BoxDrawerColor, DrawerStyle, LinkStyle, ListButton } from './DrawerElement.style'
import { items } from '../Navbar/navItems'

const DrawerElement = () => {
  const [state, dispatch] = useNav()

  const drawer = (
    <BoxDrawerColor
      onClick={() =>
        dispatch({
          type: NavActionKind.toogleNav,
        })
      }
    >
      <Logo />
      <Divider />
      <List>
        {items.map(item => (
          <ListItem key={item.value} disablePadding>
            <LinkStyle href={item.href} >
              <ListButton>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                  <item.icon />
                </IconButton>
                <ListItemText primary={item.value} />
              </ListButton>
            </LinkStyle>
          </ListItem>
        ))}
      </List>
    </BoxDrawerColor>
  )

  return (
    <Box component='nav'>
      <DrawerStyle
        variant='temporary'
        open={state.open}
        onClose={() =>
          dispatch({
            type: NavActionKind.toogleNav,
          })
        }
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </DrawerStyle>
    </Box>
  )
}

export default DrawerElement
