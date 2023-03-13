import React from 'react'

import { Grid } from '@mui/material'
import LayoutGrid from '../../common/LayoutGrid'
import { MainBox, GridLogo } from './Footer.style'

import Logo from '../../common/Logo'

const Footer = () => {
  return (
    <MainBox>
      <LayoutGrid>
        <Grid container>
          <GridLogo item>
            <Logo />
          </GridLogo>
        </Grid>
      </LayoutGrid>
    </MainBox>
  )
}

export default Footer
