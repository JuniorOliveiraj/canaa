import PropTypes from 'prop-types';
import { Box, styled, Container, Grid, Stack, Typography, useTheme, alpha, useMediaQuery } from '@mui/material';
import useSettings from '../../../hooks/useSettings';
import Iconify from '../../../components/Iconify';




function FolderGalery() {
    const { themeStretch, themeMode } = useSettings();
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:900px)');
    return (
        <Container sx={{ marginTop: 12, }} maxWidth={themeStretch ? false : 'xl'}>
            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
                <Typography variant="h4" gutterBottom>
                    Lista de Produtos
                </Typography>

            </Stack >
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                {Array.isArray(fakeArray) && (
                    fakeArray.map((values, index) => {
                        console.log(values);
                        return (
                            <Grid    md={matches ? 4 : 8} key={index}>
                                <CardFolder sx={{ backgroundColor:themeMode === 'dark' ?  alpha(theme.palette.grey[700], 1) :alpha(theme.palette.grey[400], 0.4) }} >
                                <Iconify icon={'material-symbols:folder'} width={30} height={30} color={alpha(theme.palette.primary.light, 1)} />
                                <Box sx={{ marginLeft: 2 }}> <Typography variant="p" gutterBottom>
                                    {values.name}
                                </Typography></Box>
                            </CardFolder>
                            </Grid>

                            
                        )
                    })
                )}
            </Grid>

        </Container>



    );
}

const CardFolder = styled(Box)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    minWidth: 250,
    minHeight: 30,
    margin: 6,
    borderRadius: 12,
    boxShadow: theme.customShadows.z24,
    padding: 15,
    display: 'flex',
    flexDirection: 'row'
}));


FolderGalery.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};

const fakeArray = [
    {
        "value": "9",
        "name": "Algodao"
    },
    {
        "value": "14",
        "name": "Camiseta Masculina"
    },
    {
        "value": "29",
        "name": "Camiseta Feminina"
    },
    {
        "value": "30",
        "name": "Regata Feminina"
    },
    {
        "value": "31",
        "name": "Regata Masculina"
    },
    {
        "value": "35",
        "name": "Manga Longa Masculina"
    },
    {
        "value": "36",
        "name": "Manga Longa Feminina"
    },
    {
        "value": "15",
        "name": "Dry Fit"
    },
    {
        "value": "16",
        "name": "Camiseta Masculina"
    },
    {
        "value": "27",
        "name": "Camiseta Feminina"
    },
    {
        "value": "28",
        "name": "Camiseta Feminina"
    },
    {
        "value": "34",
        "name": "Regata Feminina"
    },
    {
        "value": "17",
        "name": "Polo"
    },
    {
        "value": "18",
        "name": "Camiseta Masculina"
    },
    {
        "value": "19",
        "name": "Poliester"
    },
    {
        "value": "25",
        "name": "Camiseta Masculina"
    },
    {
        "value": "20",
        "name": "Fitness"
    },
    {
        "value": "21",
        "name": "Moletom"
    },
    {
        "value": "23",
        "name": "Blusao"
    },
    {
        "value": "24",
        "name": "Canguru com Capuz"
    },
    {
        "value": "37",
        "name": "Blusão Feminino"
    },
    {
        "value": "38",
        "name": "Canguru com Capuz Feminino"
    },
    {
        "value": "39",
        "name": "Calça Moletom Masculina"
    },
    {
        "value": "40",
        "name": "Calça Moletom Feminina"
    },
    {
        "value": "41",
        "name": "Bermuda Moletom"
    },
    {
        "value": "22",
        "name": "PV Malha Fria"
    },
    {
        "value": "26",
        "name": "Camiseta Masculina"
    },
    {
        "value": "33",
        "name": "Camiseta Feminina"
    },
    {
        "value": "32",
        "name": "Deletar"
    }
]
export default FolderGalery;