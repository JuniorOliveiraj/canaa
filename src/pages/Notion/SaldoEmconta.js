import { Box } from "@mui/material";
import Page from "../../components/Page"; 
import { BankingIncome } from "../../components/_dashboard/general-banking";
 

export default function SaldoEmconta(){
    return(
        <Page title="Gastos Totais | Notion">
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BankingIncome/>
         
        </Box>
    </Page>

    )
}