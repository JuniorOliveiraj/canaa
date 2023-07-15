
import PrimeiroMobile from '../../../Portifolio/Home/1VhMobile/indexMobile';
import PrimeiroVH from '../../../Portifolio/Home/vewHeight/PrimeiroVh';
import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';
// routes

//
import { varWrapEnter, } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    [theme.breakpoints.up('md')]: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        position: 'fixed',
        alignItems: 'center'
    }
}));
// ----------------------------------------------------------------------
export default function Landingprimeiro() {
    const matches2 = useMediaQuery('(min-width:670px)');
    return (
        <>
            <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
                {matches2 ? <PrimeiroVH /> : <PrimeiroMobile />}
            </RootStyle>
            <Box sx={{ height: { md: '100vh' } }} />
        </>
    );
}
