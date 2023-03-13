import { styled } from '@mui/material/styles'
import { Box, Drawer, Link, ListItemButton } from '@mui/material'
import Image from 'mui-image'

export const BoxDrawerColor = styled(Box)({
  background: '#101117',
  height: '100%',
  textAlign: 'center',
})

export const ListButton = styled(ListItemButton)({
  color: '#fff',
  textAlign: 'center',
})

export const DrawerStyle = styled(Drawer)({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '280px',
  },
});

export const ImageStyle = styled(Image)({
  '&:hover': {
    color: '#EBA62D',
  },
});

export const LinkStyle = styled(Link)({
 width: '100%',
});