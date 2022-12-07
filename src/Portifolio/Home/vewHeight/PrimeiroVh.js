
import { Box, Paper, Grid, useMediaQuery } from "@mui/material";
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
const ImagensStyle = styled('img')(({ theme }) => ({
    width: '100%'

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
                        <Slide key={index.id}><Item sx={{
                            backgroundImage: ` url(${index.img})`,
                            height: "100%",
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <div className="d_flex">
                                <div className="col-md-5">
                                    <div className="text-bg">
                                        <h1>{index.title}</h1>
                                        <strong>{index.Text}</strong>
                                        <span>Landing Page 2019</span>
                                        <a href="#">Conhecer</a>
                                    </div>
                                </div>
                                <div className="col-md-7 padding_right1">
                                    <div className="text-img">
                                        <figure><ImagensStyle src={index.perfil} alt="#" /></figure>
                                        <h3>{index.id}</h3>
                                    </div>
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

