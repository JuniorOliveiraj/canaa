// src/components/Participante.js
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { CenterAll } from '../../Portifolio/contato/styles';

const Participante = ({ participantes, sorteioIds, sorteioId }) => {
    const [participanteSorteado, setParticipanteSorteado] = useState('');

    useEffect(() => {
        // Lógica para encontrar o participante com base no ID do sorteio
        const index = sorteioIds.indexOf(sorteioId);
        const participanteId = (index + 1) % participantes.length;
        const participante = participantes.find(participante => participante.id === participanteId);
        setParticipanteSorteado(participante ? participante.name : '');
    }, [participantes, sorteioIds, sorteioId]);

    return (
        <Container >
            <CenterAll>
s
                <p>Participante Sorteado:</p>
                <p>{participanteSorteado}</p>
            </CenterAll>
        </Container>
    );
};

export default Participante;
