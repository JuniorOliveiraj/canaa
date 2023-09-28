import { Typography, CardContent, Button, Snackbar, Card, Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Iconify from '../../components/Iconify';
import {styled} from '@mui/material';
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

                        <Button   >
                        <LinkStyle target="_blank"
                            
                            href={
                                productImageUrl.startsWith('https://')
                                ? productImageUrl
                                : 'https://' + productImageUrl
                            }><Iconify icon={"ep:top-right"} width={20} height={20} /></LinkStyle>
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
const LinkStyle = styled(Link)(({ theme }) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      opacity: 0.48,
      textDecoration: 'none'
    }
  }));
export default ProductCard2;