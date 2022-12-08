//import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
//import DashboardNavbar from '../layouts/dashboard/DashboardNavbar';
//import DashboardSidebar from '../layouts/dashboard/DashboardSidebar';
import'./vewHeight/styles.css'
import { motion } from "framer-motion";
import { useState } from "react";
// material
import {Container} from '@mui/material';
// components

import Page from '../../components/Page';
// mock
//import POSTS from '../_mock/blog';

import MenuSuperior from '../MenuSuperior';
// ----------------------------------------------------------------------
import PrimeiroVH from './vewHeight/PrimeiroVh';

export default function HomePortifolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Page title="Home" marginTop={8}>
    <RootStyle >
      <MenuSuperior />
    
    </RootStyle>

    <PrimeiroVH/>
        
        <Container sx={{backgroundColor:'red', width:'100%'}}> 
        <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="child" />
    </motion.div>
        </Container>
    </Page>
  );
}
const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});