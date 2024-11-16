import { Box } from "@mui/material";
import { Page } from "@react-pdf/renderer";
import BankingBalanceStatisticsNotion from "../Charts/ChartsSemana";

export default function ChartSemanas() {
    return (
        <Page title="Gastos Totais | Notion" sx={{width:"100%"}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width:"100%"
            }}>
                <BankingBalanceStatisticsNotion sx={{width:"100%"}}/>
            </Box>
        </Page>
    )
}