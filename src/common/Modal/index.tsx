import React, { useContext } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { ModalContext } from './context'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const CustomModal = () => {
  const ContextModal = useContext(ModalContext)

  return (
    <Modal
      open={ContextModal?.modal || false}
      onClose={() => ContextModal?.handleModal()}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>{ContextModal?.modalContent}</Box>
    </Modal>
  )
}

export default CustomModal
