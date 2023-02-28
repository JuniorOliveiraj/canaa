
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import Iconify from "../../components/Iconify";
import { CenterAll } from "../contato/styles";
import { useMediaQuery } from "@mui/material"
export default function Cervices() {
    const matches = useMediaQuery('(min-width:700px)');
    return (

        <ContainerTes>
            <CenterAll>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 0 }}>
                    <CenterAll>
                        <Grid xs={matches ? 6 : 4} sx={{ margin: 1, padding: 0, marginTop: 2 }}>
                            <ContainerImage1 >
                                <Cards Icone="ri:layout-2-line" title='Web Developed' text='view more ' />
                            </ContainerImage1>
                        </Grid>
                        <Grid xs={matches ? 6 : 4} sx={{ margin: 1, padding: 0, marginTop: 2 }}>
                            <ContainerImage1 >
                                <Cards Icone="material-symbols:code" title='UI/UX    Designer' text='view more ' />
                            </ContainerImage1>
                        </Grid>
                        <Grid xs={matches ? 6 : 4} sx={{ margin: 1, padding: 0, marginTop: 2 }}>
                            <ContainerImage1 >
                                <Cards Icone="material-symbols:rebase-edit" title='Branding Designer' text='view more ' />
                            </ContainerImage1>
                        </Grid>
                    </CenterAll>
                </Grid>
            </CenterAll>
        </ContainerTes>

    )
}
function Cards({ Icone, title, text }) {
    const matches = useMediaQuery('(min-width:700px)');
    return (
        <Card sx={{ maxWidth: 300, background: 'transparent', border: '0 ', padding: 0, }}>
            <CardActionArea sx={{ padding: 0, cursor: "help", '&:hover': {backgroundColor: 'transparent'}, textAlign: "left" }}>
                <ContainerImage
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <CardContent >
                        <ContainerImage1 style={{ width: '50%', margin: 0, maxHeight: 80 }}>
                            <Iconify icon={Icone} width={24} height={24} />
                        </ContainerImage1>


                    </CardContent>


                </ContainerImage>
                <CardContent sx={{ margin: '-1px -1px -12px -1px', marginTop: matches ? 0: -3.5, textAlign: 'left' }}>

                    <TitleInitial gutterBottom variant="h5" component="div" sx={{ width: '50%', textAlign: 'left' }}>
                        {title}
                    </TitleInitial>
                    <TitleAbout variant="body2" color="text.secondary" >
                        {text} <Iconify icon='ph:arrow-right-duotone' width={matches ?  18 : 10} height={matches ?  18 : 10} />
                    </TitleAbout>

                </CardContent>
            </CardActionArea>
        </Card>

    )
}

const TitleInitial = styled.h1`
    display: flex;
    width: 100%;
   
    font-family: 'work sans';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 100%;
    /* or 96px */

    text-align: left;
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
    font-size: 20px;
    /* identical to box height */
    letter-spacing: -0.03em;
    margin: 0;
    margin-top:10%;
    @media (max-width: 1300px) {
        font-size:10px;
      
    }
    @media (max-width: 700px) {
        font-size:9px;
        margin-top:10px;
      
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
    width:100%;
    margin-top: 10%;
    @media (max-width: 700px) {
        width:100%;
        margin-top: 20%;
    }
`;

