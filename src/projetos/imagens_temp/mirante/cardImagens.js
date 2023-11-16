import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Button, Grid, Box, styled, Link, alpha, Typography, useTheme, Container, Stack , Snackbar} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useSettings from '../../../hooks/useSettings';
import Iconify from '../../../components/Iconify';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function GaleryProductCard({ productName, productImageUrl, amburger }) {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [child, setChild] = useState([]);

    const { themeStretch, themeMode } = useSettings();
    const theme = useTheme();
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        setIsSnackbarOpen(true);
    };
    const location = useLocation();

    const handleChange = (event) => {
        settamanhoImage(event.target.value);
    };
    const [jsonData, setJsonData] = useState([]);
    const [tamanhoImage, settamanhoImage] = useState('290x365');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const dataParam = searchParams.get('data');

        if (dataParam) {
            const dataObject = JSON.parse(decodeURIComponent(dataParam));
            console.log(dataObject);
            setChild(dataObject);

            axios.get(`https://api-node-psi.vercel.app/mirante/list/Teste?foder=${dataObject.value}`)
                .then(response => {
                    console.log('Resposta da requisição:', response.data.PRODUTOS);

                    // Função para alterar as dimensões das imagens na resposta
                    const novaLista = alterarDimensoes(response.data.PRODUTOS.images, tamanhoImage);

                    // Atualiza o estado jsonData com a nova lista
                    setJsonData(novaLista);
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
                });
        }
    }, [location.search, tamanhoImage]);
    function alterarDimensoes(lista, novaDimensao) {
        return lista.map(imagem => {
            if (imagem.hasOwnProperty("path")) {
                imagem.path = imagem.path.replace(/(\d{2,3}x\d{2,3})/, novaDimensao);
            }
            return imagem;
        });
    }
    console.log(jsonData)
    return (
        <Container sx={{ marginTop: 12, alignItems: 'left', justifyContent: 'left' }} maxWidth={themeStretch ? false : 'xl'}>
            <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
                <Typography variant="h4" gutterBottom>
                    {child.name}
                </Typography>
                <Box sx={{ marginLeft: 7 }}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Tamanho da imagem </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={handleChange}
                            value={tamanhoImage}
                        >
                            <FormControlLabel value="40x35" control={<Radio />} label="40x35" />
                            <FormControlLabel value="119x150" control={<Radio />} label="119x150" />
                            <FormControlLabel value="290x365" control={<Radio />} label="290x365" />
                            <FormControlLabel value="524x520" control={<Radio />} label="524x520" />
                            <FormControlLabel value="1000x1000" control={<Radio />} label="1000x1000" />
                            <FormControlLabel value="1760x2215" control={<Radio />} label="1760x2215" />

                        </RadioGroup>
                    </FormControl>
                </Box>

            </Stack >
            <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 4 }}>
                {Array.isArray(child.child) && (
                    child.child.map((values, index) => {
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
            <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', padding: 4 }}>
                {Array.isArray(jsonData) && (
                    jsonData.map((url, index) => {
                        return (
                            <Imagen
                                sx={{ backgroundImage: `url( ${url.path})`, backgroundSize: '100%' }}
                                // src={url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : url}
                                alt={`Slide ${index + 1}`}
                            >

                                <Box sx={{ width: '100%', display: 'flex', alignItems: "right", justifyContent: 'right', margin: '7px 7px 0px 0px' }}>
                                    <ButtonIcon key={index} variant={'contained'} color="primary" onClick={() => handleCopyToClipboard(url.path)} >
                                        <Iconify width={20} height={20} icon={'iconamoon:copy'} />
                                    </ButtonIcon>

                                    <ButtonIcon key={index} color="primary" variant='contained' onClick={() => window.open(`https://api-node-psi.vercel.app/mirante/dawloand?url=${url.path}`, '_blank')}  >
                                        <Iconify width={20} height={20} icon={'mdi:downloads'} />
                                    </ButtonIcon>
                                </Box>
                            </Imagen>
                        )
                    })
                )}

            </Grid>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={2000}
                onClose={() => setIsSnackbarOpen(false)}
                message="Link copiado para a área de transferência."
                sx={{ marginTop: 10 }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </Container>
    );
}

const Imagen = styled(Box)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    minWidth: 300,
    minHeight: 300,
    margin: 6,
    borderRadius: 12,
    boxShadow: theme.customShadows.z24,
}));

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
const ButtonIcon = styled(Button)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    margin: 1,
    opacity: 0.5,
    "&:hover": {
        transition: ' ease-in all 0.2s',
        opacity: '0.8',
        transform: 'scale(1.02)',
    }
}));

GaleryProductCard.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};
export default GaleryProductCard;