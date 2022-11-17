import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { AppTasks } from '../../sections/@dashboard/app';
// mock



// ----------------------------------------------------------------------
export default function Tarefas() {
const c = [
    { id: '1', label: 'Api java funcional' },
    { id: '2', label: 'Api fire base ' },
    { id: '3', label: 'Usuarios ' },
    { id: '4', label: 'Tarefas com OnDrop' },
    { id: '6', label: 'Script SQl' },
  ]
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            tarefas
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Todo
          </Button>
        </Stack>

        <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={c}
            />
          </Grid>

      
      </Container>
    </Page>
  );
}
