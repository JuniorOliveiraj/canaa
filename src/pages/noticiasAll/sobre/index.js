import Page from "../../../components/Page"
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AlteracaoThema } from "../../../contexts/Themas";
import { CenterAll } from "../../../Portifolio/contato/styles";
import NoticiasAllCardSobre from "./cards";

export default function NoticiaSobre() {
    const { noticiasTodas} = useContext(AlteracaoThema);
    const { id } = useParams();
    const jsonData = decodeURIComponent(id);
    const data = JSON.parse(jsonData);
    console.log(noticiasTodas)

    //const data = JSON.parse(jsonData);


    return (
        <Page title={`Dashboard:${data.title}`} >

            <Grid container spacing={2}>
                <Grid xs={8}>
                    <CenterAll style={{ flexWrap: 'wrap', padding: 10, }}>

                        <h1 style={{ width: '60%', textAlign: "left" }}>{data.title}</h1>
                        <img style={{ width: '60%' }} src={data.image} alt="" />
                        <h5 style={{ width: '60%', textAlign: "left" }}>{data.publishedAt}</h5>
                        <p style={{ width: '60%', textAlign: "left" }}>{data.description}</p>
                        <p style={{ width: '60%', textAlign: "left" }}>{data.content}</p>
                        <a style={{ width: '60%', textAlign: "left" }} sx={{ width: '60%', textAlign: "left" }} href={data.url} ><b > {data.url} </b></a>
                    </CenterAll>
          
                </Grid>
                <Grid xs={2} >
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