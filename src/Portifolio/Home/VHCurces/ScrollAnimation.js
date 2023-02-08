import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoCuses from './Information';
/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const GridDate = styled('p')(({ theme }) => ({
    position: 'relative',
    width: '265px',
    height: ' 10px',
    left: '5%',
    top: '10%',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: '29px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',

}))
const GridTitle = styled('p')(({ theme }) => ({
    position: 'relative',
    width: '60%',
    height: ' 10px',
    left: '5%',
    top: '15%',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '27px',
    letterSpacing: '-0.06em',
    color: '#ffffff',


}))
export const ScrollAnimation = () => {

    const matches = useMediaQuery('(min-width:1060px)');
    const matches2 = useMediaQuery('(min-width:670px)');
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const bottomShadowValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
    );
    const imageValue1 = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);
    const imageValue2 = useTransform(scrollYProgress, [0, 0.41], ["100%", "0%"]);
    const Opacity = useTransform(scrollYProgress, [0, 0.44], [0, 1]);
    const topShadowValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-25%", "100%"]
    );

    return (
        <section className="scroll-container" ref={containerRef}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: !matches && 'center' }}  >
                {
                    InfoCuses.map(index => (
                        <>
                            <Grid
                                component={motion.div}
                                xs={matches ? 6 : 8}
                                style={{
                                    translateY: index.id === 0 ? imageValue1 : imageValue2,
                                    opacity: Opacity
                                }}
                                key={index.id}>

                                <motion.div
                                    className="bottom-shadow"
                                    style={{ translateX: bottomShadowValue }}
                                />
                                <GridDate style={{ fontSize: matches2 ? ' 25px' : '15px', }}>{index.date}</GridDate>
                                <GridTitle style={{ fontSize: matches2 ? '30px' : "20px", }}> {index.title}</GridTitle>
                                <img src={index.img} alt="Curses" style={{ borderRadius: '10px', }} />
                                <motion.div
                                    className="top-shadow"
                                    style={{ translateX: topShadowValue }}
                                />
                            </Grid>
                        </>
                    ))
                }
            </Grid>










        </section>
    );
};
