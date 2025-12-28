import { Box } from "@mui/material";
import Page from "../../components/Page"; 
import { BankingExpenses } from "../../components/_dashboard/general-banking";
 

export default function ChartTotais() {
    return (
        <Page title="Gastos Totais | Notion">
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <BankingExpenses />
            </Box>
        </Page>

    )
}