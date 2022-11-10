import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

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

export default function Modalbasic ({images}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{color:'white', backgroundColor:'#0e4bef'}} onClick={handleOpen}>clique aqui para mais informações</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color='black' id="modal-modal-title" variant="h6" component="h2">
            Informações complementares
          </Typography>
          <Typography id="modal-modal-description" color='black' sx={{ mt: 2 }}>
         imagem registrada em: {images.date}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
