import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, TextField, Autocomplete, Chip } from '@mui/material';
//
import { BaseOptionChart } from '../../../../../components/chart';
import axios from 'axios';
import urlApi from '../../../../../_mock/url';

// ----------------------------------------------------------------------

const FORMATOS = ['day', 'week', 'month'];






export default function CupomBalanceStatistics() {
  const [seriesData, setSeriesData] = useState('day');
  const [dadosChart, setDadosChart] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [tags, setTags] = useState(['CupomP5']); // O estado para armazenar as tags selecionadas
  const [tagsOptions, setTagsoptions] = useState();

  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };

  const chartOptions = merge(BaseOptionChart(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: timeLine ? timeLine : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`
      }
    }
  });


  useEffect(() => {
    axios.get(`${urlApi}/mirante/list/cupons/listNames`).then((response) => {
      setTagsoptions(response.data.dados);
    });
    const fatch = async () => {
      const formato = seriesData; // Substitua pelo valor desejado
      const names = tags; // Substitua pelos nomes desejados
      try {
        const response = await axios.get(`${urlApi}/mirante/list/cupons/chart01`, {
          params: {
            formato,
            names,
          },
        });
        const data = response.data;
        // Aqui você pode usar os dados recebidos como necessário
        const formattedData = [];
        formattedData.push({
          year: data.formato,
          data: data.data[0].data
        });
        setTimeLine(data.data[0].TimeLine)
        setDadosChart(formattedData);
        console.log(formattedData)
      } catch (error) {
        console.error('Erro ao fazer a requisição:', error.message);
      }
    }
    fatch()
  }, [tags, seriesData]);


  return (
    <Card>
      <CardHeader
        title="Balance Statistics"
        subheader="(+43% Income | +12% Expense) than last year"
        action={
          <TextField
            select
            fullWidth
            value={seriesData}
            SelectProps={{ native: true }}
            onChange={handleChangeSeriesData}
            sx={{
              '& fieldset': { border: '0 !important' },
              '& select': { pl: 1, py: 0.5, pr: '24px !important', typography: 'subtitle2' },
              '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'background.neutral' },
              '& .MuiNativeSelect-icon': { top: 4, right: 0, width: 20, height: 20 }
            }}
          >
            {dadosChart && FORMATOS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        }
      />


      <Box sx={{ mt: 3, mx: 2 }}>
        <Autocomplete
          multiple
          freeSolo
          value={tags}
          onChange={(event, newValue) => {
            setTags(newValue);
          }}
          onClick={() => { console.log('teste') }}
          options={tagsOptions}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => <TextField {...params} label="Tags" />}
        />
      </Box>

      {dadosChart && dadosChart.map((item) => (
        <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
          {(
            <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />
          )}
        </Box>
      ))}
    </Card>
  );
}
