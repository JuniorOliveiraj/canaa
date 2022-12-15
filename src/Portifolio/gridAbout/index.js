import { styled } from '@mui/material/styles';
import { useState } from 'react';


// material
import { Grid, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion } from 'framer-motion';

// components

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#333639',

    color: theme.palette.text.secondary,
    margin: 10,
    height: 250,
    fontSize: '35px',
    color: '#ffffff',
    lineHeight: '50px',
    fontWeight: 'bold',
    padding: '7%',
    paddingTop:'90px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    borderRadius: 30



}));
const Container = styled('div')(({ theme }) => ({
    width: '100%',

    minHeight: '700px',
}));

export default function GridAbout() {
    const matches = useMediaQuery('(min-width:1060px)');
    const [maozinha, setMaozinha ] = useState(false)
    function MaozinhaTrue(){
        setMaozinha(true)
    }
    function MaozinhaFalse(){
        setMaozinha(false)
    }
    setInterval(!maozinha && MaozinhaTrue, 7000);
    setInterval(maozinha && MaozinhaFalse, 1000);




    return (

        <Container>
            <Grid container spacing={0} >
                <Grid xs={matches ? 6 : 12}>
                    <Item >
                        <p style={{ display: 'flex' }}>Hey, I`m Junior
                            <motion.p
                              animate={ maozinha ? { rotate: 1, }: {rotate: 25, }}
                              transition={maozinha &&{
                                    duration:0.2, ease: [0.48, 0.15, 0.25, 0.96] ,
                                    repeat:  5,
                                    repeatType:  "reverse",
                                    
                                } }
                                initial={{rotate: 25, }}>
                                    
                                👋</motion.p></p>
                        <p style={{
                            textAlign: 'left',
                            fontSize: '15px',
                            fontWeight: ' bold',
                            display: 'block',
                        }}>desenvolvedor React </p>
                    </Item>
                </Grid>
                <Grid xs={matches ? 6 : 12}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid xs={matches ? 3 : 12}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={matches ? 3 : 12}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={matches ? 6 : 12}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Container>




    );
}
