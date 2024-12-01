// src/components/VerificarSorteio.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CenterAll } from '../../Portifolio/contato/styles';
import { Box, Container } from '@mui/material';
import { Card, Typography } from '@mui/material';
import axios from 'axios';
import urlApi from '../../_mock/url';

const VerificarSorteio = () => {
    const [dados, setDados] = useState([]);
    const [visualizou, setVisualizou] = useState(true);
    const [load, setload] = useState(true);
    const { id } = useParams();
    const params = new URLSearchParams(id);
    const participanteId = parseInt(params.get('participante'));
    const sorteadoId = parseInt(params.get('sorteado'));

    useEffect(() => {
        axios.get(`${urlApi}/sorteio/visualizar?participantId=${id}`).then((response) => {
            setDados(response.data);
            console.log("Response", response.data);
        });
        console.log(dados)
    }, [participanteId, sorteadoId]);
    useEffect(() => {
        if (dados) {
            if (dados.mensagem == "Sorteio visualizado com sucesso.")
                setVisualizou(true)
            if (dados.mensagem == "Nenhum sorteio encontrado para este participante.")
                setVisualizou(false)

            setload(false)
        }
    }, [dados])





    return (
        <Container sx={{
            marginTop: 10,
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(static/mock-images/covers/cover-confete.gif)',
            backgroundSize: 'cover', // Ensures the image covers the whole container area
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        }}>
            <Card sx={{ p: 3, height: '50%' }}>
                <CenterAll style={{ height: "30%", flexWrap: 'wrap' }}>
                    <Typography variant='h4' sx={{ color: 'red' }}> Atenção você só pode ver uma vez!</Typography><br />
                </CenterAll>
                <CenterAll style={{ height: "30%", flexWrap: 'wrap' }}>
                    {
                        load ? <Typography variant='h1'>Carregando...</Typography> : visualizou ? (
                            <Box>
                                <Typography variant='p'>Seu amigo secreto é:</Typography>
                                <Typography variant='h1'>{dados.sorteado ? dados.sorteado : 'carregando...'}</Typography>
                            </Box>
                        ) : (
                            <>

                                <Typography variant='h1'>Você já viu seu amigo</Typography>
                            </>
                        )
                    }
                </CenterAll>
            </Card>
        </Container>
    );
};

export default VerificarSorteio;
