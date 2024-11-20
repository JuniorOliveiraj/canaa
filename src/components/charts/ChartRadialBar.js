import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme } from '@mui/material';
// utils
import { fNumber } from '../../utils/formatNumber';
//
import BaseOptionChart from './BaseOptionChart';
import { useDispatch, useSelector } from '../../redux/store';
import { getGastosTotal, getSaldoEmConta } from '../../redux/slices/Analytics';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function ChartRadialBar() {
  const theme = useTheme();
  const [chartData, setChartData] = useState([0, 0, 0]); // Valores padrão para evitar quebra
  const [totalInvestido, setTotalInvestido] = useState(0);



  const dispatch = useDispatch();
  const { totalGasto, saldoEmConta } = useSelector((state) => state.Analytics);

  // Carregar os dados do Redux apenas uma vez
  useEffect(() => {
    dispatch(getGastosTotal());
    dispatch(getSaldoEmConta());
  }, [dispatch]);

  // Atualizar os dados do gráfico quando os dados do Redux mudarem
  useEffect(() => {
    if (totalGasto !== undefined && saldoEmConta !== undefined) {
      const calcularFinancas = (salarioTotal, gastosTotais, totalGuardado) => {
        const guardadoEsseMes = salarioTotal - gastosTotais;
        const porcentagemGastos = ((gastosTotais / salarioTotal) * 100).toFixed(2);
        const porcentagemGuardadoEsseMes = ((guardadoEsseMes / salarioTotal) * 100).toFixed(2);
        const metaGuardar = 10000;
        const porcentagemMeta = (((totalGuardado + guardadoEsseMes) / metaGuardar) * 100).toFixed(2);
        setTotalInvestido(totalGuardado + guardadoEsseMes)

        return [
          parseFloat(porcentagemGastos),
          parseFloat(porcentagemGuardadoEsseMes),
          parseFloat(porcentagemMeta),
        ];
      };

      const resultado = calcularFinancas(2700, totalGasto, saldoEmConta);
      const total = parseFloat((2700 - totalGasto + saldoEmConta))
      setTotalInvestido(total);
   
      setChartData(resultado);
    }
  }, [totalGasto, saldoEmConta]);

  const chartOptions = merge(BaseOptionChart(), {
    labels: [ 'Gastos pessoais','Guardar','Meta de economia'],
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [
            { offset: 0, color: theme.palette.primary.light },
            { offset: 100, color: theme.palette.primary.main },
          ],
          [
            { offset: 0, color: theme.palette.warning.light },
            { offset: 100, color: theme.palette.warning.main },
          ],
          [
            { offset: 0, color: theme.palette.success.light },
            { offset: 100, color: theme.palette.success.main },
          ],
        ],
      },
    },
    legend: { 
      show: true,
      position: 'bottom', // Posiciona a legenda abaixo do gráfico
      horizontalAlign: 'center', // Centraliza a legenda
      floating: false, // Garante que a legenda não sobreponha o gráfico
      offsetY: 10, // Ajusta o deslocamento vertical
      color:'red'
     },
    plotOptions: {
      radialBar: {
        hollow: { size: '40%' },
        dataLabels: {
          value: { offsetY: 20 },
          total: {
            formatter() {
              return fNumber(totalInvestido); // Exemplo estático ou você pode ajustar conforme necessário
            },
          },
        },
      },
    },
  });

  return (
    <ReactApexChart type="radialBar" series={chartData} options={chartOptions} height={400} />
  );
}
