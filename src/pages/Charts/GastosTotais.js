import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import Iconify from '../../components/Iconify';
// material
import { styled, useTheme } from '@mui/material';
import { Card, Typography, Stack } from '@mui/material';
// utils
import { fCurrency, fPercent } from '../../utils/formatNumber';
import urlApi from '../../_mock/url';
//
 
import  BaseOptionChart  from '../../components/chart/BaseOptionChart';
import { useEffect, useState } from 'react';
import axios from 'axios';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  position: 'relative',
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.error.lighter,
  '& .apexcharts-tooltip-text-y-value': {
    color: `${theme.palette.mode === 'dark' ? '#fff':"#000"} !important`
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
  color: theme.palette.warning.lighter,
  backgroundColor: theme.palette.error.dark
}));

// ----------------------------------------------------------------------

//const TOTAL = 8938;
const PERCENT = -0.5;
//const CHART_DATA = [{ data: [76, 20, 84, 135, 56, 134, 122, 49] }];

export default function BankingExpensesNotion() {
  const theme = useTheme();
  const [total, setTotal] = useState(0); 
  const [chat, setChart] = useState(0);


  useEffect(() => {
    axios.get(`${urlApi}/charts/gastos`).then((response) => {
     console.log(response.data.charts)
      setTotal(response.data.values[0].Total);
      setChart(response.data.charts);
    });
  }, []);
  const chartOptions = merge(BaseOptionChart(), {
    colors: [theme.palette.error.main],
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
        title: {
          formatter: () => ''
        }
      }
    },
    fill: { gradient: { opacityFrom: 0.56, opacityTo: 0.56 } }
  });

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon={'eva:diagonal-arrow-right-up-fill'} width={24} height={24} />
      </IconWrapperStyle>

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography sx={{ typography: 'subtitle2' }}>Total gasto</Typography>
        <Typography sx={{ typography: 'h3' }}>{fCurrency(total)}</Typography>
        <Stack direction="row" alignItems="center" flexWrap="wrap">
          <Iconify width={20} height={20} icon={PERCENT >= 0 ? 'gg:trending' : 'ic:outline-trending-down'} />
          <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
            {PERCENT > 0 && '+'}
            {fPercent(PERCENT)}
          </Typography>
          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;than last month
          </Typography>
        </Stack>
      </Stack>

      <ReactApexChart type="area" series={chat} options={chartOptions} height={120} />
    </RootStyle>
  );
}
