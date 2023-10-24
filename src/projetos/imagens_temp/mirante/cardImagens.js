import PropTypes from 'prop-types';
import {  Button, Snackbar, Box,  styled } from '@mui/material';
import { useState } from 'react';
import Iconify from '../../components/Iconify';
import DialogProdutosMirante from './dialogIdit';

function GaleryProductCard({ productName, productImageUrl, amburger }) {
    const [open, setOpen] = useState(false);
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        setIsSnackbarOpen(true);
    };

    return (
        <>
            {Array.isArray(productImageUrl.url) && (
                productImageUrl.url.map((url, index) => {
                    console.log(url);
                    return (
                        <Imagen
                            sx={{ backgroundImage: `url(${url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : url})`, backgroundSize: '100%' }}
                            // src={url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : url}
                            alt={`Slide ${index + 1}`}
                        >
                            <Box sx={{ width: '100%', display: 'flex', alignItems: "right", justifyContent: 'right', margin: '7px 7px 0px 0px' }}>
                                <ButtonIcon key={index} variant={'contained'} color="primary" onClick={() => handleCopyToClipboard(url)} >
                                    <Iconify width={20} height={20} icon={'iconamoon:copy'} />  
                                </ButtonIcon>

                                <ButtonIcon key={index} color="primary" variant='contained' onClick={() => window.open(`https://api-node-psi.vercel.app/mirante/dawloand?url=${url}`, '_blank')}  >
                                    <Iconify width={20} height={20} icon={'mdi:downloads'} />  
                                </ButtonIcon>
                            </Box>
                           
                        </Imagen>
                    )
                })
            )}
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={2000}
                onClose={() => setIsSnackbarOpen(false)}
                message="Link copiado para a área de transferência."
                sx={{ marginTop: 10 }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
            < DialogProdutosMirante setOpen={setOpen} open={open} productImageUrl={productImageUrl} id={productImageUrl.id_produto} />

        </>
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
const ButtonIcon = styled(Button)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    margin:1, 
    opacity:0.5,
    "&:hover": {
        transition: ' ease-in all 0.2s',
        opacity: '0.8',
        transform: 'scale(1.02)',
    }
}));

ProductCard2.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};
export default ProductCard2;