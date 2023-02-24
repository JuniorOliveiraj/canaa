import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import { TitleContato, TextContato } from "../contato/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
//----------------------------------------------------

const Img = styled(motion.img)`
  width: 95%;
  height: auto;
  margin: 5% 0% 0% 0%;
  cursor:pointer;
  border-radius:10px;
`;
const ContainerImage = styled.div`
width: 40%;
height: auto;
`;
const ContainerText = styled.div`
   width: 100%;
  
 
 `;


const GridSubTitle = styled(motion.p)`
position: absolute;
top: 55%;
font-size:15px;
margin:0px 0px 0px 10%;
width: 87%;
font-family: 'Work Sans';
font-style: normal;
line-height: 95%;
font-weight: 400;
letter-spacing: -0.06em;


`;

const GridSubText = styled(motion.p)`
position: absolute;
top: 75%;
font-size:10px;
margin:0px 0px 0px 10%;
width: 70%;
font-family: Work Sans;
font-style: normal;
font-weight: 300;
line-height: 100%;
letter-spacing: -0.06em;
font-size:10px;


`;

const Mosaic = () => {
  const [hoverImg, setHoverImg] = useState(0);
  const matches = useMediaQuery('(min-width:700px)');
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={matches ? 4 : 12}>
          {
            matches && <ContainerText style={{ marginTop: matches && "85%" }} >
              {
                !matches && hoverImg === 0 ? <>
                  <TitleContato style={{ fontWeight: 700, width: '100%', }}>Primeiro Projeto Dashboard</TitleContato>
                  <TextContato style={{ fontSize: 15, width: '100%', }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</TextContato>
                </> : hoverImg === 1 ? <>
                  <TitleContato style={{ fontWeight: 700, width: '100%', }}>segundo Projeto Dashboard</TitleContato>
                  <TextContato style={{ fontSize: 15, width: '100%', }}>Lorem Ipsum is simply r since the 1500s, when an unknown</TextContato></>
                  : hoverImg === 2 ? <>
                    <TitleContato style={{ fontWeight: 700, width: '100%', }}>terceiro Projeto Dashboard</TitleContato>
                    <TextContato style={{ fontSize: 15, width: '100%', }}>Lorem Ipsum is simply  s been the industry's standard dummy text ever since the 1500s, when an unknown</TextContato></>
                    : hoverImg === 3 ? <>
                      <TitleContato style={{ fontWeight: 700, width: '100%', }}>quarto Projeto Dashboard</TitleContato>
                      <TextContato style={{ fontSize: 15, width: '100%', }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry ummy text ever since the 1500s, when an unknown</TextContato></>
                      : <>
                        <TitleContato style={{ fontWeight: 700, width: '100%', }}>qui nto Projeto Dashboard</TitleContato>
                        <TextContato style={{ fontSize: 15, width: '100%', }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  's standard dummy text ever since the 1500s, when an unknown</TextContato></>


              }
            </ContainerText>
          }
        </Grid>
        {matches ? <Grid xs={matches ? 8 : 14} sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: !matches && "-40%" }}>
          <ContainerImage  >
            <Img src={`/static/illustrations/Rectangle ${25}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              onMouseOver={(e) => { setHoverImg(1) }}
            />
            <Img src={`/static/illustrations/Rectangle ${26}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              onMouseOver={(e) => { setHoverImg(2) }} />
          </ContainerImage>
          <ContainerImage style={{ marginTop: '20%' }} >
            <Img src={`/static/illustrations/Rectangle ${27}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              onMouseOver={(e) => { setHoverImg(3) }} />
            <Img src={`/static/illustrations/Rectangle ${28}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              onMouseOver={(e) => { setHoverImg(4) }} />
          </ContainerImage>
        </Grid> :
          <Grid xs={matches ? 8 : 12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: !matches && "-40%" }}>
            <ContainerImage  >

              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'
              }}
              >
                <motion.div style={{ zIndex: 99999999 }}>
                  <GridSubTitle style={{ color: '#ffffff' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Img src={`/static/illustrations/Rectangle ${25}.png`} />
              </motion.section>

              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'

              }}
              >
                <motion.div style={{ zIndex: 1 }}>
                  <GridSubTitle style={{ color: '#ffffff', top: '45%' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', top: '72%' }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Img src={`/static/illustrations/Rectangle ${26}.png`} />
              </motion.section>

            </ContainerImage>
            <ContainerImage style={{ marginTop: '20%' }} >
              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'

              }}
              >
                <motion.div style={{ zIndex: 1 }}>
                  <GridSubTitle style={{ color: '#ffffff', top: '45%' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', top: '72%' }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Img src={`/static/illustrations/Rectangle ${27}.png`} />
              </motion.section>
              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'
              }}
              >
                <motion.div style={{ zIndex: 99999999 }}>
                  <GridSubTitle style={{ color: '#ffffff' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Img src={`/static/illustrations/Rectangle ${28}.png`} />
              </motion.section>

            </ContainerImage>
          </Grid>}
      </Grid>
    </Box>


  );
};
export default Mosaic;
