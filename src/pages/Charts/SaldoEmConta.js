import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { BaseOptionChart } from '../../components/chart';
import { useState, useEffect } from 'react';
import axios from '../../auth/Axios.interceptor'; // Importando a instância configurada do Axios

// ----------------------------------------------------------------------

export default function SaldoEmConta() {
  const [total, setTotal] = useState(0);
  const [chartData, setChartData] = useState([{ data: [] }]);

  // Labels para as semanas do mês
  const chartLabels = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  alert(chartLabels)
  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    // Usando a instância do axios com a baseURL e o interceptador já configurados
    axios.get('/v1/ExpenseTransactions/Expenses', {
      params: {
        Year: year,
        Month: month,
      }
    }).then((response) => {
      // Atualiza o valor total a partir do campo 'totalAmount'
      alert("sasd")
      console.log(response)
      setTotal(response.data.totalAmount);

      // Processa a lista de despesas para criar o detalhamento semanal
      const weeklyTotals = [0, 0, 0, 0];
      
      response.data.expenses.forEach(expense => {
        const dayOfMonth = new Date(expense.date).getDate();
        const amount = expense.amount;

        if (dayOfMonth <= 7) {
          weeklyTotals[0] += amount;
        } else if (dayOfMonth <= 14) {
          weeklyTotals[1] += amount;
        } else if (dayOfMonth <= 21) {
          weeklyTotals[2] += amount;
        } else {
          weeklyTotals[3] += amount;
        }
      });
      
      // Atualiza os dados da série do gráfico
      setChartData([{ data: weeklyTotals }]);

    }).catch(error => {
      console.error("Erro ao buscar dados do saldo da conta:", error);
    });
  }, []); // Executa apenas uma vez na montagem do componente

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: chartLabels,
    xaxis: { type: 'string' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(2)} R$`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Saldo em conta2" subheader={`Total de R$ ${total.toFixed(2)}`} />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
