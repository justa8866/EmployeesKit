import React from 'react'
import { Box, Grid } from '@mui/material'
import { NavActionKind, useNav } from './Reducer/NavReducer'
import MenuIcon from '@mui/icons-material/Menu'
import LayoutGrid from '../../common/LayoutGrid'
import {
  BoxMenu,
  ChangeVisibility,
  GridButton,
  GridLogo,
  MainAppBar,
  MenuIconButton,
} from './Navbar.style'

import PeopleAndTasksIcon from '../../assets/PeopleAndTasksIcon'
import PeopleIcon from '../../assets/PeopleIcon'
import TasksIcon from '../../assets/TasksIcon'
import Logo from '../../common/Logo'
import NavItems, { IItemNavElement } from '../../common/NavItems/NavItems'
import DrawerElement from '../DrawerElement/DrawerElemrent'

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

const Navbar = () => {
  const [, dispatch] = useNav()

  return (
    <Box>
      <MainAppBar>
        <LayoutGrid>
          <Grid container>
            <GridLogo item xs={6} lg={2}>
              <Logo />
            </GridLogo>
            <ChangeVisibility container item xs={0} lg={7}>
              <NavItems items={items} />
            </ChangeVisibility>
            <GridButton item xs={5} lg={2}>
              <BoxMenu>
                <MenuIconButton
                  size='large'
                  edge='start'
                  color='inherit'
                  aria-label='menu'
                  onClick={() =>
                    dispatch({
                      type: NavActionKind.toogleNav,
                    })
                  }
                >
                  <MenuIcon />
                </MenuIconButton>
              </BoxMenu>
            </GridButton>
          </Grid>
        </LayoutGrid>
      </MainAppBar>
      <DrawerElement />
    </Box>
  )
}

export default Navbar
