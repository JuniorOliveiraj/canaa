import { Link, Button, Grid, } from "@mui/material";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import { CenterAll, TextContato } from "../contato/styles";
import { motion } from "framer-motion";
import { SvgAbout1 } from "./svg";
import Iconify from "../../components/Iconify";


export default function ResumeAboutMe() {
    const matches = useMediaQuery('(min-width:700px)');
    return (
        <>
            <CenterAll>
                <TitleAbout>Sobre mim </TitleAbout></CenterAll>
            <CenterAll><TextContato>Introdução</TextContato></CenterAll>
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
                                    UI/UX designer, crio páginas web UI/UX userinterface, tenho anos de experiência, Designer com criação de Branding de marcas, e Posts para Instagram e desenvolvedor Web com React js
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
        </>
    )
}




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

