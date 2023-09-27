import { Typography,   CardContent, Button, Snackbar, Box,  Card} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material';
const CardPadrao = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.grey[999]

}));

function ProductCard({ productName, productImageUrl }) {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(productImageUrl);
        setIsSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setIsSnackbarOpen(false);
    };

    return (
        // <Card >
        //     <CardContent>
        //         <CardMedia
        //             sx={{ height: 450 }}
        //             image={'https://' + productImageUrl}
        //             title="green iguana"
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="p" component="div" sx={{ maxWidth: 345 }}>
        //                 {productName}
        //             </Typography>
        //             <Typography variant="body2" color="text.secondary">
        //                 {productImageUrl}
        //             </Typography>
        //         </CardContent>
        //         <CardActions>
        //             <Button variant="contained" color="primary" onClick={copyToClipboard}>
        //                 Copiar Link
        //             </Button>

        //         </CardActions>
        //     </CardContent>


        //     <Snackbar
        //         open={isSnackbarOpen}
        //         autoHideDuration={2000}
        //         onClose={handleCloseSnackbar}
        //         message="Link copiado para a área de transferência."
        //         key={vertical + horizontal}
        //     />

        // </Card>


        <CardPadrao sx={{ display: "flex", cursor: "pointer" }}>

            <CardMedia
                component="img"
                sx={{ width: '25%', maxWidth: 151, minWidth: '10' }}
                image={!productImageUrl.endsWith('.psd') ? 'https://' + productImageUrl : 'https://cdn-icons-png.flaticon.com/512/5611/5611079.png'}
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
    );
}
export default ProductCard;