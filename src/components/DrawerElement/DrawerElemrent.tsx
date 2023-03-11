import React from 'react'
import { Box, Divider, IconButton, List, ListItem, ListItemText } from '@mui/material'
import Logo from '../../common/Logo'
import { NavActionKind, useNav } from '../Navbar/Reducer/NavReducer'
import { BoxDrawerColor, DrawerStyle, ListButton } from './DrawerElement.style'

import PeopleIcon from '../../assets/PeopleIcon'
import TasksIcon from '../../assets/TasksIcon'
import PeopleAndTasksIcon from '../../assets/PeopleAndTasksIcon'

interface IItemNavElement {
  value: string
  icon: () => JSX.Element
}

const items: IItemNavElement[] = [
  {
    value: 'Employees',
    icon: PeopleIcon,
  },
  {
    value: 'Tasks',
    icon: TasksIcon,
  },
  {
    value: 'Employees and their tasks',
    icon: PeopleAndTasksIcon,
  },
]

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
            <ListButton>
              <IconButton edge='start' color='inherit' aria-label='menu'>
                <item.icon />
              </IconButton>
              <ListItemText primary={item.value} />
            </ListButton>
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
