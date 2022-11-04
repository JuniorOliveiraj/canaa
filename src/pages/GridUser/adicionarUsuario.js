import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';

export default function AddUser(t) {
    console.log(t)

 

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
      };
    if (t) {
        handleClickOpen()
        console.log("sdad")
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Paper sx={{ width: 320 }}>
                        <MenuList dense>
                            <MenuItem>
                                <ListItemText inset>Single</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText inset>1.15</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText inset>Double</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>

                                </ListItemIcon>
                                Custom: 1.2
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText>Add space before paragraph</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemText>Add space after paragraph</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemText>Custom spacing...</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Paper>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
} 