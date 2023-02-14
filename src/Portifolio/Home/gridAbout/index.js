import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';
import Iconify from '../../../components/Iconify';


// material
import { Grid, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion, useScroll, useTransform,  } from 'framer-motion';

// components
import CarrocelAboutMobile from './indexMobile';
import aboutMe from '../1VhMobile/aboltMeJson';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#37514D',
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
    borderRadius: 15,
    '&:hover': {
        display: 2,
        duration: '0.5s',
        transition: '0.3s ease-in ',// geral
        backgroundColor: '#E38A59',
    },
}));
const Container = styled('div')(({ theme }) => ({
    width: '100%',
    minHeight: '700px',
    height: '150vh',
    scrollSnapAlign: 'start',
}));

export default function GridAbout() {
    const matches = useMediaQuery('(min-width:700px)');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });
    // const position = useTransform(scrollYProgress, [0, 0.12], ['fixed', 'flex']);
    const ItemGitHub = useTransform(scrollYProgress, [0.58, 0.68], ["-100%", "0%"]);
    const ItemLinkedin = useTransform(scrollYProgress, [0.68, 0.78], ["-108%", "0%"]);
    const ItemWork = useTransform(scrollYProgress, [0.78, 0.88], ["-108%", "0%"]);
    const ItemInstagram = useTransform(scrollYProgress, [0.88, 0.98], ["-108%", "0%"]);


    return (
        <Container ref={containerRef}>

            {matches ?
                <motion.div style={{

                    position: ' sticky',
                    top: 100,
                    padding: '50px',
                }}>
                    <Grid container spacing={0} >
                        <Grid xs={6} sx={{ zIndex: 5 }}>
                            <Perfil />
                        </Grid>
                        <Grid xs={6} sx={{ zIndex: 4 }}>
                            <motion.div style={{ translateX: ItemGitHub }} >
                                <Github />
                            </motion.div>
                        </Grid>
                        <Grid xs={3} sx={{ zIndex: 3 }}>
                            <motion.div style={{ translateY: ItemLinkedin }} >
                                <Linkedim />
                            </motion.div>
                        </Grid>
                        <Grid xs={3} sx={{ zIndex: 2 }}>
                            <motion.div style={{ translateY: ItemWork }} >
                                <LetsWork />
                            </motion.div>
                        </Grid>
                        <Grid xs={6} sx={{ zIndex: 1 }}>
                            <motion.div style={{ translateY: ItemInstagram, translateX: ItemGitHub }} >
                                <Instagram />
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
                : <CarrocelAboutMobile />
            }

        </Container >




    );
}
function Perfil() {
    const [hover, setHover] = useState(false);
    return (
        <Item onMouseEnter={async () => { await setHover(!hover && true) }} onMouseLeave={async () => { await hover && setHover(false) }} >
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
    )
}

function Github() {
    const [hoverGtiHub, setHoverGtiHub] = useState(false);
    return (
        <Item onMouseEnter={async () => { await setHoverGtiHub(!hoverGtiHub && true) }} onMouseLeave={async () => { await hoverGtiHub && setHoverGtiHub(false) }}>

            <a href={aboutMe[1].path} target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
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
            </a>


        </Item>
    )
}

function Linkedim() {
    const [hoverLinkedin, setHoverLinkedin] = useState(false);
    return (
        <Item onMouseEnter={async () => { await setHoverLinkedin(!hoverLinkedin && true) }} onMouseLeave={async () => { await hoverLinkedin && setHoverLinkedin(false) }}>

            <a href={aboutMe[2].path} target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
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
                        ><Iconify icon={aboutMe[2].emoji} width={80} height={80} /></motion.h3>
                }
            </a>


        </Item>
    )
}

function LetsWork() {
    const [hoverWork, setHoverWork] = useState(false);
    return (
        <Item onMouseEnter={async () => { await setHoverWork(!hoverWork && true) }} onMouseLeave={async () => { await hoverWork && setHoverWork(false) }}>
            {
                hoverWork ? <>

                    <motion.h3
                        style={{
                            alignItems: 'center',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        initial={{ y: 50, opacity: 0, scale: [1.5, 1.4] }}
                        animate={{ y: 0, opacity: 1, scale: [1.5, 2] }}
                        transition={{
                            duration: 0.4,
                            repeatType: "reverse",
                        }}

                    >      <Iconify icon={aboutMe[3].emoji} width={80} height={80} /></motion.h3>
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
                        >{aboutMe[3].title}</motion.p>
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
                            }}>{aboutMe[3].text}</motion.p>
                    </>

            }
            {
                hoverWork ? <motion.div
                    initial={{ y: -100, }}
                    animate={{ y: -100, }}
                    transition={{
                        duration: 0.4,
                        repeatType: "reverse",
                    }}
                ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.div>


                    : <motion.p
                        initial={{ y: -0, }}
                        animate={{ y: -0, }}
                        transition={{
                            duration: 0.4,
                        }}
                    ><Iconify style={{ float: 'right' }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={32} height={32} /></motion.p>
            }
        </Item>
    )
}
function Instagram() {
    const [hoverInstagram, setHoverInstagram] = useState(false);
    return (
        <Item onMouseEnter={async () => { await setHoverInstagram(!hoverInstagram && true) }} onMouseLeave={async () => { await hoverInstagram && setHoverInstagram(false) }}>
            <a href={aboutMe[4].path} target="_blank" rel="noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                {
                    hoverInstagram ? <>

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

                        >      <Iconify icon={aboutMe[4].emoji} width={200} height={200} /></motion.h3>
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
                            >{aboutMe[4].title}
                                <motion.p style={{ paddingLeft: 15 }}><Iconify icon={aboutMe[4].emoji} width={22} height={22} /></motion.p></motion.p>
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
                                }}>{aboutMe[4].text}</motion.p>
                            {
                                hoverInstagram ? <motion.div
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
            </a>

        </Item>
    )
}


