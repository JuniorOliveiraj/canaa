

import { Typography, Card, CardContent, CardMedia, Box, } from "@mui/material";
import { styled } from '@mui/material/styles';
const ProdutoList = ({ index, produtos, openTrue }) => {

    return (
        <>
            <CardPadrao sx={{ display: "flex", cursor:"pointer" }} onClick={()=>{openTrue(produtos, true)}}>
                <CardMedia
                    component="img"
                    sx={{ width: '25%', maxWidth: 151, minWidth: '10' }}
                    image={produtos.imagem_produto ? produtos.imagem_produto : "https://cdn-icons-png.flaticon.com/512/1311/1311423.png"}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                            {produtos.name_produto}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="div"
                        >
                            {'R$' + produtos.valor_produto}
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ marginLeft: "auto" }}>
                    {/* <Typography component="div" variant="h5">
                Nome produto
            </Typography> */}
                </Box>
            </CardPadrao>
        </>

    )
}

const CardPadrao = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.grey[999]

}));
export default ProdutoList;

