import { Box } from "@mui/material";
import { Page } from "@react-pdf/renderer";
 import { BankingBalanceStatistics } from "../../components/_dashboard/general-banking";

export default function ChartSemanas() {
    return (
        <Page title="Gastos Totais | Notion" sx={{width:"100%"}}>
            <Box sx={{
                 justifyContent: 'center',
                alignItems: 'center',
                width:"100%"
            }}>
                <BankingBalanceStatistics />
            </Box>
        </Page>
    )
}