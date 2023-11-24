// material
import { Grid, Container, Stack } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
// components
import Page from '../../../components/Page';


import CupomBalanceStatistics from './components/CupomMirante/BankingBalanceStatistics';
import CupomRecentTransitions from './components/CupomMirante/CupomRecentTransitions';
import CupomContacts from './components/CupomMirante/CupomContacts';
// ----------------------------------------------------------------------

export default function GeneralCupomMirante() {
  const { themeStretch } = useSettings();
  return (
    <Page title="Charts: Cupoms | junior">
      <Container maxWidth={themeStretch ? false : 'xl'} sx={{marginTop:15}}>
        <Grid container spacing={3}>
          
 

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <CupomBalanceStatistics />
              <CupomRecentTransitions />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <CupomContacts />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
