import { merge } from 'lodash';
import { useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';

// material
import {
  Box,
  Card,
  Stack,
  Divider,
  CardHeader,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';

import { styled } from '@mui/material/styles';

// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getExpensesCategoryAnalytics } from '../../../redux/slices/Analytics';

// chart base
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  '& .apexcharts-legend': {
    width: 240,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      height: 160,
      width: '50%'
    }
  },
  '& .apexcharts-datalabels-group': {
    display: 'none'
  }
}));

// ----------------------------------------------------------------------

export default function BankingExpensesCategories() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const { analyticsCategoryExpenses } = useSelector((state) => state.Analytics);

  // 🔹 Busca analytics
  useEffect(() => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    dispatch(getExpensesCategoryAnalytics(year, month));
  }, [dispatch]);

  // =========================
  // CATEGORY CHART
  // =========================
  const categoryChart = useMemo(() => {
    if (
      !analyticsCategoryExpenses ||
      analyticsCategoryExpenses.length === 0 ||
      !analyticsCategoryExpenses[0].expensesByCategory ||
      analyticsCategoryExpenses[0].expensesByCategory.length === 0
    ) {
      return {
        labels: [],
        series: []
      };
    }

    const data = analyticsCategoryExpenses[0].expensesByCategory;

    return {
      labels: data.map((item) => item.categoryName),
      series: data.map((item) => item.totalAmount)
    };
  }, [analyticsCategoryExpenses]);

  // =========================
  // OPTIONS
  // =========================
  const chartOptions = merge(BaseOptionChart(), {
    labels: categoryChart.labels,
    colors: [
      theme.palette.primary.main,
      theme.palette.info.darker,
      theme.palette.chart.yellow[0],
      theme.palette.chart.blue[0],
      theme.palette.chart.red[0],
      theme.palette.chart.violet[2],
      theme.palette.chart.violet[0],
      theme.palette.success.darker,
      theme.palette.chart.green[0]
    ],
    stroke: {
      colors: [theme.palette.background.paper]
    },
    fill: { opacity: 0.8 },
    legend: {
      position: 'right',
      itemMargin: {
        horizontal: 10,
        vertical: 5
      }
    },
    noData: {
      text: 'No data available',
      align: 'center',
      verticalAlign: 'middle'
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          legend: {
            position: 'bottom',
            horizontalAlign: 'left'
          }
        }
      }
    ]
  });

  const totalCategories = categoryChart.labels.length;
  const totalAmount = categoryChart.series.reduce((acc, val) => acc + val, 0);

  return (
    <RootStyle>
      <CardHeader title="Expenses Categories" />

      <Box sx={{ my: 5 }} dir="ltr">
        <ReactApexChart
          type="polarArea"
          series={categoryChart.series}
          options={chartOptions}
          height={isMobile ? 360 : 240}
        />
      </Box>

      <Divider />

      <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>
            Categories
          </Typography>
          <Typography sx={{ typography: 'h4' }}>
            {totalCategories}
          </Typography>
        </Box>

        <Box sx={{ py: 2, width: 1, textAlign: 'center' }}>
          <Typography sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>
            Total Expenses
          </Typography>
          <Typography sx={{ typography: 'h4' }}>
            R$ {totalAmount}
          </Typography>
        </Box>
      </Stack>
    </RootStyle>
  );
}
