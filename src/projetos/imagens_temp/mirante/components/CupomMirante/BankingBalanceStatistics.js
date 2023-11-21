import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, TextField, Autocomplete, Chip, IconButton, Tooltip, Select, MenuItem, Menu } from '@mui/material';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
//
import { BaseOptionChart } from '../../../../../components/chart';
import axios from 'axios';
import urlApi from '../../../../../_mock/url';
import Iconify from '../../../../../components/Iconify';

// ----------------------------------------------------------------------

const FORMATOS = ['day', 'week', 'month'];






export default function CupomBalanceStatistics() {
  const [seriesData, setSeriesData] = useState('day');
  const [dadosChart, setDadosChart] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [tags, setTags] = useState(['duda10', 'vinicius10']); // O estado para armazenar as tags selecionadas
  const [tagsOptions, setTagsoptions] = useState(['carregando...']);
  const currentDate = dayjs();
  const [startDate, setStartDate] = useState(currentDate);
  const handleStartDateChange = (newDate) => {
    setStartDate(newDate);
  };
  const handleChangeSeriesData = (event) => {
    setSeriesData(event.target.value);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ marginRight: 2, marginTop: 1 }}>
              <Tooltip title="Filter Por data">
                <IconButton
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <Iconify icon="ic:round-filter-list" />
                </IconButton>
              </Tooltip>
            </Box>
            <BasicMenu
              open={open}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              handleStartDateChange ={handleStartDateChange}
              startDate={startDate}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={seriesData}
              onChange={handleChangeSeriesData}
              label="Age"
            >
              {dadosChart && FORMATOS.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </Select>
          </Box>
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



function BasicMenu({handleStartDateChange ,startDate, open, anchorEl, setAnchorEl }) {

 
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}></MenuItem>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <DatePicker
              label="Date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Menu>
    </div>
  );
}

