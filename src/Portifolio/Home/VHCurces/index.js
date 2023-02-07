
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import InfoCuses from './Information';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';

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
export default function GridCuses() {
    const matches = useMediaQuery('(min-width:1060px)');
    const matches2 = useMediaQuery('(min-width:670px)');
    return (
        <Box sx={{ width: '100%', marginTop: 10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: !matches && 'center' }}>
                {
                    InfoCuses.map(index => (
                        <>
                            <Grid
                                component={motion.div}
                                xs={matches ? 6 : 8}
                                key={index.id}>
                                <GridDate style={{    fontSize: matches2 ? ' 25px' : '15px',}}>{index.date}</GridDate>
                                <GridTitle style={{ fontSize: matches2 ? '30px' : "20px",}}> {index.title}</GridTitle>
                                <img src={index.img} alt="Curses" style={{ borderRadius: '10px', }} />
                            </Grid>
                        </>
                    ))
                }
            </Grid>
        </Box>
    )
}