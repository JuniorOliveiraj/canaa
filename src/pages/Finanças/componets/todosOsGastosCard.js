import { Grid, Typography, Stack, Button } from '@mui/material';
import { Card, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { format } from 'date-fns'; // Importe a função format
import Iconify from '../../../components/Iconify';
export default function TodosOsGastosList({ gastos }) {
    const [gastosAll, setGastosAll] = useState([]);
    const [mostrarTodos, setMostrarTodos] = useState(false);

    useEffect(() => {
        setGastosAll(gastos && gastos.gastos);
    }, [gastos]);

    const handleClickVerTodos = () => {
        setMostrarTodos(true);
    };

    return (
        <Box sx={{ width: '100%' }}>
            {gastosAll &&
                (mostrarTodos
                    ? gastosAll
                    : gastosAll.slice(0, 5)
                ).map((item, index) => (
                    <Cards item={item} key={index} />
                ))}
            {!mostrarTodos && (
                <Box sx={{
                    alignItems: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 2
                }}><Button variant='contained' sx={{ background: 'transparent' }} onClick={handleClickVerTodos}><Iconify icon={'fe:arrow-up'} sx={{ width: 20, height: 20 }} />Ver todos</Button></Box>
            )}
        </Box>
    );
}

function Cards({ item }) {
    const formattedDate = format(new Date(item.compra_data), 'dd/MM/yyyy');
    return (
        <Grid xs={12}>
            <Box sx={{ margin: 0.2, marginTop: 1, width: '100%' }}>
                <Card sx={{ padding: 2, backgroundColor: '#f5efe8d0', color: 'black' }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Box sx={{ width: '50%' }}>
                            <Typography variant="h6" sx={{ fontSize: 14 }}>
                                {item.compra_nome}
                            </Typography>
                            <Typography variant="h7" sx={{ fontSize: 11 }}>
                                {formattedDate}
                            </Typography>
                        </Box>
                        <Stack direction="row" flexWrap="wrap-reverse" alignItems="right" justifyContent="flex-end">
                            <Typography variant="h6" sx={{ fontSize: 16, marginTop: -3 }}>
                                {'- R$' + item.compra_valor}
                            </Typography>
                        </Stack>
                    </Stack>
                </Card>
            </Box>
        </Grid>
    );
}
