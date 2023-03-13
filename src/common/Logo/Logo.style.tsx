import { styled } from '@mui/material/styles'
import { Box, Grid, Link } from '@mui/material'
import Image from 'mui-image'

export const MainBox = styled(Box)({
  display: 'flex',
  gap: '30px',
  textAlign: 'center',
})

export const BoxColor = styled(Box)({
  color: '#525764',
  '&:hover': { color: '#00C150', cursor: 'pointer' },
})

export const Text = styled(Link)({
  fontSize: '13px',
  fontFamily: 'Noto Sans',
  fontWeight: '700',
  color: '#DDE1E5',
  textDecoration: 'none',
})

export const GridFlex = styled(Grid)({
  display: 'flex',
})

export const ImageStyle = styled(Image)({
  '&:hover': {
    color: '#EBA62D',
  },
})