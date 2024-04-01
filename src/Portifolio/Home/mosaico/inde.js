import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Grid, Box } from "@mui/material";
import { TitleContato, TextContato } from "../../contato/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from "react-router-dom";
//----------------------------------------------------
const Img = styled(motion.img)`
  width: 95%;
  height: auto;
  margin: 5% 0% 0% 0%;
  cursor:pointer;
  border-radius:10px;
`;
const ContainerImage = styled(motion.div)`
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
font-style: normal;
line-height: 95%;
font-weight: 400;
`;

const GridSubText = styled(motion.p)`
position: absolute;
top: 75%;
font-size:10px;
margin:0px 0px 0px 10%;
width: 70%;
font-style: normal;
font-weight: 300;
line-height: 100%;
font-size:10px;
`;

const Mosaic = () => {
  const [hoverImg, setHoverImg] = useState(0);
  const matches = useMediaQuery('(min-width:700px)');
  const Yvariants = {
    offscreen: {
      translateY: "70%"
    },
    onscreen: {
      translateY: "0%",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={matches ? 4 : 12}>
          {
            matches && <ContainerText style={{ marginTop: matches && "100%" }} >
              <Texts hoverImg={hoverImg} />
            </ContainerText>
          }
        </Grid>
        {matches ? <Grid xs={matches ? 8 : 14} sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: !matches && "-40%" }}>
          <ContainerImage
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
          >
              <Link to='/dashboard/app'>
            <Img src={`/static/illustrations/Rectangle ${25}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              variants={Yvariants}
              onMouseOver={(e) => { setHoverImg(0) }}
            />
              </Link>
            <Img src={`/static/illustrations/Rectangle ${24}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              variants={Yvariants}
              onMouseOver={(e) => { setHoverImg(1) }} />
          </ContainerImage>
          <ContainerImage style={{ marginTop: '20%' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}>
               <Link to='/projetos/velha'>
            <Img src={`/static/illustrations/Rectangle ${27}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              variants={Yvariants}
              onMouseOver={(e) => { setHoverImg(2) }} />
               </Link>
              <Link to='/noticias'>
              <Img src={`/static/illustrations/Rectangle ${29}.png`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              variants={Yvariants}
              onMouseOver={(e) => { setHoverImg(3) }} />
              </Link>
          </ContainerImage>
        </Grid> :
          <Grid xs={matches ? 8 : 12} sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: !matches && "-40%" }}>
            <ContainerImage
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'
              }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                variants={Yvariants}
                onMouseOver={(e) => { setHoverImg(3) }}
              >
                <motion.div style={{ zIndex: 99999999 }}>
                  <GridSubTitle style={{ color: '#ffffff' }}
                  >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Link to='/dashboard/app'>
                <Img src={`/static/illustrations/Rectangle ${25}.png`} />
                </Link>
              </motion.section>
              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'
              }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                variants={Yvariants}
                onMouseOver={(e) => { setHoverImg(3) }}
              >
                <motion.div style={{ zIndex: 1 }}>
                  <GridSubTitle style={{ color: '#ffffff', top: '45%' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', top: '72%' }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Img src={`/static/illustrations/Rectangle ${26}.png`} />
              </motion.section>
            </ContainerImage >
            <ContainerImage style={{ marginTop: '20%' }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'
              }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1 }}
                variants={Yvariants}
                onMouseOver={(e) => { setHoverImg(3) }}
              >
                <motion.div style={{ zIndex: 1 }}>
                  <GridSubTitle style={{ color: '#ffffff', top: '45%' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', top: '72%' }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
                <Link to='/projetos/velha'>
                <Img src={`/static/illustrations/Rectangle ${27}.png`} />
                </Link>
              </motion.section>
              <motion.section style={{
                position: "relative",
                top: '10%',
                width: '100%',
                height: '100%'
              }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 1 }}
                variants={Yvariants}
                onMouseOver={(e) => { setHoverImg(3) }}
              >
                <motion.div style={{ zIndex: 99999999 }}>
                  <GridSubTitle style={{ color: '#ffffff' }}   >Primeiro Projeto Dashboard </GridSubTitle>
                  <GridSubText style={{ color: '#ffffff', }}   > Lorem Ipsum is simply r since the 1500s, when an </GridSubText>
                </motion.div>
               <Link to='/noticias'>
               <Img src={`/static/illustrations/Rectangle ${28}.png`} />
               </Link>
              </motion.section>
            </ContainerImage>
          </Grid>}
      </Grid>
    </Box>
  );
};
export default Mosaic;


function Texts({ hoverImg }) {
  const descricao = [{
    title: 'Projeto de uma Dashboard',
    text: 'Dashboard funcionando com uma api restful escrita em Node.js e font-and em react com biblioteca MUI  '
  }, {
    title: 'Tenha calma estou criando um projeto incrivel',
    text: 'Carregando..'
  }, {
    title: 'jogo da velha ',
    text: 'jogo da velha com um historico de jogadas '
  }, {
    title: 'site de noticias newsletter',
    text: ' Veja as últimas notícias em tempo real e fique a vontade de salvar as noticias para ler a vontade :) '
  }]
  return (
    <>
      <TitleContato style={{ fontWeight: 700, width: '100%', }}
      >{descricao[hoverImg].title}</TitleContato>
      <TextContato style={{ fontSize: 15, width: '100%', }}
      >{descricao[hoverImg].text}</TextContato>

    </>
  )
}