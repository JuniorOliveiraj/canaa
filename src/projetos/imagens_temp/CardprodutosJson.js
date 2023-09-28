import { Typography, CardContent, Button, Snackbar, Box, Card,Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material';
import Iconify from '../../components/Iconify';
const CardPadrao = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.grey[999]

}));

function ProductCard({ productName, productImageUrl, amburger }) {
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
            <CardPadrao sx={{ display: "flex", cursor: "pointer" }}>
                <CardMedia
                    component="img"
                    sx={{ width: '25%', maxWidth: 151, minWidth: '10' }}
                    image={
                        productImageUrl.endsWith('.psd')
                            ? 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png'
                            : productImageUrl.startsWith('https://')
                                ? productImageUrl
                                : 'https://' + productImageUrl
                    }
                    alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column", width: '300%' }}  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            {productName}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            {productImageUrl}
                        </Typography>
                        <CardActions>
                            <Button variant="contained" color="primary" onClick={copyToClipboard}>
                                Copiar Link
                            </Button>
                            <Button >
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

                </Box>


            </CardPadrao>

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
export default ProductCard;