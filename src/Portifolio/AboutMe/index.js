
import Page from "../../components/Page";
import ConteinerCards from "./cardsSkils";
import { Link, Button, Box, Container, Grid, alpha } from "@mui/material";
import styled from "styled-components";
import MenuSuperior from "../MenuSuperior";
import { useMediaQuery } from "@mui/material";
import { CenterAll, TextContato } from "../contato/styles";
import { motion } from "framer-motion";
import { SvgAbout1 } from "./svg";
import Iconify from "../../components/Iconify";
import Cervices from "./cervices";
import CertificacoesTimeline from "./Timeline";
import FooterPortifolio from "../Home/Footer";
import LoadingScreen from "../Carregamnetopage";
import { useState,useEffect  } from "react";
export default function AboutMeIndex() {
    const matches = useMediaQuery('(min-width:700px)');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
  
      return () => clearTimeout(timer);
    }, []);
    return (
        <Page title="Sobre mim"  >
             {isLoading &&<LoadingScreen/>}
            <Box>
               {!isLoading && <MenuSuperior />}
            </Box>
            <Box style={{ height: matches ? '100vh' : "70vh" }} >
                <TitleInitial style={{ marginTop: matches ? '   10%' : '40%' }}>
                    Junior
                </TitleInitial>
                <TitleInitial style={{ color: '#E38A59' }}>
                    Oliveira
                </TitleInitial>
                <Container>
                    <CenterAll style={{ marginTop: "5%" }}>
                        <TitleAbout style={{ width: matches && "70%" }}>
                            UI/UX designer , I create web pages UI /UX
                            Ihave years of experience
                        </TitleAbout>
                    </CenterAll>
                    <Link
                        href='/contato'
                        target="_self"
                    >
                        <CenterAll style={{ marginTop: matches ? "5%" : '9%' }}> <Button variant="contained" sx={{ width: 150, height: 60 }}>Contato</Button></CenterAll>
                    </Link>
                </Container>
            </Box>
            <Container >
                <CenterAll>
                    <TitleAbout>About me</TitleAbout></CenterAll>
                <CenterAll><TextContato>My introducatio</TextContato></CenterAll>
                <Grid container spacing={2} sx={{ marginTop: 10 }}>

                    <Grid xs={matches ? 4 : 12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ContainerImage
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <ContainerImage1 style={{ width: '100%', margin: 0 }}>
                                <Img src={`/static/illustrations/Rectangle ${6}.png`}
                                    style={{ width: '100%' }}
                                />
                            </ContainerImage1>
                        </ContainerImage>
                    </Grid>
                    <Grid xs={matches ? 8 : 12}>
                        <ContainerImage
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}

                        >
                            <ContainerImage
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.3 }}
                                style={{ marginBottom: 0 }}

                            >
                                <CenterAll>
                                    <ContainerImage1 style={{ width: '100%', margin: 0 }}>
                                        <ContainerSvg >
                                            <SvgAbout1 />
                                        </ContainerSvg>
                                    </ContainerImage1>
                                    <ContainerImage1 style={{ width: '100%', margin: 0 }}>
                                        <ContainerSvg  >
                                            <SvgAbout1 />
                                        </ContainerSvg>
                                    </ContainerImage1>
                                    <ContainerImage1 style={{ width: '100%', margin: 0 }}>
                                        <ContainerSvg  >
                                            <SvgAbout1 />
                                        </ContainerSvg>
                                    </ContainerImage1>
                                </CenterAll>
                            </ContainerImage>
                        </ContainerImage>

                        <ContainerImage
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <ContainerImage
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.3 }}
                                style={{ margin: '5%', marginTop: 0, marginBottom: 0 }}

                            >
                                <ContainerImage1 style={{ width: '100%', margin: 0, }}>
                                    <ContainerSvg style={{ width: '100%', margin: 0 }}>
                                        <TextContato style={{ width: '100%', margin: 0 }}>
                                            UI/UX designer , I create web pages UI /UX userinterface ,
                                            Ihave years of experience and many clients are happy with
                                            the projects carried out.
                                        </TextContato>
                                    </ContainerSvg>
                                </ContainerImage1>

                            </ContainerImage>
                        </ContainerImage>
                        <ContainerImage
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <ContainerImage
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false, amount: 0.3 }}
                                style={{ margin: '5%', marginTop: 0 }}

                            >
                                <ContainerImage1 style={{ width: '100%', margin: 0, }}>
                                    <ContainerSvg style={{ width: '100%', margin: 0 }}>
                                        <Link
                                            href='https://drive.google.com/file/d/1pt1umuPt3l5-Mod2rANfNSbcgfD6Zg7x/view?usp=share_link'
                                            target="_blank"
                                        >

                                            <Button variant="contained"> Download cv<Iconify icon="dashicons:pdf" width={matches ? 25 : 15} height={matches ? 25 : 15} style={{ marginLeft: 10 }} /></Button>
                                        </Link>
                                    </ContainerSvg>
                                </ContainerImage1>
                            </ContainerImage>
                        </ContainerImage>
                    </Grid>
                </Grid>
                <CenterAll style={{ marginTop: 50 }}><TitleAbout>Skills</TitleAbout></CenterAll>
                <CenterAll><TextContato>My  technical level</TextContato></CenterAll>
                <CenterAll>
                    <ConteinerCards />
                </CenterAll>
                <CenterAll style={{ marginTop: 80 }}><TitleAbout>Services</TitleAbout></CenterAll>
                <CenterAll><TextContato>What i offer</TextContato></CenterAll>
                <CenterAll><Cervices /></CenterAll>
                <CenterAll style={{ marginTop: 80 }}><TitleAbout>Qualification</TitleAbout></CenterAll>
                <CenterAll><TextContato>My Personal journey</TextContato></CenterAll>
                <CenterAll style={{ marginTop: matches ? 150 : 35, marginBottom: matches ? 120 : 35, }}><TitleAbout><Iconify icon="fa-solid:graduation-cap" width={matches ? 35 : 25} height={matches ? 35 : 25} style={{ marginLeft: 10 }} />Education</TitleAbout> <TitleAbout><Iconify icon="ic:outline-work" width={matches ? 35 : 25} height={matches ? 35 : 25} style={{ marginLeft: 20 }} />Experience</TitleAbout></CenterAll>
                <CenterAll><CertificacoesTimeline /></CenterAll>

            </Container>
            <Container sx={{marginTop: !matches && 2}}>
                <CenterAll>
                    <Link sx={{ color: (theme) => alpha(theme.palette.grey[800], 1) }} href="/contato" target="_self"><TwoTiTleVh style={{ fontSize: matches ? '51px' : '26px', width: matches ? '648px' : '200', }}>vamos trabalhar juntos <Iconify icon="mdi:arrow-right" width={matches ? 35 : 25} height={matches ? 35 : 25} /> </TwoTiTleVh></Link>
                </CenterAll>
            </Container>
            <Container maxWidth="sx" sx={{ width: matches ? '80%' : '100%', marginTop: 25 }}>
                <FooterPortifolio />
            </Container>
        </Page>
    )
}


const TwoTiTleVh = styled.h1`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  // lineHeight: '72px',
  letter-spacing: -0.06em;
`;


const TitleInitial = styled.h1`
    display: flex;
    top: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: 'work sans';
    font-style: normal;
    font-weight: 700;
    font-size: 150px;
    line-height: 100%;
    /* or 96px */

    text-align: center;
    letter-spacing: -0.04em;
    @media (max-width: 1300px) {
        font-size:120px;
      
    }
    @media (max-width: 700px) {
        font-size:80px;
      
    }
`;

export const TitleAbout = styled.p`
    
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    /* identical to box height */

    letter-spacing: -0.03em;
    @media (max-width: 1300px) {
        font-size:30px;
      
    }
    @media (max-width: 700px) {
        font-size:25px;
        margin-top:20px
      
    }
`;


const ContainerImage = styled(motion.div)`
width: 95%;
max-width: 1120;
height: auto;
display: flex;
margin: 5%;

`;
const ContainerImage1 = styled(motion.div)`
margin-left: 6%;
height: auto;


`;

const Img = styled(motion.img)`
  width: 95%;
  height: auto;
  margin: 0% 3% 0% 0%;
  border-radius:10px;
`;
const ContainerSvg = styled(motion.div)`
    width: 55%;
    height: auto;;
    margin:0;
    border-radius:10px;
    @media (max-width: 700px) {
        width: 95%;
        
        }
`;

