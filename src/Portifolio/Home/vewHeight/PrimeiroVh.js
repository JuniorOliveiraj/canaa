
import { Box, Paper, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { Carrousel, Slides, Slide, SlideNav } from "./Carrousel";
import "./styles.css";
import imgs from "./imagens";
//const APPBAR_DESKTOP = 10;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Work Sans',
}));
const ImagensStyle = styled('div')(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height:'80vh'

}));
export default function PrimeiroVH() {
    console.log(imgs)
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
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%', margin: 0 }}>
                                <Grid container xs={6} sx={{ margin: 5, marginLeft: 10 }}>
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
                                <Grid xs={5} >
                                    <Item><ImagensStyle
                                     sx={{
                                        backgroundImage: ` url(${index.perfil})`,
                                        
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover'
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

