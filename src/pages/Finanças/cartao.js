// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography, Paper, } from '@mui/material';

import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------



// const IconWrapperStyle = styled('div')(({ theme }) => ({
//     margin: 'auto',
//     display: 'flex',
//     borderRadius: '50%',
//     alignItems: 'center',
//     width: theme.spacing(8),
//     height: theme.spacing(8),
//     justifyContent: 'center',
//     marginBottom: theme.spacing(3),
// }));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body,
    padding: theme.spacing(1),
    textAlign: 'right',
    alignItems: 'right',
    display: 'flex',
    justifyContent: ' right',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    margin: 10,
    width: 42,
    height: 42,

    marginTop: -30
}));

// ----------------------------------------------------------------------

Cartao.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sx: PropTypes.object,
};


export default function Cartao({ /*functions  =>*/adicionar,/*dados =>*/title, total, rotate, icon, id, color = 'primary', sx, ...other }) {

    const open1 = () => {
        adicionar(total, id, 1)
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  




    return (
        <Card
            sx={{
                py: 6,
                boxShadow: 0,
                textAlign: 'center',
                color: (theme) => theme.palette[color].darker,
                bgcolor: (theme) => theme.palette[color].lighter,
                ...sx,
            }}
            {...other}
        >
            <Item sx={{ float: 'right' }}>
                <Typography variant="p" sx={{ float: 'left', paddingLeft: 4 }}>
                    <Iconify 
                   // onClick={open2} 
                    cursor={'pointer'} 
                    icon={'mdi:dots-horizontal'} 
                    width={32} height={32} 
                    sx={{ float: 'right' }} 
                    
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    
                    />
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}> <Iconify width={20} height={20} sx={{ marginRight:1 }} icon={'eva:trash-2-fill'}/> Delet</MenuItem>
                        <MenuItem onClick={handleClose}><Iconify width={20} height={20} sx={{ marginRight:1 }} icon={'eva:edit-fill'}/> Edit</MenuItem>
                        <MenuItem onClick={handleClose}><Iconify width={20} height={20} sx={{ marginRight:1 }} icon={'material-symbols:fast-forward-outline'}/> augama coisa</MenuItem>
                    </Menu>

                </Typography>

            </Item>
            <Item sx={{ marginLeft: 3 }}>
                <Typography variant="p" sx={{ float: 'left', paddingLeft: 4 }}>
                    <Iconify onClick={open1} cursor={'pointer'} icon={'uil:money-withdraw'} width={30} height={30} sx={{ float: 'right' }} />
                </Typography>
            </Item>
            <Typography variant="p" sx={{ float: 'left', paddingLeft: 4 }}>{title}</Typography><br />
            <Typography variant="h3" sx={{ float: 'left', paddingLeft: 4, fontSize: 20 }}>{"R$ " + total} <Iconify icon="material-symbols:arrow-circle-up-rounded" rotate={rotate === 1 ? "0deg" : "180deg"} width={20} height={20} color={rotate === 1 ? '#0ea300' : '#fc6a42'}> </Iconify></Typography>
        </Card>
    );
}



