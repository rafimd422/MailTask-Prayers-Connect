import { Avatar, Button, ButtonGroup, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const UserProfile = () => {
  return (
  <Box sx={{height: 'auto',
    width: "400px",
     display:'flex',flexDirection:'column',alignItems:'center', gap:'0.6rem', cursor:'auto'}}>
        <Typography fontSize={'16px'}>johnWick@yahoo.com</Typography>
    <Avatar src={"https://i.ibb.co/QQLQrRH/images.jpg"} alt={"userProfile.name"} sx={{width:'64px', height:'64px'}} />
    <Typography fontSize={'17px'}>Hi, John!</Typography>
    <Typography fontSize={'15px'} sx={{borderRadius: "100px",
    border: "1px solid #747775", px:'23px', py:'10px',fontWeight:'bold','&:hover': {
        backgroundColor: '#e0e0e0',
      }, cursor:'pointer'}}>Manage your Account</Typography>
      <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
  sx={{my:'4px'}}
 >
  <Button sx={{borderRadius:'100px',p:'16px', fontSize:'11px'}}>Add Account</Button>
  <Button sx={{p:'16px',borderRadius:'100px', fontSize:'11px'}}>Sign Out</Button>
</ButtonGroup>
<List sx={{display:'flex', fontSize:'12px'}}>
    <ListItem sx={{cursor:'pointer'}}>
Privacy Policy
    </ListItem>
    <ListItem sx={{cursor:'pointer'}}>
Terms of Services    </ListItem>
</List>
  </Box>
  )
}

export default UserProfile
