
import { Box, Paper, Grid , useMediaQuery} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { Carrousel, Slides, Slide, SlideNav } from "./Carrousel";
import "./styles.css";
import imgs from "./imagens";
import { useTheme } from '@mui/material/styles';

//const APPBAR_DESKTOP = 10;

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Work Sans',
    backgroundColor: 'transparent',

}));
const ImagensStyle = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: `85vh`,
    backgroundColor: 'transparent',

}));

export default function PrimeiroVH() {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    console.log(matchDownSM)
    return (
        <Box sx={{ width: '100%', margin: 0, maxHeight: '90vh' }}>
            <Carrousel bsv>
                <Slides>
                    {imgs.map((index) => (
                        <Slide key={index.text}><Item sx={{
                            backgroundImage: ` url(${index.img})`,
                            height: "100%",
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <Grid
                                container
                                delay={1000}
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 25 }}
                                sx={{
                                    width: '100%',
                                    margin: 0,
                                        alignItems: 'right',
                                        display: 'flex',
                                        textAlign: 'right',
                                        justifyContent: 'right',
                                }}

                            >
                                <Grid  xs={5} sx={{
                                    margin: 5, padding: 4,
                                    alignItems: 'center',
                                    display: 'flex',
                                    textAlign: 'center',
                                    justifyContent: 'center',
                                    
                                }}>
                                    <div className="col-md-6">
                                        <div className="slider_item-detail">
                                            <div>
                                                <h1>
                                                    {index.title}
                                                </h1>
                                                <p>
                                                    {index.Text}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={5}
                                    sx={{
                                        padding: 0, margin: 0,
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        justifyContent: 'center',
                                        width:'100%'
                                        
                                    }}>
                                    <Item><ImagensStyle
                                        sx={{
                                            minWidth: '200px',
                                            maxWidth: '700px',
                                            minHeight: '500px',
                                            backgroundImage: ` url(${index.perfil})`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            width:'100%',
                                           
                                        }}

                                    /></Item>
                                </Grid>
                            </Grid>
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

