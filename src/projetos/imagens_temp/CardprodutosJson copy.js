import { Typography, CardContent, Button, Snackbar, Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
 

function ProductCard2({ productName, productImageUrl, amburger }) {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(productImageUrl);
        setIsSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setIsSnackbarOpen(false);
    };

    return (


        <>

            <Card sx={{cursor: 'pointer'}} >
                <CardContent>
                    <CardMedia
                        sx={{ height: 450 }}
                        image={!productImageUrl.endsWith('.psd') ? 'https://' + productImageUrl : 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png'}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="div" sx={{ maxWidth: 345 }}>
                            {productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {productImageUrl}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={copyToClipboard}>
                            Copiar Link
                        </Button>

                    </CardActions>
                </CardContent>


                <Snackbar
                    open={isSnackbarOpen}
                    autoHideDuration={2000}
                    onClose={handleCloseSnackbar}
                    message="Link copiado para a área de transferência."
                    key={{ vertical: 'top', horizontal: 'right' }}
                />

            </Card>

        </>
    );
}
export default ProductCard2;