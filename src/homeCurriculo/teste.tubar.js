
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Link, Avatar, Typography } from '@mui/material';
// components
import Iconify from '../components/Iconify';
//
import Searchbar from '../layouts/dashboard/Searchbar';
import AccountPopover from '../layouts/dashboard/AccountPopover';

import { useState,useContext } from 'react';


import { Link as RouterLink } from 'react-router-dom';
import { authGoogleContex } from '../autenticação';


import Logo from '../components/Logo';
import * as React from 'react';

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';


// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------
const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

export default function TesteTubar() {
  const {accountUser} = useContext(authGoogleContex); 
  const account = accountUser[0];
  console.log(account)
  const [state, setState] = useState({
    left: false
  });
  const onOpenSidebar2 = () => {
    setState({
      left: true
    })

  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return alert("s");
    }

    setState({
      left: false
    })


  };

  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const navConfig = [
    {
      title: 'dashboard',
      path: '/app',
      icon: getIcon('eva:pie-chart-2-fill'),
      externo: false
    },
    {
      title: 'curiculo',
      path: 'https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view',
      icon: getIcon('bi:file-earmark-pdf-fill'),
      externo: true
    },
    {
      title: 'instagram',
      path: 'https://www.instagram.com/',
      icon: getIcon('akar-icons:instagram-fill'),
      externo: true
    },
    {
      title: 'linkedim',
      path: 'https://www.linkedin.com/in/junior-oliveira-ba22381a3/',
      icon: getIcon('akar-icons:linkedin-box-fill'),
      externo: true
    },
    {
      title: 'guithub',
      path: 'https://github.com/JuniorOliveiraj',
      icon: getIcon('fluent-mdl2:git-hub-logo'),
      externo: true
    },


  ];


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
          <Logo />
        </Box>
        <Box sx={{ mb: 5, mx: 2.5 }}>
          <Link underline="none" component={RouterLink} to="#">
            <AccountStyle>
              <Avatar src={account.photoURL} alt="photoURL" />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                  {account.displayName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {account.role}
                </Typography>
              </Box>
            </AccountStyle>

          </Link>
        </Box>


      </List>
      {navConfig.map((text, index) => (
        <Link
          underline="none"
          component={RouterLink}
          to={!text.externo ? text.path : "#"}
          onClick={()=>{text.externo ?   window.location.replace(`${text.path}`) : console.log("")}}
          color="black"

        >
          <ListItem key={text.title} disablePadding>
            <ListItemButton>
              <ListItemIcon >{text.icon}</ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
      <Divider />
    </Box>
  );

  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton onClick={onOpenSidebar2} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />

        </IconButton>
        <Drawer

          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>
        <div>

        </div>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>

          {/* <NotificationsPopover /> */}
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
