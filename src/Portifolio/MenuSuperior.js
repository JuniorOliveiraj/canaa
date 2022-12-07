
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Menu, Grid, Paper } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, Avatar, Typography } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
// components
import Iconify from '../components/Iconify';

import { useState, useContext } from 'react';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { authGoogleContex } from '../autenticação';

import Logo from '../components/Logo';





// ----------------------------------------------------------------------



const Imagen = styled('img')(({ theme }) => ({
  animation: ' snowman 160ms alternate infinite ease-in-out',
  "&:hover": {
    transition:' ease-in all 0.5s',
    opacity: '0.8',
    transform: 'scale(1.02)',
  }
}));
const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

const ButtonLinkMenu = styled(ListItemButton)(({ theme }) => ({
 
  border: '2px solid transparent',
  padding: '0px 10px 3px 10px',
  margin: 0,
  "&:hover": {
    backgroundColor: 'transparent',
    borderBottom: '2px solid'
  }
}));
//const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 64;

const RootStyle = styled(AppBar)(({ theme }) => ({
  background:alpha(theme.palette.background.default, 0.72),
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  
  [theme.breakpoints.up('lg')]: {
    width: '100',
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({

  minHeight: APPBAR_MOBILE,
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,

    backgroundColor: 'transparent',
    padding: theme.spacing(0, 5),
  },
}));




// ----------------------------------------------------------------------

export default function MenuSuperior() {
  const matchDownSM = useMediaQuery('(min-width:1200px)');
  const { acoontUser } = useContext(authGoogleContex);
  const account = acoontUser[0];

  const [state, setState] = useState({
    right: false
  });
  const onOpenSidebar2 = () => {
    setState({
      right: true
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
      right: false
    })


  };

  const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;
  const navConfig = [
    {
      title: 'dashboard',
      path: '/dashboard/app',
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
      title: 'pages',
      path: 'https://www.instagram.com/',
      icon: getIcon('akar-icons:instagram-fill'),
      externo: true,
      plus: getIcon('material-symbols:keyboard-arrow-down'),
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


  /* menu */

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };
  /**/

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'right' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
          onClick={() => { text.externo ? window.location.replace(`${text.path}`) : console.log("nd") }}
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
  // desctop 
  return (
    <RootStyle>
      <ToolbarStyle >
        <Link
          underline="none"
          component={RouterLink}
          to={"/"}

          color="black"

        >

          <ButtonLinkMenu>

            <ListItemText primary={'logo'} />
          </ButtonLinkMenu>

        </Link>
        <Box sx={{ flexGrow: 1, }} >
          <Stack
            direction="row"

            spacing={{ xs: 0.5, sm: 1.5, }}
            display={!matchDownSM ? 'none' : 'flex'}
            sx={{

              alignItems: 'center',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }} >
            {
              navConfig.map((index) => (
                <Link
                  underline="none"
                  component={RouterLink}
                  to={!index.externo ? index.path : "#"}
                  onClick={() => { index.externo ? window.location.replace(`${index.path}`) : console.log("nd") }}
                  display={!matchDownSM ? 'none' : 'flex'}
                  color="black"

                >
                  <ListItem key={index.title} disablePadding>
                    <ButtonLinkMenu
                      id="menubutton1"
                      aria-owns={open ? "simple-menu" : null}
                      aria-haspopup="true"
                      onMouseOver={index.plus && handleOpen}


                    >
                      {index.plus ? <ListItemIcon sx={{ margin: '0px -30px 0px -10px' }}>{index.plus}</ListItemIcon> : ''}
                      <ListItemText primary={index.title}  /*onmouseout*/ />
                    </ButtonLinkMenu>
                  </ListItem>
                </Link>
              ))
            }
          </Stack>
        </Box>

        {/* menu drawer */}

        <>
          <IconButton onClick={onOpenSidebar2} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
            <Iconify icon="eva:menu-2-fill" />

          </IconButton>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>

        </>


      </ToolbarStyle>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        // onMouseLeave={(e)=>{console.log("Saiu")}}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ marginTop: 4 }}

      >
        <Box onMouseLeave={handleClose}>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid container xs={6} rowSpacing={1} >

              <Grid xs={6} lg={3} sx={{ padding:3, marginLeft:1 }}>
                <Paper >
                  <Box
                    id="category-a"
                    sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                    Category A
                  </Box>
                  <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                    <li>Link 1.1</li>
                    <li>Link 1.2</li>
                    <li>Link 1.3</li>
                  </Box>
                </Paper >
              </Grid>
              <Grid xs={6} lg={3} sx={{ padding:3, marginLeft:1 }}>
                <Paper >
                  <Box
                    id="category-a"
                    sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                    Category b
                  </Box>
                  <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                    <li>Link 1.1</li>
                    <li>Link 1.2</li>
                    <li>Link 1.3</li>
                  </Box>
                </Paper >
              </Grid>
              <Grid xs={6} lg={3} sx={{ padding:3, marginLeft:1 }}>
                <Paper >
                  <Box
                    id="category-a"
                    sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                    Category c
                  </Box>
                  <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                    <li>Link 1.1</li>
                    <li>Link 1.2</li>
                    <li>Link 1.3</li>
                  </Box>
                </Paper >
              </Grid>
            </Grid>
            <Grid container xs={6} sx={{padding:2}}>
              <Link
                underline="none"
                component={RouterLink}
                to={"/dashboard"}
                color="black  "
              >
                dashboard
                <Imagen src="/static/illustrations/illustration_dashboard.png" alt="" />
              </Link>

            </Grid>
          </Grid>
        </Box>
      </Menu>
    </RootStyle>
  );
}

