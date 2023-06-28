import { Grid, Container, Box } from "@mui/material"
import Page from "../../components/Page";
import useMediaQuery from '@mui/material/useMediaQuery';
import { TitleContato, TextContato, SubTitle1Contato  } from "./styles";
import { useState, useEffect } from "react";
import Iconify from "../../components/Iconify";
import FormContato from "./FormContato";
import MainNavbar from "../../layouts/main/MainNavbar";
import FooterPortifolio from "../Home/Footer";
import LoadingScreen from "../Carregamnetopage";
export default function Conatato() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
  
      return () => clearTimeout(timer);
    }, []);
    const matches = useMediaQuery('(min-width:700px)');
    const matchesPc1 = useMediaQuery('(min-width:1000px)');
    const matchesPc2 = useMediaQuery('(min-width:1400px)');

    return (
        <Page title="Entre em contato" sx={{ padding: 0 }} >
            {isLoading && <LoadingScreen/>}
            {!isLoading && <MainNavbar />}
            <Box marginTop={ matches ? '5%' : '20%'}>
                <Box sx={{ margin: matches ? '10px 0px  10% 0px' : '10px 0px  20% 0px', }} >
                    <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56916.509179831664!2d-48.98728590079516!3d-26.92627870222667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df24a491abf305%3A0x5e70391ecf5b681c!2sGaspar%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1676676863967!5m2!1spt-BR!2sbr" width={matches ? "80%" : '100%'} height={matches ? "350" : '250px'} style={{ filter: "grayscale(100%) invert(100%)", height: matches ? "350" : '250px' }} allowFullScreen={""} loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
                </Box   >
                <Container maxWidth="sx" sx={{
                    width: '100%',

                    padding: 0,

                }}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={!matches ? 3 : !matchesPc2 ? 9 : 15} paddingTop={0}>
                        <Grid xs={matchesPc1 ? 6 : 20} >
                            <Informações />
                        </Grid>
                        <Grid xs={matchesPc1 ? 6 : 20}  >
                            <FormContato />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth="sx" sx={{ width: matches ? '80%' : '100%', marginTop: 25 }}>
                <FooterPortifolio />
            </Container>
        </Page>
    )
}





const Informações = () => {
    const matchesPc = useMediaQuery('(min-width:1200px)');
    const matches = useMediaQuery('(min-width:700px)');
    return (
        <Box>

            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} sx={{ marginBottom: 5 }}>
                    <TitleContato>Entre Em Contato</TitleContato>
                    <TextContato>Quer começar sua próxima campanha publicitária? Talvez um novo  site? Vamos começar!</TextContato>
                    <Grid xs={6} sx={{ marginTop: 8 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                marginTop: 1,
                                padding: 0
                            }}>
                                <Iconify
                                    icon={'ic:sharp-access-time'}
                                    sx={{
                                        width: !matches ? 20 : !matchesPc ? 20 : 30,
                                        height: !matches ? 20 : !matchesPc ? 20 : 30,
                                        ml: 0,

                                    }}
                                />
                            </Box>
                            <Box sx={{ marginLeft: !matches ? 1 : 2 }}>
                                <SubTitle1Contato> HORÁRIO DE<br />  FUNCIONAMENTO</SubTitle1Contato>
                            </Box>
                        </Box>
                        <TextContato style={{ marginTop: !matches ? 5 : 10 }}>
                            Segunda-feira - sexta-<br />
                            feira:<br />
                            9h 17h
                        </TextContato>
                    </Grid>
                    <Grid xs={6} sx={{ marginTop: 8 }}>

                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                marginTop: 1,
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}>
                                <Iconify
                                    icon={'ic:sharp-access-time'}
                                    sx={{
                                        width: !matches ? 20 : !matchesPc ? 20 : 30,
                                        height: !matches ? 20 : !matchesPc ? 20 : 30,
                                        ml: 0,
                                    }}
                                />
                            </Box>
                            <Box sx={{ marginLeft: !matches ? 1 : 2 }}>
                                <SubTitle1Contato> HORÁRIO DE<br />  FUNCIONAMENTO</SubTitle1Contato>
                            </Box>

                        </Box>
                        <TextContato style={{ marginTop: !matches ? 5 : 10 }}>
                            Segunda-feira - sexta-<br />
                            feira:<br />
                            9h 17h
                        </TextContato>
                    </Grid>
                    <Grid xs={6} sx={{ marginTop: 8 }}>

                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                marginTop: 1,
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}>
                                <Iconify
                                    icon={'ic:sharp-access-time'}
                                    sx={{
                                        width: !matches ? 20 : !matchesPc ? 20 : 30,
                                        height: !matches ? 20 : !matchesPc ? 20 : 30,
                                        ml: 0,
                                    }}
                                />
                            </Box>
                            <Box sx={{ marginLeft: !matches ? 1 : 2 }}>
                                <SubTitle1Contato> HORÁRIO DE<br />  FUNCIONAMENTO</SubTitle1Contato>
                            </Box>

                        </Box>
                        <TextContato style={{ marginTop: !matches ? 5 : 10 }}>
                            Segunda-feira - sexta-<br />
                            feira:<br />
                            9h 17h
                        </TextContato>
                    </Grid>
                    <Grid xs={6} sx={{ marginTop: 8 }}>

                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                marginTop: 1,
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}>
                                <Iconify
                                    icon={'ic:sharp-access-time'}
                                    sx={{
                                        width: !matches ? 20 : !matchesPc ? 20 : 30,
                                        height: !matches ? 20 : !matchesPc ? 20 : 30,
                                        ml: 0,
                                    }}
                                />
                            </Box>
                            <Box sx={{ marginLeft: !matches ? 1 : 2 }}>
                                <SubTitle1Contato> HORÁRIO DE<br />  FUNCIONAMENTO</SubTitle1Contato>
                            </Box>

                        </Box>
                        <TextContato style={{ marginTop: !matches ? 5 : 10 }}>
                            Segunda-feira - sexta-<br />
                            feira:<br />
                            9h 17h
                        </TextContato>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}