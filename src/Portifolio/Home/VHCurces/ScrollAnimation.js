import { motion,  } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoCuses from './Information';

/*
 * Read the blog post here:
 * https://letsbuildui.dev/series/scroll-animations-with-framer-motion/scroll-linked-content-reveal-animation
 */
import styled from "styled-components";
import Grid from '@mui/material/Unstable_Grid2';

const GridDate = styled.p`
    font-size:25px;
    margin:10% 0px 0px 10%;
    width: 80%;
    font-style: normal;
    font-weight: 300;
    @media (max-width: 1300px) {
        font-size:19px
    }
    @media (max-width: 670px) {
        font-size:18px;
    }
`;
const GridTitle = styled(motion.p)`
    font-size:60px;
    margin:2% 0px 0px 10%;
    width: 87%;
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 600;
    @media (max-width: 1700px) {
        font-size:46px
    }
    @media (max-width: 1300px) {
        font-size:30px
    }


`
const GridSubTitle = styled(motion.p)`
    font-size:30px;
    margin:0px 0px 0px 10%;
    width: 87%;
    font-style: normal;
    font-weight: 600;
    @media (max-width: 1700px) {
        font-size:25px
    }
    @media (max-width: 1300px) {
        font-size:20px
    }


`;

const GridSubText = styled(motion.p)`
    font-size:25px;
    margin:0px 0px 0px 10%;
    width: 70%;
    font-style: normal;
    font-weight: 300;
 
    font-size:22px;
    @media (max-width: 1700px) {
        font-size:17px;
    }
    @media (max-width: 1300px) {
        font-size:14px;
        line-height: 15px;
    }

`;


const Opacityvariants = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            //type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};
const Yvariants = {
    offscreen: {
        translateY: "70%"
    },
    onscreen: {
        translateY: "0%",
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};



export const ScrollAnimation = () => {
    const matches = useMediaQuery('(min-width:1060px)');
    return (
        <section>
            <div  >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: !matches && 'center' }}  >
                    {
                        InfoCuses.map(index => (
                            <>
                                <Grid
                                    component={motion.div}
                                    xs={matches ? 6 : 11}
                                    style={{
                                        translateY: "0%",
                                    }}
                                    key={index.id}
                                   
                                >
                                 
                                    <motion.section style={{
                                        position: "absolute",
                                        top: '0%',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    >
                                        <GridDate style={{ color: '#ffffff' }}>{index.date}</GridDate>
                                        <motion.div
                                            initial="offscreen"
                                            whileInView="onscreen"
                                            viewport={{ once: false, amount: 0.8 }}>
                                            <GridTitle
                                                style={{ color: index.corTitle, }}
                                                variants={Opacityvariants}> {index.title}
                                            </GridTitle>
                                        </motion.div>
                                        <motion.div
                                            initial="offscreen"
                                            whileInView="onscreen"
                                            viewport={{ once: false, amount: 0.8 }}>
                                            <GridSubTitle style={{ color: '#ffffff' }} variants={Yvariants}   >{index.subTitle}</GridSubTitle>
                                            <GridSubText style={{ color:'#ffffff', }} variants={Yvariants} > {index.text} </GridSubText>
                                        </motion.div>
                                    </motion.section>
                                    <img src={index.img} alt="Curses" style={{ borderRadius: '10px', width: '100%' }} />
                              
                                </Grid>
                            </>
                        ))
                    }
                </Grid>
            </div>
        </section>
    );
};
