
import { Button, Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import Page from "../components/Page";
import { useState } from "react";
import styled from "@emotion/styled";
const ButtonStyle = styled(Button)(({ theme }) => ({

    fontSize: '17px',
    cursor: "pointer",
    color: '#fff',
    padding: '13px 0px',
    width: '100%',
    maxWidth: '190px',
    textAlign: 'center',
    display: 'inline-block',
    borderRadius: '15px',
    margin: 20


}));
const BoxCenter = styled(Box)(({ theme }) => ({
    height: '100hv',
    width: ' 100%',

    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flex: 'wrap',
    justifyContent: 'center',
    


}));
const Title = styled(Typography)(({ theme }) => ({
    color: 'Black',
    fontSize: '3em',
    fontWeight: 600


}));

export default function Namoro() {
    const [hover, setHover] = useState(false)
    console.log(hover)
    //  setNumero(Math.floor(Math.random() * numeros.length)) ;
    return (
        <Page sx={{ backgroundImage: 'url(https://img.freepik.com/vetores-gratis/borda-em-forma-de-coracao-de-linha-continua-com-coracao-de-papel-realista_333792-28.jpg?w=1380&t=st=1676419424~exp=1676420024~hmac=a939c7f0eeb6d19063986cdc9eb00de253da52a650604d3547467132015dac1e)', height: '100vh', width: "100%" }}
            as={motion.button}

            initial={{ backgroundPosition: '50000px' }}
            animate={{ backgroundPosition: '0px' }}
            transition={{
                ease: "easeOut",
                duration: 1000,
                repeat: Infinity,



            }}

        >
            <div style={{
                height: '10%',
            }}>

            </div>
            <BoxCenter >
                <div style={{
                    backgroundColor: '#f0e6ca',
                    width: '500px',
                    height: '500px',

                }}>
                    <img src='https://i.pinimg.com/564x/97/f3/2c/97f32cef20fc55fadf863b483ed16550.jpg'
                        style={{
                            width: '300px',
                            marginLeft: '20%'

                        }}
                    />
                    <Title component={'h1'} >Quer namorar comigo ?</Title>
                </div>
            </BoxCenter>

            <BoxCenter >
                <ButtonStyle
                    onClick={() => { setHover(true) }}
                   
                    variant="contained"
                    as={motion.button}
                    initial={{ x: -240, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", }}
                    transition={{
                        type: 'spring',
                        damping: 4,
                        mass: 0.5,
                        stiffness: 150
                    }}

                >Sim</ButtonStyle>
                <ButtonStyle
                    onClick={() => { setHover(true) }}
                    
                    variant="contained"
                    as={motion.button}
                    initial={{ x: -240, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", }}
                    transition={{
                        type: 'spring',
                        damping: 4,
                        mass: 0.5,
                        stiffness: 150
                    }}
                    whileHover={{ scale: 0.8, x: hover ? 500 : 200, }}
                >Não</ButtonStyle>

            </BoxCenter>
        </Page>

    )
}