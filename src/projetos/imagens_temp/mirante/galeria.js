import PropTypes from 'prop-types';
import { Box, styled, Container, Grid, Stack, Typography, useTheme, alpha, Link } from '@mui/material';
import useSettings from '../../../hooks/useSettings';
import Iconify from '../../../components/Iconify';
import { Link as RouterLink } from 'react-router-dom';



function FolderGalery() {
    const { themeStretch, themeMode } = useSettings();
    const theme = useTheme();
    return (
        <Container sx={{ marginTop: 12, height: "90vh", alignItems: 'left', justifyContent: 'left' }} maxWidth={themeStretch ? false : 'xl'}>
            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
                <Typography variant="h4" gutterBottom>
                    Lista de Produtos
                </Typography>

            </Stack >
            <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 4 }}>
                {Array.isArray(fakeArray) && (
                    fakeArray.map((values, index) => {
                        return (
                            <Link
                            to={`folder?data=${encodeURIComponent(JSON.stringify(values))}`}
                                color="inherit"
                                variant="subtitle2"
                                underline="hover"
                                component={RouterLink}

                            >

                                <CardFolder sx={{ backgroundColor: themeMode === 'dark' ? alpha(theme.palette.grey[700], 1) : alpha(theme.palette.grey[400], 0.4) }} >
                                    <Iconify icon={'material-symbols:folder'} width={30} height={30} color={alpha(theme.palette.primary.light, 1)} />
                                    <Box sx={{ marginLeft: 2 }}> <Typography variant="p" gutterBottom>
                                        {values.name.length > 7 ? `${values.name.substring(0, 9)}...` : values.name}
                                    </Typography></Box>
                                </CardFolder>
                            </Link>

                        )
                    })
                )}
            </Grid>

        </Container>



    );
}

const CardFolder = styled(Box)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    minWidth: 230,
    minHeight: 30,
    maxWidth: 300,
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
        "name": "Algodao",
        "child": [
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
        ]
    },
    {
        "value": "15",
        "name": "Dry Fit",
        "child": [
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
        ]
    },
    {
        "value": "17",
        "name": "Polo",
        "child": [
            {
                "value": "18",
                "name": "Camiseta Masculina"
            },
        ]
    },
    {
        "value": "19",
        "name": "Poliester",
        "child": [
            {
                "value": "25",
                "name": "Camiseta Masculina"
            },
        ]
    },
    {
        "value": "20",
        "name": "Fitness"
    },
    {
        "value": "21",
        "name": "Moletom",
        "child": [
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
        ]
    },
    {
        "value": "22",
        "name": "PV Malha Fria",
        "child": [
            {
                "value": "26",
                "name": "Camiseta Masculina"
            },
            {
                "value": "33",
                "name": "Camiseta Feminina"
            },
        ]
    },
    {
        "value": "32",
        "name": "Deletar"
    }
];
export default FolderGalery;