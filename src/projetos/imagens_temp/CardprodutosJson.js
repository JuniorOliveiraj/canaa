import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Typography, CardContent, Button, Snackbar, Box, Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
function ProductCard({ productName, productImageUrl, amburger }) {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        setIsSnackbarOpen(true);
    };
    return (
        <Card sx={{ display: 'flex', cursor: 'pointer' }}>
            {Array.isArray(productImageUrl) ? (
                productImageUrl.map((url, index) => (
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
                    image={productImageUrl.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : !productImageUrl.startsWith('https://') ? 'https://' + productImageUrl : productImageUrl}
                    alt={productName}
                />
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '300%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {productName}
                    </Typography>
                    <CardActions>
                        {Array.isArray(productImageUrl) ? (
                            productImageUrl.map((url, index) => (
                                <Button key={index} variant="contained" color="primary" onClick={() => handleCopyToClipboard(url)}>
                                    Copiar Link {index + 1}
                                </Button>
                            ))
                        ) : (
                            <Button variant="contained" color="primary" onClick={() => handleCopyToClipboard(productImageUrl)}>
                                Copiar Link
                            </Button>
                        )}
                    </CardActions>
                </CardContent>
            </Box>

            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={2000}
                onClose={() => setIsSnackbarOpen(false)}
                message="Link copiado para a área de transferência."
                sx={{marginTop:10}}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </Card>
    );
}

ProductCard.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};

export default ProductCard;
