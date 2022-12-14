
import { Box, Paper, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Carrousel, Slides, Slide, SlideNav } from "./Carrousel";
import "./styles.css";
import imgs from "./imagens";
import { motion } from "framer-motion";

//const APPBAR_DESKTOP = 10;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Work Sans',
    backgroundColor: 'transparent',

}));


const ImagensStyle = styled('img')(({ theme }) => ({
    width: '100%'
}));
const FigureTextContainer = styled('div')(({ theme }) => ({
    height: '80vh',
    minHeight: '750px',
    borderRadius: '322px 0px 0px 380px',
    padding: ' 0px 0px 0px 0px',
   
}));

const FigureText = styled('figure')(({ theme }) => ({
    position: 'relative',
    margin: 0
}));

export default function PrimeiroVH() {
   // const theme = useTheme();
  //  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));



    return (
        <Box sx={{ width: '100%', margin: 0, maxHeight: '90vh' }}>
            <Carrousel bsv >
                <Slides> 
                    {imgs.map((index) => (
                        <Slide key={index.id}><Item sx={{
                          //  backgroundImage: ` url(${index.img})`,
                            height: "100%",
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',

                        }}>
                            <div className="d_flex" >
                                <div className="col-md-5">
                                    <div className="text-bg">

                                        <motion.h1 initial={{ x: -250, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>{index.title}</motion.h1>
                                        <motion.strong initial={{fontSize: '20px',lineHeight: '35px', color: '#2d2c2c',opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>{index.Text}</motion.strong>
                                        <motion.span initial={{ color: index.corTo , opacity: 0 }} animate={{opacity:1}}>{index.text2}</motion.span>
                                        <Button
                                            sx={{
                                                fontSize: '17px',
                                                backgroundColor: ' #2d2c2c',
                                                color: '#fff',
                                                padding: '13px 0px',
                                                width: '100%',
                                                maxWidth: '190px',
                                                textAlign: 'center',
                                                display: 'inline-block',
                                                borderRadius: '15px',
                                                "&:hover": {
                                                    opacity: '0.8',
                                                    transform: 'scale(1.02)',
                                                    backgroundColor: '#2bcc91',
                                                }
                                            }}
                                            as={motion.div}
                                            initial={{ x: -240, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1, boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)", }}
                                            transition={{
                                                type: 'spring',
                                                damping: 4,
                                                mass: 0.5,
                                                stiffness: 150
                                            }}
                                        >Conhecer</Button>
                                    </div>
                                </div>
                                <div className="col-md-7 padding_right1">
                                    <FigureTextContainer
                                        as={motion.div}
                                        initial={{ background: `linear-gradient(to bottom, ${index.corFrom}  100%,  ${index.corTo}  0%)` }}
                                        animate={{ background: `linear-gradient(to bottom, ${index.corFrom}  0%,  ${index.corTo}  100%)`,  }}
                                        transition={{ 
                                            type: 'spring', 
                                            damping: 4, mass: 0.5, 
                                            stiffness: 150 }}>
                                        <FigureText ><ImagensStyle src={index.perfil} alt="#" /></FigureText>
                                      
                                    </FigureTextContainer>
                                </div>
                            </div>
                        </Item>
                        </Slide>
                    ))
                    }
                </Slides>
                <SlideNav className="SlideNav" navType="bullet" />
            </Carrousel>

        </Box >

    )
}

