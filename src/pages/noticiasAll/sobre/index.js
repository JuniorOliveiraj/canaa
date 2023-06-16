import Page from "../../../components/Page"
import { Grid, Box, Skeleton } from "@mui/material";
import { useParams, } from "react-router-dom";
import { AlteracaoThema } from "../../../contexts/Themas";
import { CenterAll } from "../../../Portifolio/contato/styles";
import NoticiasAllCardSobre from "./cards";
import useMediaQuery from '@mui/material/useMediaQuery';
import NoticiasAllCardSobre2 from "./cards2";
import { useEffect, useContext, useState } from "react";
import axios from 'axios'
import urlApi from "../../../_mock/url";
export default function NoticiaSobre() {
    const { noticiasTodas } = useContext(AlteracaoThema);
    const matches = useMediaQuery('(min-width:700px)');
    const { id } = useParams();
    const [noticiaLer, setnoticiaLer] = useState([])
    console.log(id)
    useEffect(() => {
        async function add() {
            try {
                const caminho = '/noticias/ler';
                const response = await axios.get(`${urlApi}${caminho}?id=${id}`);
                setnoticiaLer(response.data);
            } catch (error) {
                console.log(error);
            }
        } add()
    }, [id]);
    return (
        <Page title={`lll`} >

            <Grid container spacing={2}>
                <Grid xs={matches ? 8 : 12} >
                    {
                        noticiaLer.length && <CenterAll style={{ flexWrap: 'wrap', padding: matches ? 10 : 40, }}>
                            <h1 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 26, lineHeight: 1.2 }}>{noticiaLer[0].title}</h1>
                            <img style={{ width: matches ? '60%' : '100%', marginTop: 40, borderRadius: 10 }} src={noticiaLer[0].image} alt="" />
                            <h5 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiaLer[0].publishedAt}</h5>
                            <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiaLer[0].description}</p>
                            <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiaLer[0].content}</p>
                            <a style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }} href={noticiaLer[0].url} ><b > {noticiaLer[0].url} </b></a>
                        </CenterAll>
                    }
                    {noticiasTodas.length ? <Grid xs={12}>

                        <CenterAll style={{ flexWrap: 'wrap', padding: 0, }} >
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

                            <Grid xs={matches ? 7 : 12} sx={{ marginTop: 10, }}>
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
                        {<CenterAll style={{ flexWrap: 'wrap', padding: matches ? 10 : 40, marginTop: 50 }}>

                            <h1 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 26, lineHeight: 1.2 }}>{noticiasTodas[9].title}</h1>
                            <img style={{ width: matches ? '60%' : '100%', marginTop: 40 }} src={noticiasTodas[9].image} alt="" />
                            <h5 style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiasTodas[9].publishedAt}</h5>
                            <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiasTodas[9].description}</p>
                            <p style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }}>{noticiasTodas[9].content}</p>
                            <a style={{ width: matches ? '60%' : '100%', textAlign: "left", fontSize: !matches && 14.5, marginTop: 20 }} href={noticiasTodas[9].url} ><b > {noticiasTodas[9].url} </b></a>
                        </CenterAll>}
                    </Grid> :

                        <CenterAll>
                            <Load /> <Load /> <Load />
                        </CenterAll>
                    }

                </Grid>
                {noticiasTodas.length ? <Grid xs={matches ? 2 : 12} >
                    <CenterAll style={{ flexWrap: 'wrap', }}>
                        <Box sx={{ margin: 2 }}>
                            <NoticiasAllCardSobre matches={matches} noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                        </Box>
                        <Box sx={{ margin: 2 }}>
                            <NoticiasAllCardSobre matches={matches} noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                        </Box>
                        <Box sx={{ margin: 2 }}>
                            <NoticiasAllCardSobre matches={matches} noticia={noticiasTodas[Math.floor(Math.random() * 10)]} />
                        </Box>
                    </CenterAll>
                </Grid> :
                    <Grid xs={matches ? 2 : 12} >
                        <CenterAll>
                            <Load />
                        </CenterAll>
                    </Grid>
                }
            </Grid>

        </Page>




    )

}





export const Load = () => {
    const maches = useMediaQuery('(min-width:700px)')
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid xs={maches ? 2 : 12} sm={4} md={4}>
                <Box sx={{ width: 300 }}>
                    <Skeleton sx={{
                        height: 300
                    }} />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </Box>
            </Grid>
        </Grid>
    )
}