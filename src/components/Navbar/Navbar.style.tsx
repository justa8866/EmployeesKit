import { styled } from '@mui/material/styles'
import { AppBar, Box, Grid, IconButton } from '@mui/material'

export const MainAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: '80px',
  lineHeight: '80px',
}))

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}))

export const ChangeVisibility = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}))

export const GridLogo = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-start',
})

export const GridButton = styled(Grid)({
  display: 'flex',
  justifyContent: 'flex-end',
})

export const BoxMenu = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}))

