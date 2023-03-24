import Page from "../../../components/Page"
import { Grid, } from "@mui/material";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AlteracaoThema } from "../../../contexts/Themas";
import { CenterAll } from "../../../Portifolio/contato/styles";
import NoticiasAllCardSobre from "./cards";
import useMediaQuery from '@mui/material/useMediaQuery';
import NoticiasAllCardSobre2 from "./cards2";

export default function NoticiaSobre() {
    const { noticiasTodas } = useContext(AlteracaoThema);
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:700px)');
    const { id } = useParams();
    const jsonData = id && decodeURIComponent(id);
    const data = id && JSON.parse(jsonData);
    if (id ==! null) {
        navigate('/noticias', { replace: true })
        return <Navigate to="/noticias" />
       
      }


    return (
        <Page title={`${data.title}`} >

            <Grid container spacing={2}>
                <Grid xs={matches ? 8 : 12} >
                    <CenterAll style={{ flexWrap: 'wrap', padding: matches ? 10 : 40, }}>

                        <h1 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 26, lineHeight: 1.2 }}>{data.title}</h1>
                        <img style={{ width: matches ? '60%' : '100%', marginTop: 40 }} src={data.image} alt="" />
                        <h5 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{data.publishedAt}</h5>
                        <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{data.description}</p>
                        <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{data.content}</p>
                        <a style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }} href={data.url} ><b > {data.url} </b></a>
                    </CenterAll>
                    <Grid xs={12}>

                        <CenterAll style={{ flexWrap: 'wrap', padding: 0, }}>
                            <Grid xs={matches ? 7 : 12} sx={{ display: !matches && 'none', marginTop: 10 }}>
                                <CenterAll style={{ flexWrap: 'wrap', padding: 0, }}>
                                    <NoticiasAllCardSobre2 matches={matches} noticia={noticiasTodas[1]} />
                                    <br />
                                    <NoticiasAllCardSobre2 matches={matches} noticia={noticiasTodas[2]} />
                                    <br />
                                    <NoticiasAllCardSobre2 matches={matches} noticia={noticiasTodas[3]} />
                                    <br />
                                </CenterAll>
                            </Grid>

                            <Grid xs={matches ? 7 : 12} sx={{ marginTop: 10 }}>
                                <CenterAll style={{ flexWrap: 'wrap', padding: 0, }}>
                                    <NoticiasAllCardSobre2 matches={matches} noticia={noticiasTodas[5]} />
                                    <br />
                                    <NoticiasAllCardSobre2 matches={matches} noticia={noticiasTodas[6]} />
                                    <br />
                                    <NoticiasAllCardSobre2 matches={matches} noticia={noticiasTodas[7]} />
                                    <br />
                                </CenterAll>

                            </Grid>
                        </CenterAll>
                        <CenterAll style={{ flexWrap: 'wrap', padding: matches ? 10 : 40, }}>

                            <h1 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 26, lineHeight: 1.2 }}>{noticiasTodas[9].title}</h1>
                            <img style={{ width: matches ? '60%' : '100%', marginTop: 40 }} src={noticiasTodas[9].image} alt="" />
                            <h5 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiasTodas[9].publishedAt}</h5>
                            <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiasTodas[9].description}</p>
                            <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiasTodas[9].content}</p>
                            <a style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }} href={noticiasTodas[9].url} ><b > {noticiasTodas[9].url} </b></a>
                        </CenterAll>
                    </Grid>

                </Grid>
                <Grid xs={matches ? 2 : 12} >
                    <CenterAll style={{ flexWrap: 'wrap', }}>
                        <NoticiasAllCardSobre matches={matches} noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                        <br />
                        <NoticiasAllCardSobre matches={matches} noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                        <br />
                        <NoticiasAllCardSobre matches={matches} noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                        <br />
                    </CenterAll>
                </Grid>
            </Grid>

        </Page>




    )

}