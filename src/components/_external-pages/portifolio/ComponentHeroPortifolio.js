import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// material
import { styled } from '@mui/material';
import { Container, Typography, useMediaQuery } from '@mui/material';
// components
import { varFadeInUp, varWrapEnter, } from '../../animate';
//


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
}));

export default function ComponentHeroPortifolio() {
    const matches = useMediaQuery('(min-width:600px)');
    const [cursorVariant, setCursorVariant] = useState('default');
    useEffect(() => {

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };

    }, []);
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const bgScale = useTransform(x, [-100, 100], [1.2, 1.5]);
    const bgOpacity = useTransform(y, [-100, 100], [0.8, 1]);
    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    const variants = {

        // default animation (applies onMouseLeave)
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
        },

        // text animation (applies onMouseEnter) 
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 70,
            y: mousePosition.y - 70,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        },
    };
    return (
        <RootStyle onMouseLeave={textLeave}>
            <motion.div initial="initial" animate="animate" variants={varWrapEnter} onMouseEnter={textEnter} >
                <Container
                    maxWidth="lg"
                    sx={{
                        textAlign: 'center',
                        alignItems: 'center',
                        display: { md: 'flex' },
                        justifyContent: { md: 'space-between' },

                    }}
                >
                    <div>
                        <motion.div variants={varFadeInUp} >
                            <Typography sx={{
                                textAlign: 'center !important',
                                fontSize: pxToRem(140),
                                ...responsiveFontSizes({ sm: 100, md: 340, lg: 450 }),
                                fontFamily: 'outward_block',
                                marginTop: "-5%"
                            }} >
                                PORTIFOLIO
                            </Typography>
                        </motion.div>
                        <Typography variant='h3' sx={{ fontWeight: 200, fontFamily: 'work sans', marginTop: '-5%' }}>Meus Projetos, em um só lugar</Typography>



                    </div>
                    <motion.div
                        variants={variants}
                        animate={cursorVariant}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            position: 'fixed',
                            top: y.get() - 5,  // Ajuste as coordenadas para centralizar o círculo no cursor
                            left: x.get() - 5, // Ajuste as coordenadas para centralizar o círculo no cursor
                            pointerEvents: 'none',
                            display: !matches && 'none',
                            scale: bgScale,
                            opacity: bgOpacity,
                        }}
                    ></motion.div>

                </Container>
            </motion.div>

        </RootStyle>
    );
}


function pxToRem(value) {
    return `${value / 17}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
    return {
        '@media (min-width:600px)': {
            fontSize: pxToRem(sm),
        },
        '@media (min-width:900px)': {
            fontSize: pxToRem(md),
        },
        '@media (min-width:1200px)': {
            fontSize: pxToRem(lg),
        },
    };
}