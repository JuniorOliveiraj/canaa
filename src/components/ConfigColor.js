import { useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import CheckeTheme from './checkBoxTheme';
const RootStyle = styled('div')(({ theme }) => ({
    zIndex: 999,
    right: 0,
    display: 'flex',
    cursor: 'pointer',
    position: 'fixed',
    alignItems: 'center',
    top: theme.spacing(10),
    height: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    boxShadow: theme.customShadows.z20,
    color: theme.palette.text.primary,
    borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
    borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
    backgroundColor: "#e38a59",
    transition: theme.transitions.create('opacity'),
    '&:hover': { opacity: 0.72 }
}));


export default function ConfigColor() {
    // ----------------------------------------------------------------------
    const matches = useMediaQuery('(min-width:1200px)');
    return (
        <div style={{display: !matches &&'none'}}> 
            <RootStyle >
                <motion.div
                    component={motion.div}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 9, repeat: Infinity, type: 'spring',
                        damping: 4,
                        mass: 0.5,
                        stiffness: 150
                    }}
                >
                   <CheckeTheme/>
                </motion.div>
            </RootStyle>
        </div>


    );

}