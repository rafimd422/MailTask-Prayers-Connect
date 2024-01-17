import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreateIcon from '@mui/icons-material/Create';
import { Box, TextareaAutosize, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const ComposeModal = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
           <Button onClick={handleClickOpen} variant="contained" fullWidth color='error' sx={{p:'1rem', px:'1rem'}}>
       Compose <CreateIcon sx={{mx:'.4rem',p:'2px'}}/> 
        </Button>
   <Dialog
  open={open}
  onClose={handleClose}
  PaperProps={{
    component: 'form',
    onSubmit: (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
      const email = formJson.email;
      console.log(email);
      handleClose();
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between',overflow:'hidden' }}>
    <DialogTitle sx={{ fontSize: '14px' }}>New Message</DialogTitle>
    <ClearIcon onClick={handleClose} sx={{ p: '8px', cursor: 'pointer' }} />
  </Box>
  <DialogContent sx={{ minWidth: { md: '500px', sm: '450px', xs: '380px' } }}>
 
    <TextField
    sx={{overflow:'hidden'}}
      autoFocus
      required
      id="name"
      name="email"
      label="Email Address"
      type="email"
      fullWidth
      variant="standard"
    />
    <TextField
    sx={{overflow:'hidden'}}
      autoFocus
      required
      id="subject"
      name="subject"
      label="Subject"
      type="text"
      fullWidth
      variant="standard"
    />
        <TextareaAutosize
      minRows={3}
      variant="standard"
      style={{ width: '98%',height:'200px', resize:'none', marginTop:'0.6rem', border:'none' }}
    />
  </DialogContent>
<Box sx={{display:'flex', justifyContent:'space-between'}}>
<Button component="label" startIcon={<CloudUploadIcon />}>
  <VisuallyHiddenInput type="file" />
</Button>
<DialogActions >
    <Button onClick={handleClose}>Cancel</Button>
    <Button type='submit' variant="contained" endIcon={<SendIcon />}>
  Send
</Button>  </DialogActions>
</Box>
</Dialog>

    </>
  );
}

export default ComposeModal