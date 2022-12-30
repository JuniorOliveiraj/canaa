import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Iconify from '../../../components/Iconify';


// material
import { Grid, Paper, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion } from 'framer-motion';

// components
import CarrocelAboutMobile from './indexMobile';
import aboutMe from '../1VhMobile/aboltMeJson';
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
    const [hoverGtiHub, setHoverGtiHub] = useState(false);
    const [hoverLinkedin, setHoverLinkedin] = useState(false);
    return (
        <Container>
            {matches ? <Grid container spacing={0} >
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
                                >{aboutMe[0].hoveTitile} <br /> {aboutMe[0].hoveTitile2} </motion.h3>
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
                                    >{aboutMe[0].title}
                                        <motion.p
                                            animate={{ rotate: 1, }}
                                            transition={{
                                                duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96],
                                                repeat: 5,
                                                repeatType: "reverse",
                                            }}
                                            initial={{ rotate: 25, }}>{aboutMe[0].emoji}</motion.p></motion.p>
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

                                        }}>{aboutMe[0].text}</motion.p>
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
                                initial={{ y: 1, }}
                                animate={{ y: -50, }}
                                transition={{
                                    duration: 0.4,



                                }}
                            ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.p>
                        }
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item onMouseEnter={async () => { await setHoverGtiHub(!hoverGtiHub && true) }} onMouseLeave={async () => { await hoverGtiHub && setHoverGtiHub(false) }}>
                        {
                            hoverGtiHub ? <>

                                <motion.h3
                                    style={{
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: -70, opacity: 1 }}
                                    transition={{
                                        duration: 0.4,

                                        repeatType: "reverse",

                                    }}

                                >      <Iconify icon={aboutMe[1].emoji} width={200} height={200} /></motion.h3>
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
                                    >{aboutMe[1].title}
                                        <motion.p style={{ paddingLeft: 15 }}><Iconify icon={aboutMe[1].emoji} width={22} height={22} /></motion.p></motion.p>
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

                                        }}>{aboutMe[1].text}</motion.p>
                                    {
                                        hoverGtiHub ? <motion.div
                                            initial={{ y: 0, }}
                                            animate={{ y: 100, }}
                                            transition={{
                                                duration: 0.4,

                                                repeatType: "reverse",

                                            }}
                                        ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.div>
                                            : <motion.p
                                                initial={{ y: -10, }}
                                                animate={{ y: -50, }}
                                                transition={{
                                                    duration: 0.4,



                                                }}
                                            ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.p>
                                    }
                                </>

                        }

                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item onMouseEnter={async () => { await setHoverLinkedin(!hoverLinkedin && true) }} onMouseLeave={async () => { await hoverLinkedin && setHoverLinkedin(false) }}>

                        <a href={aboutMe[2].path} target="_blank" rel="noreferrer" style={{color:'#ffffff'}}>
                            {
                                hoverLinkedin ? <>

                                    <motion.h3
                                        style={{
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                        initial={{ y: 50, opacity: 0, scale: [1.5, 1.4] }}
                                        animate={{ y: 0, opacity: 1, scale: [1.5, 1] }}
                                        transition={{
                                            duration: 0.4,
                                            repeatType: "reverse",
                                        }}
                                    >      <Iconify icon={aboutMe[2].emoji} width={80} height={80} /></motion.h3>

                                    <motion.p style={{
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',

                                        fontSize: '15px',
                                        fontWeight: ' bold',

                                    }}


                                        initial={{ y: 60, opacity: 0 }}
                                        animate={{ y: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,

                                            repeatType: "reverse",


                                        }}>Let's Conect</motion.p>
                                </>

                                    //-***************************
                                    : <motion.h3
                                        style={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                        }}
                                        initial={{ scale: [1.5, 1] }}
                                        animate={{ scale: [1.5, 1.5] }}
                                        transition={{
                                            duration: 0.4,
                                            type: 'spring',
                                            damping: 4,
                                            mass: 0.5,
                                            stiffness: 150,

                                        }}
                                    >      <Iconify icon={aboutMe[2].emoji} width={80} height={80} /> </motion.h3>
                            }
                        </a>


                    </Item>
                </Grid>
                <Grid xs={3}>
                    <Item>{aboutMe[3].text}</Item>
                </Grid>
                <Grid xs={6}>
                    <Item>{aboutMe[4].text}</Item>
                </Grid>


            </Grid> : <CarrocelAboutMobile />
            }
        </Container >




    );
}
