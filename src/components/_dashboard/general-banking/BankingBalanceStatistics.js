import { merge } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// material
import { Card, CardHeader, Box, TextField } from '@mui/material';
import { useSelector, useDispatch } from '../../../redux/store';

// chart
import { BaseOptionChart } from '../../chart';
import { getExpensesAnalytics } from '../../../redux/slices/Analytics';

// ----------------------------------------------------------------------

export default function BankingBalanceStatistics() {
  const dispatch = useDispatch();
  const [seriesData, setSeriesData] = useState('Month');

  const { analyticsExpenses, expenses } = useSelector(
    (state) => state.Analytics
  );

  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();

    dispatch(getExpensesAnalytics(year));
  }, [dispatch]);

  // =========================
  // WEEK CHART
  // =========================
  const weeklyChart = useMemo(() => {
    if (!expenses || expenses.length === 0) return null;

    const weeks = [0, 0, 0, 0];

    expenses.forEach((exp) => {
      const day = new Date(exp.date).getDate();

      if (day <= 7) weeks[0] += exp.amount;
      else if (day <= 14) weeks[1] += exp.amount;
      else if (day <= 21) weeks[2] += exp.amount;
      else weeks[3] += exp.amount;
    });

    return {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      series: [
        {
          name: 'Expenses',
          data: weeks
        }
      ]
    };
  }, [expenses]);

  // =========================
  // MONTH / YEAR CHART
  // =========================
const monthlyChart = useMemo(() => {
  if (
    !analyticsExpenses ||
    analyticsExpenses.length === 0 ||
    !analyticsExpenses[0].monthlyBreakdown ||
    analyticsExpenses[0].monthlyBreakdown.length === 0
  ) {
    return null;
  }

  const breakdown = analyticsExpenses[0].monthlyBreakdown;

  return {
    categories: breakdown.map(
      (item) => `${item.month}/${item.year}`
    ),
    series: [
      {
        name: 'Expenses',
        data: breakdown.map((item) => item.totalAmount)
      }
    ]
  };
}, [analyticsExpenses]);

 
  // =========================
  // CHART MAP
  // =========================
  const charts = {
    Week: weeklyChart,
    Month: monthlyChart,
    Year: monthlyChart
  };

  const activeChart = charts[seriesData];

  // =========================
  // EMPTY FALLBACK (FIX SIZE)
  // =========================
  const emptyChart = {
    categories: [],
    series: [
      {
        name: 'Expenses',
        data: []
      }
    ]
  };

  // =========================
  // OPTIONS
  // =========================
  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: (activeChart || emptyChart).categories
    },
    noData: {
      text: 'No data available',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: '14px'
      }
    },
    tooltip: {
      y: {
        formatter: (val) => `R$ ${val}`
      }
    }
  });

  return (
    <Card>
      <CardHeader
        title="Balance Statistics"
        subheader="Expenses overview"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={(e) => setSeriesData(e.target.value)}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': {
                pl: 1,
                py: 0.5,
                pr: '24px !important',
                typography: 'subtitle2'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0.75,
                bgcolor: 'background.neutral'
              },
              '& .MuiNativeSelect-icon': {
                top: 4,
                right: 0,
                width: 20,
                height: 20
              }
            }}
          >
            {Object.keys(charts).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </TextField>
        }
      />

      <Box sx={{ mt: 3, mx: 3 }} dir="ltr">
        <ReactApexChart
          key={seriesData}
          type="bar"
          height={364}
          series={(activeChart || emptyChart).series}
          options={chartOptions}
        />
      </Box>
    </Card>
  );
}
