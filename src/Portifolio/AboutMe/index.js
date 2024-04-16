
import Page from "../../components/Page";
import ConteinerCards from "./cardsSkils";
import { Link, Box, Container, alpha } from "@mui/material";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import { CenterAll, TextContato } from "../contato/styles";

import Iconify from "../../components/Iconify";
import Cervices from "./cervices";
import CertificacoesTimeline from "./Timeline";
import AboutHero from "../../components/_external-pages/about/AboutHero";
import ResumeAboutMe from "./resumeAboutMe";

const metaAndTags = {
    meta_title: "Junior Oliveira - sobre mim",
    meta_description:
        "Saiba mais sobre mim e oque posso te ajudar a construir sua aplicação até mesmo para cooperar juntos ",
    meta_tags: "react,, application, dashboard, junior oliveira, junior belem , belem, canaa, app react , junior react, belem junior, junior belem,"
}
export default function AboutMeIndex() {
    const matches = useMediaQuery('(min-width:700px)');
    ;

    return (
        <Page title="Sobre mim | junior oliveira" meta={metaAndTags}>


            <Box style={{ height: matches ? '100vh' : "70vh" }} >
                <AboutHero />
            </Box>
            <Box sx={{ position: 'relative', zIndex: 10, paddingTop: 10, backgroundColor: (theme) => alpha(theme.palette.background.default, 1) }}>

                <Container >

                    <ResumeAboutMe />
                    <CenterAll style={{ marginTop: 50 }}>
                        <TitleAbout>Skills</TitleAbout>
                    </CenterAll>
                    <CenterAll>
                        <TextContato>My  technical level</TextContato>
                    </CenterAll>
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
                <Container sx={{ marginTop: !matches && 2 }}>
                    <CenterAll>
                        <Link sx={{ color: (theme) => alpha(theme.palette.primary.main, 1) }} href="/contato" target="_self"><TwoTiTleVh style={{ fontSize: matches ? '51px' : '26px', width: matches ? '648px' : '200', }}>vamos trabalhar juntos <Iconify icon="mdi:arrow-right" width={matches ? 35 : 25} height={matches ? 35 : 25} /> </TwoTiTleVh></Link>
                    </CenterAll>
                </Container>
            </Box>

        </Page>
    )
}


const TwoTiTleVh = styled.h1`

  font-style: normal;
  font-weight: 600;
  // lineHeight: '72px',
`;




export const TitleAbout = styled.p`
    

    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    /* identical to box height */

    @media (max-width: 1300px) {
        font-size:30px;
      
    }
    @media (max-width: 700px) {
        font-size:25px;
        margin-top:20px
      
    }
`;




