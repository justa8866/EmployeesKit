import React from 'react'

import { Grid } from '@mui/material'
import LayoutGrid from '../../common/LayoutGrid'
import { GridLogo, GridVisibility } from './Footer.style'

import PeopleAndTasksIcon from '../../assets/PeopleAndTasksIcon'
import PeopleIcon from '../../assets/PeopleIcon'
import TasksIcon from '../../assets/TasksIcon'
import Logo from '../../common/Logo'
import { MainBox } from '../../common/Logo/Logo.style'
import NavItems, { IItemNavElement } from '../../common/NavItems/NavItems'

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

const Footer = () => {
  return (
    <MainBox>
      <LayoutGrid>
        <Grid container>
          <GridLogo item>
            <Logo />
          </GridLogo>
          <GridVisibility item>
            <NavItems items={items} />
          </GridVisibility>
        </Grid>
      </LayoutGrid>
    </MainBox>
  )
}

export default Footer
