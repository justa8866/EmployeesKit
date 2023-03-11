import React from 'react'
import { PropsWithChildren } from 'react'
import { Grid } from '@mui/material'

const LayoutGrid = ({ children }: PropsWithChildren) => {
  return (
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>{children}</Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
  )
}

export default LayoutGrid
