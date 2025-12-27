import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useEffect, useMemo } from 'react';

// material
import { useTheme } from '@mui/material';

// redux
import { useDispatch, useSelector } from '../../redux/store';

// utils
import { fNumber } from '../../utils/formatNumber';
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

export default function ChartRadialBar() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { totalExpenses, totalIncomes } = useSelector(
    (state) => state.Analytics
  );

  // 🔹 Constantes (podem virar config depois)
  const SALARIO_MENSAL = 3000;
  const META_ECONOMIA = 20000;
  const META_MENSAL = 1000;

  // =========================
  // LOAD DATA
  // =========================

  // =========================
  // CALCULO DO GRAFICO
  // =========================

  const { chartData, totalInvestido, faltaParaMeta } = useMemo(() => {
    if (
      totalExpenses === undefined ||
      totalIncomes === undefined
    ) {
      return {
        chartData: [0, 0, 0],
        totalInvestido: 0,
        faltaParaMeta: META_ECONOMIA
      };
    }

    // 1️⃣ Consumo do salário
    const gastoPercent =
      (totalExpenses / SALARIO_MENSAL) * 100;

    // 2️⃣ Economia do mês
    const saldoMes =
      SALARIO_MENSAL - totalExpenses;

    const economiaMensalPercent =
      (saldoMes / META_MENSAL) * 100;

    // 3️⃣ Progresso rumo à meta final
    const progressoMetaPercent =
      (totalIncomes / META_ECONOMIA) * 100; 

    return {
      chartData: [
        Math.min(gastoPercent, 100),                  // Consumo
        Math.max(economiaMensalPercent, 0),           // Economia mensal
        Math.min(progressoMetaPercent, 100)           // Progresso total
      ],
      totalInvestido: totalIncomes,
      faltaParaMeta: Math.max(META_ECONOMIA - totalIncomes, 0)
    };
  }, [totalExpenses, totalIncomes]);

  // =========================
  // OPTIONS
  // =========================
  const chartOptions = merge(BaseOptionChart(), {
    labels: [
      'Consumo do Salário',
      'Economia do Mês',
      'Meta da Casa Própria'
    ],
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [
            { offset: 0, color: theme.palette.error.light },
            { offset: 100, color: theme.palette.error.main }
          ],
          [
            { offset: 0, color: theme.palette.warning.light },
            { offset: 100, color: theme.palette.warning.main }
          ],
          [
            { offset: 0, color: theme.palette.success.light },
            { offset: 100, color: theme.palette.success.main }
          ]
        ]
      }
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      offsetY: 10
    },  tooltip: {
    enabled: true,
    y: {
      formatter: (val, { seriesIndex }) => {
        let valorReal = 0;

        if (seriesIndex === 0) valorReal = totalExpenses;
        if (seriesIndex === 1) valorReal = SALARIO_MENSAL - totalExpenses; // 
        if (seriesIndex === 2) valorReal = META_ECONOMIA; // totalInvestido;

        return `
          ${val.toFixed(0)}%
          <br/>
          <strong>R$ ${fNumber(Math.max(valorReal, 0))}</strong>
        `;
      }
    }
  },
    plotOptions: {
      radialBar: {
        hollow: { size: '40%' },
        dataLabels: {
          name: {
            show: true
          }, value: {
            show: false // deixa o valor só no hover
          },
          value: {
            offsetY: 20,
            formatter: (val) => `${val.toFixed(0)}%`
          },
          total: {
            formatter() {
              return fNumber(totalInvestido);
            }
          }
        }
      }
    }
  });

  return (
    <ReactApexChart
      type="radialBar"
      series={chartData}
      options={chartOptions}
      height={400}
    />
  );
}
