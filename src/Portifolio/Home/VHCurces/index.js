
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InfoCuses from './Information';
import useMediaQuery from '@mui/material/useMediaQuery';

const GridDate = styled('p')(({ theme }) => ({
    position: 'relative',
    width: '265px',
    height: ' 1px',
    height: ' 10px',
    left: '45px',
    top: '10%',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: ' 25px',
    lineHeight: '29px',
    letterSpacing: '0.03em',
    color: '#FFFFFF',
}))
const GridTitle = styled('p')(({ theme }) => ({
    position: 'relative',
    width: '265px',
    height: ' 10px',
    left: '45px',
    top: '15%',
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '30px',
    lineHeight: '27px',
    letterSpacing: '-0.06em',
    color: '#ffffff',
    
}))
export default function GridCuses() {
    const matches = useMediaQuery('(min-width:1060px)');
    console.log(InfoCuses)
    return (
        <Box sx={{ width: '100%', marginTop:10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent:!matches && 'center'}}>
                {
                    InfoCuses.map(index => (
                        <>
                            <Grid xs={matches ? 6 : 8} key={index.id} >
                                <GridDate>{index.date}</GridDate>
                                <GridTitle>{index.title}</GridTitle>
                                <img src={index.img}  alt="Curses" style={{ borderRadius: '35px', }} />
                            </Grid>
                        </>
                    ))
                }
            </Grid>
        </Box>
    )
}