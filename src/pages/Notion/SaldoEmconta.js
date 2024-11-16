import { Box } from "@mui/material";
import Page from "../../components/Page";
import BankingBalanceStatisticsNotion from "../Charts/ChartsSemana";


export default function SaldoEmconta(){
    return(
        <Page title="Gastos Totais | Notion">
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BankingBalanceStatisticsNotion/>
         
        </Box>
    </Page>

    )
}