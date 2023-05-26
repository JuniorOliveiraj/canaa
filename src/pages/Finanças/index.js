import { Grid, Container, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CardFinacas from './componets/card';
import Page from '../../components/Page';
import { useEffect, useState } from 'react';
import navCards from './leyouts/navcards';
import { useContext } from 'react';
import { authGoogleContex } from '../../autenticação';
import ListarTodosGastos from './requisições/gastos';
export default function Finanças() {
const [gastos, setGastos] =  useState([])
    const { logado, user } = useContext(authGoogleContex);
    useEffect(() => {
        const buscar = async () => {
            const response = await ListarTodosGastos(logado, user.accessToken, user.uid);

            setGastos(response);
        }
        buscar()
    }, [ logado, user]);
 
    const matchDownSM = useMediaQuery('(min-width:600px)');
    return (
        <Page title="Dashboard">
            <Container maxWidth="xl">
                <Typography variant="h6" sx={{ mb: 4 }}>
                    gastos
                </Typography>
                <Grid container spacing={2}>

                    <Grid xs={matchDownSM ? 8 : 12} sx={{
                        margin: 3
                    }}>
                        <Typography component={'h1'} variant="h1" sx={{ fontWeight: 300 }}>{gastos.valorTotal ? 'R$ ' + gastos.valorTotal: 'R$ 00,00'}</Typography>
                    </Grid>
                    <Grid xs={matchDownSM ? 4 : 12} sx={{
                        margin: 2
                    }}>
                        escolha ver oque quer
                    </Grid>
                </Grid>
                <Grid container spacing={2} marginTop={2} >
                    {navCards.map((item, index) => (
                        <CardFinacas key={item.title} matchDownSM={matchDownSM} item={item} usuario={user} gastos={gastos}/>
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}

