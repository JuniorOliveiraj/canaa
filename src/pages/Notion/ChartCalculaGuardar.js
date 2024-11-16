import { Box } from "@mui/material";
import BankingInviteFriends from "../../components/_dashboard/general-banking/BankingInviteFriends";
import Page from "../../components/Page";


export default function ChartCalculaGuardar(){

    return(
        <Page title="Quanto vai guardar | Notion">
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <BankingInviteFriends/>
         
        </Box>
    </Page>
    )
}