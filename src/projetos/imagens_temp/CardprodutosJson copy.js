import PropTypes from 'prop-types';
import { Typography, CardContent, Button, Snackbar, Card, Box, CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Iconify from '../../components/Iconify';
import DialogProdutosMirante from './dialogIdit';
function ProductCard2({ productName, productImageUrl, amburger }) {
    const [open, setOpen] =  useState(false);


    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        setIsSnackbarOpen(true);
    };

    return (
        <>

            <Card sx={{ cursor: 'pointer', }} >
                <CardHeader
                    action={
                        <Button  sx={{ margin: 1, float: 'left' }} onClick={()=>setOpen(true)}><Iconify icon={"ic:baseline-plus"} width={20} height={20} /></Button>
                    }
                    
                />
                
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {Array.isArray(productImageUrl.url) ? (
                        productImageUrl.url.map((url, index) => (
                            <CardMedia
                                component="img"
                                sx={{ width: '25%', maxWidth: 100, minWidth: '10', margin: 1, marginBottom: 0, marginTop: 0 }}
                                height="140"
                                image={url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : url}
                                alt={`Slide ${index + 1}`}
                            />
                        ))
                    ) : (
                        <CardMedia
                            component="img"
                            sx={{ width: '50%', maxWidth: 200, minWidth: 100 }}
                            image={productImageUrl.url.endsWith('.psd') ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png' : !productImageUrl.url.startsWith('https://') ? 'https://' + productImageUrl.url : productImageUrl.url}
                            alt={productName}
                        />
                    )}
                </Box>
                <CardContent sx={{ justifyContent: 'center' }}>




                    <CardContent >
                        <Typography gutterBottom variant="p" component="div" sx={{ maxWidth: 345, justifyContent: 'center', textAlign: 'center' }}>
                            {productName}
                        </Typography>

                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        {Array.isArray(productImageUrl.url) ? (
                            productImageUrl.url.map((url, index) => (
                                <Button key={index} variant="contained" color="primary" onClick={() => handleCopyToClipboard(url)}>
                                    Copiar Link {index + 1}
                                </Button>
                            ))
                        ) : (
                            <Button variant="contained" color="primary" onClick={() => handleCopyToClipboard(productImageUrl.url)}>
                                Copiar Link
                            </Button>
                        )}
                    </CardActions>
                </CardContent>



                <Snackbar
                    open={isSnackbarOpen}
                    autoHideDuration={2000}
                    onClose={() => setIsSnackbarOpen(false)}
                    message="Link copiado para a área de transferência."
                    sx={{ marginTop: 10 }}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                />

            </Card>
            <DialogProdutosMirante setOpen={setOpen} open={open} productImageUrl={productImageUrl}id={productImageUrl.id_produto}/>

        </>
    );
}


ProductCard2.propTypes = {
    productName: PropTypes.string.isRequired,
    productImageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    amburger: PropTypes.any,
};
export default ProductCard2;