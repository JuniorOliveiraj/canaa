
import { Box ,Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { Carrousel, Slides, Slide, SlideNav } from "./Carrousel";
import "./styles.css";
import imgs from "./imagens";
const APPBAR_DESKTOP = 10;
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: `calc(10em - ${APPBAR_DESKTOP + 1}px)`,
    fontWeight: 700,
    fontFamily: 'Work Sans',
    letterSpacing: -5,
    lineHeight: 1,



}));

export default function PrimeiroVH() {
    console.log(imgs)
    return (
        <Box sx={{ width: '100%', margin: 0 ,maxHeight:'90vh'}}>
            <Carrousel bsv>
                <Slides>
                    {imgs.map((index) =>(
                            <Slide key={index.text}><Item sx={{
                              
                                backgroundImage: ` url(${index.img})`,

                                /* Full height */
                                height: "100%",
                              
                                /* Center and scale the image nicely */
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>{index.Text}</Item></Slide>
                        ))
                    }
                </Slides>
                <SlideNav className="SlideNav" navType="bullet" />
            </Carrousel>
        </Box>

    )
}