// material
import { styled } from '@mui/material';
import { Card, Stack, Typography, } from '@mui/material';
import { ChartRadialBar } from '../../charts';
import { useDispatch, useSelector } from '../../../redux/store';
import { getTotalExpenses } from '../../../redux/slices/Analytics';
import { useEffect } from 'react';
import { fCurrency } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------
const ContentStyle = styled(Card)(({ theme }) => ({
  //marginTop: -10,
  boxShadow: 'none',
  padding: theme.spacing(5),
  paddingTop: theme.spacing(10),
  color: theme.palette.common.white,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`
}));

// ----------------------------------------------------------------------

export default function BankingInviteFriends() {
  const dispatch = useDispatch();
  const { totalExpenses } = useSelector((state) => state.Analytics);
  useEffect(() => {
    async function loadData() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      await dispatch(getTotalExpenses(year, month, 0, 10));
    }
    loadData();
  }, []);
  return (
    <div>

      <ContentStyle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">
            Podera guardar <br /> esse mês
          </Typography>
          <Typography variant="h2">{fCurrency(totalExpenses && 3000 - totalExpenses)}</Typography>
        </Stack>
        <ChartRadialBar series={70} type="radialBar" subtotal={5000} height={350} />
      </ContentStyle>
    </div>
  );
}
