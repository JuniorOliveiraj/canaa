import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import Iconify from '../../Iconify';
// material
import { styled } from '@mui/material';
import { Card, Typography, Stack } from '@mui/material';
// utils
import { fCurrency, fPercent } from '../../../utils/formatNumber';
//
import BaseOptionChart from '../../charts/BaseOptionChart';
import { useEffect, useState } from 'react';
// CORREÇÃO: Importando a instância correta do Axios
import axios from '../../../auth/Axios.interceptor';
 


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  position: 'relative',
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.warning.lighter,
  '& .apexcharts-tooltip-text-y-value': {
    color: `${theme.palette.mode === 'dark' ? '#fff' : '#000'} !important`
  }
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 48,
  height: 48,
  display: 'flex',
  borderRadius: '50%',
  position: 'absolute',
  alignItems: 'center',
  top: theme.spacing(3),
  right: theme.spacing(3),
  justifyContent: 'center',
  color: theme.palette.primary.lighter,
  backgroundColor: theme.palette.primary.dark
}));

// ----------------------------------------------------------------------

// CORREÇÃO: O percentual será fixo por enquanto, até implementarmos a lógica de cálculo.
const PERCENT = 2.6;

export default function BankingIncome() {
  // CORREÇÃO: 'total' para o valor, 'chartData' para o gráfico.
  const [total, setTotal] = useState(0);
  const [chartData, setChartData] = useState([{ data: [] }]);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    axios.get('/v1/ExpenseTransactions/Expenses', {
      params: { Year: year, Month: month, Type: 1, PageIndex:0, PageSize: 100 } // Type: 1 para despesas (income)
    }).then((response) => {

      setTotal(response.data.totalAmount);

      const weeklyTotals = [0, 0, 0, 0];
      response.data.expenses.forEach(expense => {
        const dayOfMonth = new Date(expense.date).getDate();
        const amount = expense.amount;

        if (dayOfMonth <= 7) weeklyTotals[0] += amount;
        else if (dayOfMonth <= 14) weeklyTotals[1] += amount;
        else if (dayOfMonth <= 21) weeklyTotals[2] += amount;
        else weeklyTotals[3] += amount;
      });
      
      // CORREÇÃO: Usando o 'setChartData' correto.
      setChartData([{ data: weeklyTotals }]);

    }).catch(error => {
      console.error("Erro ao buscar os dados de renda:", error);
    });
  }, []);

  const chartOptions = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fCurrency(seriesName),
        title: { formatter: () => '' }
      }
    },
    fill: { gradient: { opacityFrom: 0.56, opacityTo: 0.56 } }
  });

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon={'eva:diagonal-arrow-left-up-fill'} width={24} height={24} />
      </IconWrapperStyle>

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography sx={{ typography: 'subtitle2' }}>Receitas</Typography>
        <Typography sx={{ typography: 'h3' }}>{fCurrency(total)}</Typography>
        <Stack direction="row" alignItems="center" flexWrap="wrap">
          <Iconify width={20} height={20} icon={PERCENT >= 0 ? 'gg:trending' : 'ic:outline-trending-down'} />
          <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
            {PERCENT > 0 && '+'}
            {fPercent(PERCENT)}
          </Typography>
          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;que o mês passado
          </Typography>
        </Stack>
      </Stack>

      {/* CORREÇÃO: Usando o estado 'chartData' correto */}
      <ReactApexChart type="area" series={chartData} options={chartOptions} height={120} />
    </RootStyle>
  );
}
