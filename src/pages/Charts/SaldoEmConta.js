import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import Iconify from '../../components/Iconify';
// material
import { styled } from '@mui/material';
import { Card, Typography, Stack } from '@mui/material';
// utils
//import { fCurrency, fPercent } from '../../../utils/formatNumber';
import { fCurrency, fPercent } from '../../utils/formatNumber';
//
//import BaseOptionChart from '../../charts/BaseOptionChart';
import  BaseOptionChart  from '../../components/chart/BaseOptionChart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import urlApi from '../../_mock/url';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  position: 'relative',
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,//theme.palette.warning.lighter,
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
  color: theme.palette.primary.lighter,
  backgroundColor: theme.palette.primary.dark
}));

// ----------------------------------------------------------------------

const TOTAL = 18765;
const PERCENT =2.6;
const CHART_DATA = [{ data: [111, 136, 76, 108, 74, 54, 57, 84] }];

export default function BankingIncomeNotion() {
  const [total, setTotal] = useState(0);
  const [parcent, setParcent] = useState(0);
  const [chat, setChart] = useState(0);

  useEffect(() => {
    axios.get(`${urlApi}/charts/saldo`).then((response) => {
      
      setTotal(response.data.values[0].Total);
      setChart([{data:response.data.charts}]);
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
        <Iconify icon={'eva:diagonal-arrow-left-up-fill'} width={24} height={24} />
      </IconWrapperStyle>

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography sx={{ typography: 'subtitle2' }}>Saldo em conta</Typography>
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
