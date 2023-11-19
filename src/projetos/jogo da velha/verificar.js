// src/components/VerificarSorteio.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CenterAll } from '../../Portifolio/contato/styles';
import { Button, Container } from '@mui/material';
import { Card, Typography } from '@mui/material';
import axios from 'axios';
import urlApi from '../../_mock/url';

const VerificarSorteio = () => {
    const [dados, setDados] = useState([]);
    const { id } = useParams();
    const params = new URLSearchParams(id);
    const participanteId = parseInt(params.get('participante'));
    const sorteadoId = parseInt(params.get('sorteado'));

    useEffect(() => {
        axios.get(`${urlApi}/sorteio/verific?id=${participanteId}&sorteado=${sorteadoId}`).then((response) => {
            setDados(response.data.dados);
        });
    }, [ participanteId, sorteadoId]);

    const verificar = async () => {
        axios.get(`${urlApi}/sorteio/update?id=${participanteId}&sorteado=${sorteadoId}`).then((response) => {
            console.log(response.data.dados);
        });
    }

    const [click, setClick] = useState(false);

    const clickUp = () => {
        verificar();
        setClick(true);
    }

    return (
        <Container sx={{ marginTop: 10, height: "80vh" }}>
            <Card sx={{ p: 3, height: '100%' }}>
                <CenterAll style={{height:"100%"}}>
                    {
                        !dados[1] ? (
                            <Typography variant='h1'>Você já viu seu amigo</Typography>
                        ) : (
                            <>
                                {click && dados.length >= 2 && (
                                    <Typography variant='h3'>Seu amigo é <Typography variant='h2'>{dados[1].nome}</Typography></Typography>
                                )}
                                {!click && (
                                    <Button variant='contained' onClick={clickUp}>Clique para ver seu amigo</Button>
                                )}
                            </>
                        )
                    }
                </CenterAll>
            </Card>
        </Container>
    );
};

export default VerificarSorteio;
