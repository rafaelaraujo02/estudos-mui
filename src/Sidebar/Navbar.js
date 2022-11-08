import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//ICONS
import ListItemIcon from '@mui/material/ListItemIcon';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
//LOGO
import logo from '../assets/cropped-logo-Nutes-Final.jpg'
import logoMenor from '../assets/logo_nutes.jpg'
import HeaderCadastroColaboradores from '../components/HeaderCadastroColaboradores';
import { Link } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';


//TAMANHO DO SIDEBAR
const drawerWidth = "380px";

//SIDEBAR ABERTO (NÃO INCLUI A ÁREA DOS ELEMENTOS COR QUE É PRA FICAR: #094e6f)
//AO ABRIR, SOBREPOR A LISTA E ESCURECER UM POUCO 
// PASSAR COMO PROPS ALGUMA FLAG QUE INDIQUE QUE O NAVBAR FOI ABERTO, COM ESSA FLAG, ATRIBUÍMOS O FILTRO ESCURO
const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: 'white',
  transition: '.8s',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  
});

//SIDEBAR FECHADO
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  transition: '.4s',
  backgroundColor: 'white',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

//HEADER DO SIDEBAR
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '150px',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(

  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const matches = useMediaQuery('(min-width:767px)');
  const theme = useTheme();
  //DEFINE SE O SIDEBAR COMEÇA ABERTO OU FECHADO
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  return (

    
    <Box sx={{ display: 'flex' }}>
      

      <CssBaseline />
      
      <Drawer variant="permanent" open={open} onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
        <DrawerHeader>
          <img 
            
              src={open ? logo : logoMenor} 
              style={{height: open ? "90px" : "40px", paddingTop: "2px", paddingRight: "10px", transition: ".7s"}}
              alt="Logo Nutes"
              >
          </img>
          {/*
            <IconButton sx={{marginRight: -1}}>
              {open === true ? <ChevronLeftIcon  onClick={handleDrawerClose} /> : <ChevronRightIcon  onClick={handleDrawerOpen} />}
            </IconButton>
          */}
        </DrawerHeader>
        <List>
          {['Acesso', 'Colaboradores', 'Patrimônio', 'Mobile'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link to={`/${text}`} style={{ textDecoration: 'none' }}>

              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 3.5,
                  backgroundColor: "white",
                  color: "#094e6f",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: "#094e6f",
                  }}
                >
                  {index === 0 && <LockOpenIcon />}
                  {index === 1 && <GroupsOutlinedIcon/>}
                  {index === 2 && <PermMediaOutlinedIcon/>}
                  {index === 3 && <PhoneAndroidOutlinedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      
    </Box>
  );
}
