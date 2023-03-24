import Page from "../../../components/Page"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AlteracaoThema } from "../../../contexts/Themas";
import { CenterAll } from "../../../Portifolio/contato/styles";
import NoticiasAllCardSobre from "./cards";
import useMediaQuery from '@mui/material/useMediaQuery';
export default function NoticiaSobre() {
    const { noticiasTodas} = useContext(AlteracaoThema);
    const matches = useMediaQuery('(min-width:700px)');
    const { id } = useParams();
    const jsonData = decodeURIComponent(id);
    const data = JSON.parse(jsonData);
    console.log(noticiasTodas)

    //const data = JSON.parse(jsonData);


    return (
        <Page title={`Dashboard:${data.title}`} >

            <Grid container spacing={2}>
                <Grid xs={matches ? 8 : 12 }>
                    <CenterAll style={{ flexWrap: 'wrap', padding: 10, }}>

                        <h1 style={{ width:matches ?  '60%' : '100%', textAlign: "left", fontSize:!matches && 20 }}>{data.title}</h1>
                        <img style={{ width: matches ?  '60%' : '100%', }} src={data.image} alt="" />
                        <h5 style={{ width: matches ?  '60%' : '100%', textAlign: "left"  , fontSize:!matches && 12}}>{data.publishedAt}</h5>
                        <p style={{ width: matches ?  '60%' : '100%', textAlign: "left" , fontSize:!matches && 12 }}>{data.description}</p>
                        <p style={{ width: matches ?  '60%' : '100%', textAlign: "left"  , fontSize:!matches && 12}}>{data.content}</p>
                        <a style={{ width: matches ?  '60%' : '100%', textAlign: "left"  , fontSize:!matches && 12}}  href={data.url} ><b > {data.url} </b></a>
                    </CenterAll>
          
                </Grid>
                <Grid xs={matches ? 2 : 12} >
                    <NoticiasAllCardSobre noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                    <br />
                    <NoticiasAllCardSobre noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                    <br />
                    <NoticiasAllCardSobre noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                    <br />
                </Grid>
            </Grid>

        </Page>
    )

}