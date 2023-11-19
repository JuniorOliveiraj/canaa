// src/App.js
import React, { useState, useEffect } from 'react';
import AmigoSecreto from './list';
import axios from 'axios';
import urlApi from '../../_mock/url';
import { Typography } from '@mui/material';

function AppJogo() {
    const [participantes, setParticipantes] = useState([]);
    const [sorteioIds, setSorteioIds] = useState([]);

    const onSorteio = (idsEmbaralhados) => {
        setSorteioIds(idsEmbaralhados);
    };

    useEffect(() => {
        axios.get(`${urlApi}/sorteio/list`).then((response) => {
            setParticipantes(response.data.dados);
        });
    }, []);
    console.log(sorteioIds,)
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
           {
            participantes.length < 0  ? <Typography>carregando</Typography>: <AmigoSecreto participantes={participantes} onSorteio={onSorteio} />
           }

        </div>
    );
}

export default AppJogo;
