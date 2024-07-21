import { merge } from 'lodash';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, TextField } from '@mui/material';
import urlApi from '../../_mock/url';
//

import BaseOptionChart from '../../components/chart/BaseOptionChart';
import axios from 'axios';
// ----------------------------------------------------------------------

const CHART_DATA = [

    {
        year: 'Week',
        data: [
            { name: 'Income', data: [0, 0, 0, 0, 0, 0, 0] }
        ]
    }
];

export default function BankingBalanceStatisticsNotion() {
    const [seriesData, setSeriesData] = useState('Week');
    const [chat, setChart] = useState(0);
    const handleChangeSeriesData = (event) => {
        setSeriesData(event.target.value);
    };
    useEffect(() => {
        axios.get(`${urlApi}/charts/gastos`).then((response) => {
            // console.log(response)
            //setTotal(response.data.values[0].Total);
            setChart(
                [
                    {
                        year: 'Week',
                        data: [
                            { name: 'Income', data: response.data.charts }
                        ]
                    }
                ]
            );
        });

    }, []);

    const chartOptions = merge(BaseOptionChart(), {
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab','Dom']
        },
        tooltip: {
            y: {
                formatter: (val) => `$${val}`
            }
        }
    });

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
                        {chat && chat.map((option) => (
                            <option key={option.year} value={option.year}>
                                {option.year}
                            </option>
                        ))}
                    </TextField>
                }
            />

            {chat && chat.map((item) => (
                <Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
                    {item.year === seriesData && (
                        <ReactApexChart type="bar" series={item.data} options={chartOptions} height={364} />
                    )}
                </Box>
            ))}
        </Card>
    );
}
