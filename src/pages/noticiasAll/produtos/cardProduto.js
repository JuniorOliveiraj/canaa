

import { Typography, Card, CardContent, CardMedia, Box, } from "@mui/material";
import { useState } from "react";
import Iconify from "../../../components/Iconify";
import { CenterAll } from "../../../Portifolio/contato/styles";
import AlertDialogDelet from "./alert";
const ProdutoList = ({ index, produtos, openTrue , produtosReload, setProdutosReload}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    return (
        <>
           <Card sx={{ display: "flex", cursor: "pointer" }}>
               
                <CardMedia
                    component="img"
                    sx={{ width: '25%', maxWidth: 151, minWidth: '10' }}
                    image={produtos.imagem_produto ? produtos.imagem_produto : "https://cdn-icons-png.flaticon.com/512/1311/1311423.png"}
                    alt="Live from space album cover"
                    onClick={() => { openTrue(produtos, true) }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" , width:'300%'}}  onClick={() => { openTrue(produtos, true) }}>
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
                <AlertDialogDelet open={open} setOpen={setOpen} name={produtos.name_produto} id={produtos.id}  produtosReload={produtosReload} setProdutosReload={setProdutosReload}/>
                <CenterAll  onClick={() => {handleClickOpen()}}  style={{display:"none"}}>
                    <Iconify icon="ph:x-bold" sx={{ color: '#ff000099', width: 50, height: 50 }} />
                </CenterAll>
            </Card>
        </>

    )
}

  
export default ProdutoList;

