// src/components/AmigoSecreto.js
import React, { useState } from 'react';
import { Card, Container,Button, styled } from '@mui/material';
import Iconify from '../../components/Iconify';


const ButtonIcon = styled(Button)(({ theme }) => ({
    animation: ' snowman 160ms alternate infinite ease-in-out',
    margin: 1,
    opacity: 0.5,
    "&:hover": {
        transition: ' ease-in all 0.2s',
        opacity: '0.8',
        transform: 'scale(1.02)',
    }
}));
const AmigoSecreto = ({ participantes, onSorteio }) => {

    const [sorteioId, setSorteioId] = useState(1);
    const [linksParticipantes, setLinksParticipantes] = useState([]);

    const sortearParticipantes = () => {
        // Cria uma cópia dos IDs dos participantes
        const idsEmbaralhados = [...participantes.map(participante => participante.id)];

        // Garante que cada participante não seja sorteado consigo mesmo
        for (let i = 0; i < idsEmbaralhados.length; i++) {
            let sorteadoIndex = i;
            while (sorteadoIndex === i) {
                sorteadoIndex = Math.floor(Math.random() * idsEmbaralhados.length);
            }
            // Troca os valores na posição i e sorteadoIndex
            [idsEmbaralhados[i], idsEmbaralhados[sorteadoIndex]] = [idsEmbaralhados[sorteadoIndex], idsEmbaralhados[i]];
        }

        // Atualiza a lista de IDs do sorteio
        onSorteio(idsEmbaralhados);

        // Gera links para cada participante
        const links = participantes.map(participante => {
            const sorteadoId = idsEmbaralhados[participante.id - 1];
            return {
                id: participante.id,
                nome: participante.nome,
                link: `https://juniorbelem.com/sorteio/verificar/id=${sorteioId}&participante=${participante.id}&sorteado=${sorteadoId}`,
            };
        });


        // Atualiza a lista de links dos participantes
        setLinksParticipantes(links);

        // Incrementa o ID do sorteio
        setSorteioId(sorteioId + 1);
    };
    console.log(participantes)
    const handleCopyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
    };
    return (
        <Container>
            <p>Compartilhe este link para o sorteio:</p>
            <p>{`https://juniorbelem.com/sorteio?id=${sorteioId}`}</p>
            <button onClick={sortearParticipantes}>Sortear Participantes</button>

            <p>Links dos Participantes:</p>
            <ul>
                {linksParticipantes.map(link => {
                    return (
                        <Card sx={{ margin: 2 , padding:1}}>

                            <li key={link.id}>
                                {`${link.nome}: `}
                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                    {link.link}
                                </a>
                                <ButtonIcon color="primary" variant='contained'  onClick={() => handleCopyToClipboard(link.link)}   >
                                    <Iconify width={20} height={20} icon={'solar:copy-bold-duotone'} />
                                </ButtonIcon>
                            </li>
                        </Card>
                    )

                })}
            </ul>
        </Container>
    );
};

export default AmigoSecreto;
