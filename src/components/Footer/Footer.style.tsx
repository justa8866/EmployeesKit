import { styled } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

export const MainBar = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '80px',
  lineHeight: '80px',
}))

export const GridLogo = styled(Grid)({
  display: 'flex',
})

export const GridVisibility = styled(Grid)(({ theme }) => ({
  lineHeight: '80px',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}))