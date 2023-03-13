import React from 'react'
import { Box, Typography } from '@mui/material'
import { Text } from './Logo.style'

const Logo = () => {
  return (
    <Box>
      <Text variant='h1'  >
        Employee
        <Typography variant='h2' component='span'>
          KIT
        </Typography>
      </Text>
    </Box>
  )
}

export default Logo