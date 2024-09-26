import { useState, useEffect } from "react";
import Page from "../../components/Page";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { Card, Container, styled, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { differenceInMinutes, addMinutes } from "date-fns";

const Center = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}));
const Row = styled("div")(({ theme }) => ({
    width: "100%",
    display: "block",
    justifyContent: "center",
    alignItems: "center",
}));

export default function CalculadoraDeHoras() {
    const [entrada1, setEntrada1] = useState(null);
    const [saida1, setSaida1] = useState(null);
    const [entrada2, setEntrada2] = useState(null);
    const [saida2, setSaida2] = useState(null);

    const [totalTrabalhado, setTotalTrabalhado] = useState("");
    const [sugestaoSaida2, setSugestaoSaida2] = useState(null);

    // Total de minutos de trabalho: 8 horas e 30 minutos
    const totalTrabalhoMinutos = 8 * 60 + 30;

    useEffect(() => {
        calcularHorasTrabalhadas();
        gerarSugestaoSaida();
    }, [entrada1, saida1, entrada2]);

    const calcularHorasTrabalhadas = () => {
        const periodo1 =
            entrada1 && saida1 ? differenceInMinutes(saida1, entrada1) : 0;
        const periodo2 =
            entrada2 && saida2 ? differenceInMinutes(saida2, entrada2) : 0;

        const totalMinutos = periodo1 + periodo2;
        const horas = Math.floor(totalMinutos / 60);
        const minutos = totalMinutos % 60;

        setTotalTrabalhado(`${horas}h ${minutos}m`);
    };

    const gerarSugestaoSaida = () => {
        if (entrada1 && saida1 && entrada2) {
            // Calcula os minutos já trabalhados até a entrada 2
            const periodo1 = differenceInMinutes(saida1, entrada1);
            const minutosRestantes = totalTrabalhoMinutos - periodo1;

            // Calcula a saída sugerida adicionando os minutos restantes à entrada 2
            const saidaSugerida = addMinutes(entrada2, minutosRestantes);
            setSugestaoSaida2(saidaSugerida);
        }
    };

    return (
        <Page title="Calculadora de Horas | Junior">
            <Container>
                <Center>
                    <Row>
                        <Card sx={{ minWidth: 275 }}>
                            <Center>
                                <Typography variant="h4" gutterBottom sx={{ fontSize: 14 }}>
                                    Calculadora de Horas
                                </Typography>
                            </Center>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Center sx={{ width: "100%" }}>
                                    <TimePicker
                                        sx={{ margin: 1 }}
                                        label="Entrada 1"
                                        value={entrada1}
                                        onChange={setEntrada1}
                                        ampm={false}
                                        renderInput={(params) => <TextField {...params} />}
                                        views={["hours", "minutes"]}
                                    />
                                    <TimePicker
                                        sx={{ margin: 1 }}
                                        label="Saída 1"
                                        value={saida1}
                                        onChange={setSaida1}
                                        ampm={false}
                                        renderInput={(params) => <TextField {...params} />}
                                        views={["hours", "minutes"]}
                                    />
                                </Center>

                                <Center sx={{ width: "100%" }}>
                                    <TimePicker
                                        sx={{ margin: 1 }}
                                        label="Entrada 2"
                                        value={entrada2}
                                        onChange={setEntrada2}
                                        ampm={false}
                                        renderInput={(params) => <TextField {...params} />}
                                        views={["hours", "minutes"]}
                                    />
                                    <TimePicker
                                        sx={{ margin: 1 }}
                                        label="Saída 2 (Sugerido)"
                                        value={saida2 || sugestaoSaida2}
                                        onChange={setSaida2}
                                        ampm={false}
                                        renderInput={(params) => <TextField {...params} />}
                                        views={["hours", "minutes"]}
                                    />
                                </Center>

                                {totalTrabalhado && (
                                    <Center sx={{ marginTop: 2 }}>
                                        <Typography variant="h6">
                                            Total Trabalhado: {totalTrabalhado}
                                        </Typography>
                                    </Center>
                                )}
                            </LocalizationProvider>
                        </Card>
                    </Row>
                </Center>
            </Container>
        </Page>
    );
}
