import React, { useState } from 'react'
import Editform from '../editform';
import { Box, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const EditModal = ({open,close}) => {
    
  
  return (
    <>
     <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style} p='5'><Editform/></Box>
    </Modal>
    </>
  )
}

export default EditModal