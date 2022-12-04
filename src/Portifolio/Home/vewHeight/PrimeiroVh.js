
import { Grid, Paper ,Box } from "@mui/material";
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function PrimeiroVH(){
    return(
        <Box sx={{ width: '100%' ,margin:0 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{margin:5 ,padding:5}}>
          <Grid xs={6}>
            <Item>Texto </Item>
          </Grid>
          <Grid xs={6}>
            <Item><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHcbFe9-Phe1Q/profile-displayphoto-shrink_800_800/0/1656433703054?e=1675900800&v=beta&t=gkHNijmPykUUp3N2Uml0QesKL_nq3jf9KcRz_szznoo" alt="" /></Item>
          </Grid>

        </Grid>
      </Box>
    )
}