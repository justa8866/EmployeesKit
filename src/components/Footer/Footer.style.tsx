import { styled } from '@mui/material/styles'
import { Box, Grid } from '@mui/material'

export const MainBox = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  height: '80px',
  lineHeight: '80px',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  textAlign: 'center',
}))

export const GridLogo = styled(Grid)({
  display: 'flex',
})
