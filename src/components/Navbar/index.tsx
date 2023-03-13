import React from 'react'
import { Box, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavActionKind, useNav } from './Reducer/NavReducer'
import LayoutGrid from '../../common/LayoutGrid'
import {
  BoxMenu,
  ChangeVisibility,
  GridButton,
  GridLogo,
  MainAppBar,
  MenuIconButton,
} from './Navbar.style'

import Logo from '../../common/Logo'
import NavItems from '../../common/NavItems/NavItems'
import DrawerElement from '../DrawerElement/DrawerElemrent'
import { items } from './navItems'

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
            <ChangeVisibility container item xs={0} lg={8}>
              <NavItems items={items} />
            </ChangeVisibility>
            <GridButton item xs={6} lg={2}>
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
