import { Box } from "@mui/material";
import Page from "../../components/Page"; 
import BankingIncomeNotion from "../Charts/SaldoEmConta";


export default function SaldoEmconta(){
    return(
        <Page title="Gastos Totais | Notion">
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BankingIncomeNotion/>
         
        </Box>
    </Page>

    )
}