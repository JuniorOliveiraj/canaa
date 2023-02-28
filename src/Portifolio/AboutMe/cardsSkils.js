
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LogoFigma,Logonode, LogoReact, LogoGuit, LogoSql, LogoHtmlAndCss} from "./svg";
import { CenterAll } from "../contato/styles";
import { useMediaQuery } from "@mui/material"
export default function ConteinerCards() {
    const matches = useMediaQuery('(min-width:700px)');
    return (
    <ContainerTes>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 0 }}>
            <Grid xs={matches ? 2: 4} sx={{margin:0, padding:0, marginTop:2}}>
                <ContainerImage1 >
                    <Cards Icone={LogoFigma} title='Figma' text='UI Design, prototyping' />
                </ContainerImage1>
            </Grid>
            <Grid xs={matches ? 2: 4} sx={{margin:0, padding:0, marginTop:2}}>
                <ContainerImage1 >
                    <Cards Icone={Logonode} title='React js' text='Application Development' />
                </ContainerImage1>
            </Grid>
            <Grid xs={matches ? 2: 4} sx={{margin:0, padding:0, marginTop:2}}>
                <ContainerImage1 >
                    <Cards Icone={LogoReact} title='Node js' text='Software Development' />
                </ContainerImage1>
            </Grid>
            <Grid xs={matches ? 2: 4} sx={{margin:0, padding:0, marginTop:2}}>
                <ContainerImage1 >
                    <Cards Icone={LogoHtmlAndCss} title='HTML 5 & CSS' text='Structural & Style Design' />
                </ContainerImage1>
            </Grid>
            <Grid xs={matches ? 2: 4} sx={{margin:0, padding:0, marginTop:2}}>
                <ContainerImage1 >
                    <Cards Icone={LogoSql} title='SQL' text='UI Design, prototyping' />
                </ContainerImage1>
            </Grid>
            <Grid xs={matches ? 2: 4} sx={{margin:0, padding:0, marginTop:2}}>
                <ContainerImage1 >
                    <Cards Icone={LogoGuit} title='git & github' text='UI Design, prototyping' />
                </ContainerImage1>
            </Grid>
        </Grid>


    </ContainerTes>
    )
}
function Cards({Icone, title, text}) {
    const matches = useMediaQuery('(min-width:700px)');
    return (
        <Card sx={{ maxWidth: 130, background: 'transparent', border: '0 ', padding: 0,  }}>
            <CardActionArea sx={{ padding: 0,  cursor:"help" , '&:hover': {backgroundColor: 'transparent'} }}>
                <ContainerImage
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                >  <CenterAll>
                        <ContainerImage1 style={{ width: '40%', margin: 0, maxHeight: 80 }}>
                           { <Icone />}
                        </ContainerImage1>
                    </CenterAll>
                </ContainerImage>
                <CardContent sx={{ margin: '-1px -1px -12px -1px', marginTop: matches ? -1 :  -3.5 }}>
                    <CenterAll style={{ flex: 'wrap', flexWrap: 'wrap' }}>
                        <TitleInitial gutterBottom variant="h5" component="div" sx={{ width: '50%', }}>
                           {title}
                        </TitleInitial>
                        <TitleAbout variant="body2" color="text.secondary" >
                           {text}
                        </TitleAbout>
                    </CenterAll>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const TitleInitial = styled.h1`
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: 'work sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    /* or 96px */

    text-align: center;
    letter-spacing: -0.04em;
    @media (max-width: 1300px) {
        font-size:14px;
      
    }
    @media (max-width: 700px) {
        font-size:14px;
      
    }
`;
export const TitleAbout = styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    /* identical to box height */
    letter-spacing: -0.03em;
    margin: 0;
    margin-top:10px;
    @media (max-width: 1300px) {
        font-size:10px;
      
    }
    @media (max-width: 700px) {
        font-size:9px;
        
      
    }
`;
const ContainerImage = styled(motion.div)`
max-width: 1120;
height: auto;
display: flex;
margin: 5%;

`;
const ContainerImage1 = styled(motion.div)`
margin-left: 1%;
height: auto;

`;

const ContainerTes = styled(motion.div)`
display: flex;
    width:75%;
    margin-top: 10%;
    @media (max-width: 700px) {
        width:100%;
        margin-top: 20%;
    }
`;

