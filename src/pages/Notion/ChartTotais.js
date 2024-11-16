import { Box } from "@mui/material";
import Page from "../../components/Page"; 
import BankingExpensesNotion from "../Charts/GastosTotais";


export default function ChartTotais() {
    return (
        <Page title="Gastos Totais | Notion">
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <BankingExpensesNotion />
            </Box>
        </Page>

    )
}