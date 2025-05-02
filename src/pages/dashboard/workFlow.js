// material
import { Container, Card, Grid, CardHeader, Box, Typography, LinearProgress, Button } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { useTheme } from '@mui/material/styles';
// ----------------------------------------------------------------------
import { useContext, useEffect, useState } from 'react';
import { authGoogleContex } from '../../autenticação';
import axios from 'axios';

const URLAPI = 'http://local.juniorbelem.com:3001';
export default function WorkFlowDash() {
    const { themeStretch } = useSettings();
    const { accountUser } = useContext(authGoogleContex);
    const [tarefas, setTarefas] = useState(null);
    const [progressoTarefas, setProgressoTarefas] = useState({});
    const [tokenAuth, setTokenAuth] = useState('');

    const user = accountUser[0];

    // Faz login e busca tarefas
    useEffect(() => {
        axios.post(`http://192.168.3.18:5001/v1/Auth/login`, {
            email: user.email,
            senha: user.senha,
        }, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.data.token !== undefined) {
                    setTokenAuth(response.data.token);
                    buscarTarefas(response.data.token);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [user]);

    // Buscar todas as tarefas
    const buscarTarefas = (token) => {
        axios.get(`${URLAPI}/v1/Tarefas/Todas`, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                setTarefas(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };




    return (
        <Page title={`WorkFlow | Junior`}>
            <Container maxWidth={themeStretch ? false : 'xl'}>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Worflos Dashboard
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={8}>
                        <Card>
                            <CardHeader title={"Tarefas em execução"} subheader={"Todas as tarefas "} />
                            <Box sx={{ p: 2, pb: 1 }} dir="ltr">
                                {tarefas && tarefas.length > 0 ? tarefas.map((item, index) => (
                                    <LoadingCard
                                        key={index}
                                        titulo={item.CATEGORIA_NOME}
                                        guid={item.GUID}
                                        token={tokenAuth} // Aqui está a correção!
                                    />
                                )) : (
                                    <Typography variant="body2" color="text.secondary">
                                        Nenhuma tarefa encontrada
                                    </Typography>
                                )}

                            </Box>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader title={"Concluidas"} subheader={"Todas as tarefas que já foram concluídas"} />
                            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                                {/* Aqui você pode adicionar um filtro para mostrar apenas tarefas concluídas */}
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
}
// LoadingCard.js (separado ou embutido no mesmo arquivo)

function LoadingCard({ titulo, guid, token }) {
    const theme = useTheme();
    const { themeMode } = useSettings();
    const [progresso, setProgresso] = useState(0);

    useEffect(() => {
        if (!token || !guid) return;

        const interval = setInterval(() => {
            axios.get(`${URLAPI}/progress/${guid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    const { progress, status } = response.data;
                    setProgresso(progress);

                    if (status === "Completo") {
                        clearInterval(interval);
                    }
                })
                .catch(error => {
                    console.error(`Erro ao buscar progresso da tarefa ${guid}:`, error);
                });
        }, 5000);

        return () => clearInterval(interval);
    }, [token, guid]);

    return (
        <Card sx={{
            bgcolor: themeMode === "dark" ? theme.palette.grey[800] : theme.palette.grey[200],
            borderRadius: 2,
            margin: 2
        }}>
            <CardHeader
                title={titulo}
                titleTypographyProps={{ fontWeight: 'bold', color: theme.palette.text.primary }}
                action={
                    <Button
                        startIcon={<Iconify icon={"mdi:access-time"} />}
                        sx={{
                            color: theme.palette.primary.light,
                            border: '1px solid #3f3f46',
                            textTransform: 'none',
                            borderRadius: '8px',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            padding: '4px 12px',
                            backgroundColor: '#2e2b35',
                            '&:hover': {
                                backgroundColor: '#3a3744',
                            }
                        }}
                    >
                        Wait
                    </Button>
                }
            />
            <Box sx={{ px: 3, pb: 3 }}>
                <Typography variant="body2" color={theme.palette.primary.light} gutterBottom>
                    Progresso: {progresso}%
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={progresso}
                    sx={{
                        height: 6,
                        borderRadius: 3,
                        '& .MuiLinearProgress-bar': {
                            backgroundColor: theme.palette.primary.main,
                        }
                    }}
                />
            </Box>
        </Card>
    );
}
