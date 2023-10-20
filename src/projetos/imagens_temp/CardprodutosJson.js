import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Typography, CardContent, Button, Snackbar, Box, Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Iconify from '../../components/Iconify';
import DialogProdutosMirante from './dialogIdit';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProductCard({ productName, productImageUrl, amburger }) {
    const [open, setOpen] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const handleCopyToClipboard = async (url) => {
        navigator.clipboard.writeText(url);
        setIsSnackbarOpen(true);
        const downloadFile = async (url) => {
            await axios.download(url);
        };

        downloadFile("hhttps://itig-iraq.iq/wp-content/uploads/2019/05/Blockchain_Revolution.pdf");
    };
    return (
        <Card sx={{ display: 'flex', cursor: 'pointer' }}>
            {Array.isArray(productImageUrl.url) ? (
                productImageUrl.url.map((url, index) => (
                    <CardMedia
                        component="img"
                        sx={{ width: '25%', maxWidth: 151, minWidth: '10' }}
                        image={url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : url}
                        alt={`Slide ${index + 1}`}
                    />
                ))
            ) : (
                <CardMedia
                    component="img"
                    sx={{ width: '25%', maxWidth: 151, minWidth: '10' }}
                    image={productImageUrl.url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : !productImageUrl.url.startsWith('https://') ? 'https://' + productImageUrl.url : productImageUrl.url}
                    alt={productName}
                />
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '300%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {productName}
                    </Typography>
                    <CardActions>
                        {Array.isArray(productImageUrl.url) ? (
                            productImageUrl.url.map((url, index) => (
                                <Button key={index} variant="contained" color="primary" onClick={() => handleCopyToClipboard(url)}>
                                    <Iconify width={20} height={20} icon={'iconamoon:copy'} /> {index + 1}
                                </Button>
                            ))
                        ) : (
                            <Button variant="contained" color="primary" onClick={() => handleCopyToClipboard(productImageUrl.url)}>
                                <Iconify width={20} height={20} icon={'iconamoon:copy'} />
                            </Button>
                        )}

                        {Array.isArray(productImageUrl.url) && (
                            productImageUrl.url.map((url, index) => (
                                <Button key={index} variant="contained" color="primary" onClick={() => window.open(`https://api-node-psi.vercel.app/mirante/dawloand?url=${url}`, '_blank')}>
                                    <Iconify width={20} height={20} icon={'mdi:downloads'} /> {index + 1}
                                </Button>
                            ))
                        )}
                    </CardActions>
                </CardContent>
            </Box>

            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={2000}
                onClose={() => setIsSnackbarOpen(false)}
                message="Link copiado para a área de transferência."
                sx={{ marginTop: 10 }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            <Button sx={{ margin: 1, float: 'left' }} onClick={() => setOpen(true)}><Iconify icon={"ic:baseline-plus"} width={20} height={20} /></Button>
            <DialogProdutosMirante setOpen={setOpen} open={open} productImageUrl={productImageUrl} id={productImageUrl.id_produto} />
        </Card>
    );
}

ProductCard.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};

export default ProductCard;
