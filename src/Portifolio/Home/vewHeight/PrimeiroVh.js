
import { Grid,  Box } from "@mui/material";
import { styled } from '@mui/material/styles';
const APPBAR_DESKTOP = 9;
const Item = styled('h1')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: `calc(10em - ${APPBAR_DESKTOP + 1}px)`,
    fontWeight: 700,
    fontFamily: 'Work Sans',
    letterSpacing: -5,
    lineHeight: 1,

}));
export default function PrimeiroVH() {
    return (
        <Box sx={{ width: '100%', margin: 0 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%', margin: 0 }}>
            <Grid xs={6}>
                    <Item><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_800_800/0/1656433703054?e=1675900800&v=beta&t=gkHNijmPykUUp3N2Uml0QesKL_nq3jf9KcRz_szznoo" alt="" /></Item>
                </Grid>
                <Grid xs={6}>
                    <Item>Junior Oliveira </Item>
                </Grid>
                
            </Grid>
        </Box>

    )
}