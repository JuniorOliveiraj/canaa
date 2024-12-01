import { Box, Button } from "@mui/material";
import Page from "../../components/Page";
import { CenterAll } from "../../Portifolio/contato/styles";
import { LoadingButton } from "@mui/lab";
import {urlWebHuckN8n} from "../../_mock/url";
import axios from "axios";
import { useState } from "react";
import Iconify from "../../components/Iconify";
export default function ButtonAtualizaNotionBanco() { 
    const [loand, setLoand]= useState(false);
    const [sucess, setSucess ] = useState(null);
    const handleSubmit = async () => {
        setLoand(true)
        axios.get(`${urlWebHuckN8n}/webhook/adicionar-gastos-mercadopago-banco`)
            .then((response) => {
                console.log(response);
                setLoand(false);
                setSucess('sucess');
            })
            .catch((error) => {
                console.log(error); 
                setSucess('error');
                setLoand(false)
            });
    }
    return (
        <Page title="Atualizar gastos | Notion">
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh'
            }}>
                

                    <LoadingButton
                        type="submit"
                        variant="contained"
                         
                        loading={false}
                        onClick={handleSubmit}
                    >Click aqui 
                    {
                        sucess &&
                        sucess === "sucess" ? <Iconify icon={'mdi:sucess-outline'} width={20} height={20} sx={{ml:1, color:"green"}}/>: sucess === "error" &&
                        <Iconify icon={'material-symbols:error'} width={20} height={20} sx={{ml:1, color:"red"}}/>
                    }
                    </LoadingButton>
                 

            </Box>
        </Page>
    )
}