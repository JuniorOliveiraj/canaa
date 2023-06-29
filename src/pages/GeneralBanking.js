// material
import { Grid, Container, Stack } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import {
  BankingIncome,
  BankingExpenses,
  BankingContacts,
  BankingInviteFriends,
  BankingQuickTransfer,
  // BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories
} from '../components/_dashboard/general-banking';
import useMediaQuery from '@mui/material/useMediaQuery';
// ----------------------------------------------------------------------

export default function GeneralBanking() {
  const { themeStretch } = useSettings();
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <Page title="General: Banking | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <BankingIncome />
              <BankingExpenses />
            </Stack>
          </Grid>

          {/* <Grid item xs={12} md={5}>
            <BankingCurrentBalance />
          </Grid> */}
          {!matches &&<Grid item xs={12} md={5}>
              <BankingQuickTransfer />
          </Grid>}

          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              <BankingBalanceStatistics />
              <BankingExpensesCategories />
              <BankingRecentTransitions />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
             {matches&& <BankingQuickTransfer />}
              <BankingContacts />
              <BankingInviteFriends />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
