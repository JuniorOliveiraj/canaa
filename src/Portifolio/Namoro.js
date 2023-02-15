
import { Button, Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import Page from "../components/Page";
import { useState } from "react";
import styled from "@emotion/styled";
import '../index.css'
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
const Title = styled('h1')(({ theme }) => ({
    color: 'Black',
    fontSize: '3em',
    fontWeight: 600,
    color: '#ffffff'



}));


const items = [
    { id: 1, text: 'Oi , que vergonha haha   🫣' },
    { id: 2, text: 'queria dizer uma coisa que é muito importante para mim.' },
    { id: 3, text: 'e ai tive a ideia de fazer essa pagina .' },
    { id: 4, text: 'aaaaaaaaaa e não vai dar susto hahaha. :)' },
    { id: 5, text: 'queria dizer que ....  ' },
    { id: 6, text: ' eu gosto de voçê <3 ❤️, e  não cosigo mais nem disfarsar AFF. ' },
    { id: 7, text: ' e parece que cada dia que passa eu gosto mais e mais aaaaaaaaaaaaaaaaaaaa  !' },
    { id: 8, text: 'não consigo mais guardar só pra mim. (suspiro profundo) e precisava falar  ' },
    { id: 9, text: ' quero te fazer uma pergunta de sim ou não , eu não vou saber da sua resposta hahaha  ' },
    { id: 3, text: ' mas responde , e não pensa em clicar em não hahah ' },
];
export default function Namoro() {
    //  setNumero(Math.floor(Math.random() * numeros.length)) ;

    const [isFinished, setIsFinished] = useState(false);
 

    const handleFinish = () => {
        setIsFinished(true);
    };
    return isFinished ? (
        <Page sx={{ backgroundColor: 'black', height: '100vh', width: "100%" }}
            as={motion.button}
            initial={{ backgroundPosition: '50000px' }}
            animate={{ backgroundPosition: '0px' }}
            transition={{
                ease: "easeOut",
                duration: 1000,
                repeat: Infinity,
            }}
        >
            <Pedido  />
        </Page>
    ) : (
        <Carousel onFinish={handleFinish} />
    )
}
function Pedido() {

    const [hover, setHover] = useState(false);
    const [aceitou, setAceitou] = useState(false);
    const [contador, setContador] = useState(0);
    const ArrayEnviar = (e, contador) => {
        const Envio = {
            aceitou: 'sim',
            ClickNao: contador
        }

        console.log(Envio)

    }
    console.log(hover)
    return (
        <>
            <div style={{
                height: '10%',
            }}>
            </div>
            <BoxCenter >
                {
                    aceitou ? <>
                        <div style={{
                            width: '500px',
                            height: '550px',
                        }}>
                            <img src='https://uploads.spiritfanfiction.com/historias/capitulos/202011/rejeitados-de-uma-noite-21069982-221120201329.jpg'
                                style={{
                                    width: '450px',
                                    marginLeft: '5%'
                                }}
                            />
                            <Title  >que bom eu tambem quero </Title>
                        </div>
                    </> :
                        <>
                            <div style={{
                                width: '500px',
                                height: '550px',
                            }}>
                                <img src='https://i.pinimg.com/originals/69/41/c4/6941c472cd9f583cecfa8a6ac1bd4a51.jpg'
                                    style={{
                                        width: '450px',
                                        marginLeft: '5%'
                                    }}
                                />
                                <Title  >Quer namorar comigo ?</Title>
                            </div>
                        </>
                }
            </BoxCenter>
            <BoxCenter >
                <ButtonStyle
                    onClick={(e) => { setAceitou(true); ArrayEnviar(aceitou, contador) }}
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
                    onClick={() => { setHover(true); setContador(contador + 1) }}
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
            {
                aceitou &&
                <>
                    <div>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="primary.contrastText" p={25} position="fixed" top={0} left={0}>
                            <Fogos />
                        </Box>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="primary.contrastText" p={25} position="fixed" top={200} left={350}>
                            <Fogos />
                        </Box>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="secondary.contrastText" p={25} position="fixed" top={0} right={0}>
                            <Fogos />
                        </Box>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="secondary.contrastText" p={25} position="fixed" top={200} right={400}>
                            <Fogos />
                        </Box>

                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="secondary.contrastText" p={25} position="fixed" right={0} bottom={0}>
                            <  Svg />
                        </Box>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="primary.contrastText" p={25} position="fixed" buttom={0} left={0}>
                            <Svg />
                        </Box>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="secondary.contrastText" p={25} position="fixed" buttom={200} right={400}>
                            <Svg />
                        </Box>
                        <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} color="secondary.contrastText" p={25} position="fixed" buttom={200} left={400}>
                            <Svg />
                        </Box>

                    </div>
                </>
            }
        </>
    )
}

function Carousel({ onFinish }) {
    const [index, setIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const item = items[index];

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
    const handleNext = () => {
        const nextIndex = (index + 1) % items.length;
        setIndex(nextIndex);
        if (nextIndex === 0) {
            setIsFinished(true);
            onFinish();
        }
    };

    if (isFinished) {
        return null;
    }
    return (
        <Box sx={{

            backgroundColor: "black",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: 'center',

        }}>
            <Typography
                as={motion.h4}
                sx={{
                    width: '45%',

                }}
                variant="h2"
                color="textPrimary" key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {item.text}
            </Typography>
            <Box mt={5} >
                <Button variant="contained" color="primary" sx={{ margin: 3 }} onClick={handlePrev} disabled={index === 0}>Anterior</Button>
                <Button variant="contained" color="primary" sx={{ margin: 3 }} onClick={handleNext}>{index !== items.length - 1 ? 'Próximo' : 'Concluir'}</Button>
            </Box>
        </Box>
    );
}

function Svg() {
    return (
        <div>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                animate={{ y: "-50vh", }}
                transition={{ duration: 2 }}
                style={{ position: "absolute" }}
            >
                <motion.path
                    fill="#FF0000"
                    d="M12 21.35l-1.45-1.32C4.98 14.71 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.32.81 4.37 2.09C13.18 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-2.98 6.21-8.55 11.53L12 21.35z"
                    animate={{ scale: [1, 1.2, 1.5, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
            </motion.svg>
        </div>
    )
}

function Fogos() {
    return (
        <div className="monifireworks">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="circle">
            </div>
        </div>
    )
}