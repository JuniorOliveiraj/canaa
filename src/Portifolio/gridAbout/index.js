import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Iconify from '../../components/Iconify';

// material
import { Grid, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion } from 'framer-motion';

// components

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#333639',
    cursor: 'pointer',

    margin: 10,
    height: 250,
    fontSize: '35px',
    color: '#ffffff',
    lineHeight: '50px',
    fontWeight: 'bold',
    padding: '7%',
    paddingTop: '90px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    borderRadius: 30,
    '&:hover': {
        display: 2,
        duration: '0.5s',
        transition: '0.3s ease-in ',// geral
        backgroundColor: '#ff6b21',
    },



}));
const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '700px',
}));

export default function GridAbout() {
    const matches = useMediaQuery('(min-width:1060px)');

    const [hover, setHover] = useState(false);
    console.log(hover)






    return (

        <Container>
          { matches ? <Grid container spacing={0} >
                <Grid xs={6}>
                    <Item onMouseEnter={async () => { await setHover(!hover && true) }} onMouseLeave={async () => { await hover && setHover(false) }}>
                        {
                            hover ? <>
                                <motion.h3
                                    style={{ display: 'flex' }}
                                    initial={{ y: 60, opacity: 0 }}
                                    animate={{ y: 1, opacity: 1 }}
                                    transition={{
                                        duration: 0.4,

                                        repeatType: "reverse",

                                    }}
                                >Junior <br /> de Oliveira</motion.h3>
                            </> :

                                <>
                                    <motion.p
                                        style={{ display: 'flex' }}
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.3,
                                            repeatType: "reverse",
                                        }}
                                    >Hey, I`m Junior
                                        <motion.p
                                            animate={{ rotate: 1, }}
                                            transition={{
                                                duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96],
                                                repeat: 5,
                                                repeatType: "reverse",
                                            }}
                                            initial={{ rotate: 25, }}>👋</motion.p></motion.p>
                                    <motion.p style={{
                                        textAlign: 'left',
                                        fontSize: '15px',
                                        fontWeight: ' bold',
                                        display: 'block',
                                    }}
                                        initial={{ y: 60, opacity: 0 }}
                                        animate={{ y: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,

                                            repeatType: "reverse",

                                        }}>desenvolvedor React </motion.p>
                                </>

                        }
                        {
                            hover ? <motion.div
                                initial={{ y: -50, }}
                                animate={{ y: 1, }}
                                transition={{
                                    duration: 0.4,

                                    repeatType: "reverse",

                                }}
                            ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.div> : <motion.p
                                initial={{ y: 1,  }}
                                animate={{ y: -50, }}
                                transition={{
                                    duration: 0.4,



                                }}
                            ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.p>
                        }
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={3}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={6}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid> : <CarroseelMoblieApresentacao/>}
        </Container>




    );
}
function CarroseelMoblieApresentacao(params) {
    
    return (
     <>moba</>
    );
}
