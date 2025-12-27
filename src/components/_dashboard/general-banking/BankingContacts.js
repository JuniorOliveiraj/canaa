
import Iconify from '../../Iconify';
// material
import { Box, Card, Stack, Button, Avatar, Tooltip, Typography, CardHeader } from '@mui/material';
// utils
import mockData from '../../../utils/mock-data';
//
import { MIconButton } from '../../@material-extend';
import { useEffect } from 'react';

import { useDispatch, useSelector } from '../../../redux/store';
import { getExpenseCategories } from '../../../redux/slices/Analytics';
// ----------------------------------------------------------------------

 
// ----------------------------------------------------------------------

export default function BankingCategories() {

  const dispatch = useDispatch();


  const { expenseCategories, } = useSelector(
    (state) => state.Analytics
  );
  useEffect(() => {
    async function loadData() {
      await dispatch(getExpenseCategories());
    }
    loadData();
    // Load contacts from API if needed
  }, []);
   return (
    <Card>
      <CardHeader
        title="Categories"
        subheader={`You have ${expenseCategories.length} categories`}
        action={
          <Tooltip title="Add Contact">
            <MIconButton color="primary" size="large">
              <Iconify icon="ic:outline-plus" width={20} height={20} />
            </MIconButton>
          </Tooltip>
        }
      />
      <Stack spacing={3} sx={{ p: 3 }}>
        {expenseCategories.map((contact) => (
          <Stack direction="row" alignItems="center" key={contact.id} >
            <Iconify
              icon={contact.type === 1 ? 'eva:diagonal-arrow-left-down-fill' : 'eva:diagonal-arrow-right-up-fill'}
              width={25}
              height={25}
              color={contact.type === 1 ? `red` : `green`}
            />            <Box sx={{ flexGrow: 1, ml: 2, minWidth: 100 }}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }} noWrap>
                {contact.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                {contact.type === 1 ? 'Expense' : '<Income></Income>'}
              </Typography>
            </Box>

            <Tooltip title="Quick Transfer">
              <MIconButton size="small">
                <Iconify icon="mdi:flash" width={22} height={22} />
              </MIconButton>
            </Tooltip>
          </Stack>
        ))}

        <Button variant="outlined" size="large" color="inherit">
          View All
        </Button>
      </Stack>
    </Card>
  );
}
