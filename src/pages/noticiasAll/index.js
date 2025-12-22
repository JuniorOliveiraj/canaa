// material
import {
  Grid,
  Container,
  Stack,
  Typography,
  OutlinedInput,
  InputAdornment,
  Box,
  Skeleton,
  Pagination,
  Tab
} from '@mui/material';
import axios from 'axios';
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { styled } from '@mui/material/styles';
// components
import { useContext } from 'react';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// mock
import { AlteracaoThema } from '../../contexts/Themas';
import { BlogPostsSort, } from '../../sections/@dashboard/blog';
// ----------------------------------------------------------------------
import { useState, useEffect } from 'react';
import NoticiasAllCard from './NoticiasCard';
import urlApi from '../../_mock/url';
import { useMediaQuery } from '@mui/material';
import listarNoticias from './requisicoes/buscarNoticias';
import { authGoogleContex } from '../../autenticação';
import { useNavigate,Navigate } from 'react-router-dom';
const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];


// ----------------------------------------------------------------------
const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));
const PAGE_SIZE = 15; // Número de notícias por página
export default function NoticiasALL() {
  const { isLoading, onFilterName, setOnFilterName, setIsLoading, debounce } = useContext(AlteracaoThema);
  const { signed } = useContext(authGoogleContex);
  const [noticiasPersonalizadas, setNoticiasPersonalizadas] = useState([])
  const [noticiaSport, setNOticiaSport] = useState([])
  const [noticiaTecnologia, setNOticiaTecnologia] = useState([])
  const [buscar, setBuscar] = useState(false);
  const [listaFinalDeNoticias, setListaFinalDeNoticias] = useState([]);
  const [errobuscarnews, setErrobuscarnews] = useState(false);
  const [value, setValue] =  useState('1');
  useEffect(() => {
    
    const buscar = async () => {
      setErrobuscarnews(false)
      const response = await listarNoticias('noticias');
      setListaFinalDeNoticias(response.articles)
    }
    buscar()
  }, []);
  
  const navigate = useNavigate();
  if (!signed) {
    navigate('/login', { replace: true })
   // window.location.reload(false);
    return <Navigate to="/login" />
  }
  const handleSearch = (event) => {
    setOnFilterName(
      event.target.value
    );
  };
  function loadingPersonalizaos() {
    setBuscar(true);
    setTimeout(() => {
      setBuscar(false);
    }, 3000);
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
    const Request = (e) => {
      async function fetchData2(e) {
        setIsLoading(false)
        const caminho = '/noticias/buscarNoticias';
        const q = e !== '' ? e : null; // valor da variável tema 
        const lang = 'pt';// valor da variável lingauem 
        const country = 'br';
        const max = '90';
        if (q !== null) {
          debounce(() => {
            axios.get(`${urlApi}${caminho}`, {
              params: {
                q: q,
                lang: lang,
                country: country,
                max: max
              },
            })
              .then((response) => {
                if (response.data.message === 'Limite de requisições diárias excedido') {
                  console.log('Limite de requisições diárias excedido');
                  setNoticiasPersonalizadas([]);

                } else {
                  if (e === 'esporte') {
                    //teste('esporte');
                    setNOticiaSport(response.data.articles)
                    setNoticiasPersonalizadas(response.data.articles)

                  }
                  if (e === 'Tecnologia') {
                    // teste('technology');
                    setNOticiaTecnologia(response.data.articles)
                    setNoticiasPersonalizadas(response.data.articles)
                  }
                  setIsLoading(false);
                  console.log('chamou');
                  console.log(noticiasPersonalizadas)

                }
              })
              .catch((error) => {
                console.error(error);
                setNoticiasPersonalizadas([]);
                setErrobuscarnews(true);

              });
          }, 1000)

            ();
        }

      }
      fetchData2(e)
    }

    if (newValue === '2') {
      if (noticiaSport.length < 1) {
        Request('esporte');
        loadingPersonalizaos();

      } else {
        setNoticiasPersonalizadas(noticiaSport)
      }

    }

    if (newValue === '3') {
      if (noticiaTecnologia.length < 1) {
        Request('Tecnologia');
        loadingPersonalizaos()
      } else {
        setNoticiasPersonalizadas(noticiaTecnologia)
      }

    }
  }
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      console.log('enter press here! ');
      loadingPersonalizaos();
      setListaFinalDeNoticias([])
      try {
        setErrobuscarnews(false)
        const response = await listarNoticias(onFilterName);
        if(response.articles){
          setListaFinalDeNoticias(response.articles);
        }else{
          alert('não buscou nada ')
          setErrobuscarnews(true)
        }
      } catch (error) {
          setErrobuscarnews(true)
      }
     
    }
  }
  const teste = async (e) => {
    setErrobuscarnews(false)
    const response = await listarNoticias(e);
    setListaFinalDeNoticias(response.articles);
  }


  return (
    <Page title="Dashboard: NOticias">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            News
          </Typography>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button> */}
          <Typography variant="h4" gutterBottom>
            mundo
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          {/* <BlogPostsSearch posts={noticias} /> */}
          <SearchStyle
            value={onFilterName}
            onChange={handleSearch}
            id="meu-input"
            onKeyPress={handleKeyPress}
            placeholder="Search user2..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>
        <Box sx={{
          width: '100%',

        }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="home" value="1" onClick={()=>{teste('noticias')}}/>
                <Tab label="sport" value="2" />
                <Tab label="tecnologia" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">

              {
                errobuscarnews ? <>nada encontrado</> : listaFinalDeNoticias.length > 1 ?
                  <Grid container spacing={3}>
                    <TabNews persona={listaFinalDeNoticias.length > 0 ? listaFinalDeNoticias : []} />
                  </Grid> : <LoadTres />
              }

            </TabPanel>
            <TabPanel value="2">

              {
                errobuscarnews ? <>nada encontrado</> : isLoading ? <>carregando </> : buscar ? <LoadTres /> : noticiasPersonalizadas.length > 1 ?
                  <Grid container spacing={3}>
                    <TabNews persona={noticiasPersonalizadas.length > 0 ? noticiasPersonalizadas : []} />
                  </Grid> : <LoadTres />
              }

            </TabPanel>
            <TabPanel value="3">{
              errobuscarnews ? <>nada encontrado</> : isLoading ? <>carregando </> : buscar ? <LoadTres /> :
                <Grid container spacing={3}>

                  <TabNews persona={noticiasPersonalizadas.length > 0 ? noticiasPersonalizadas : []} />

                </Grid>
            }</TabPanel>
          </TabContext>
        </Box>




        {/* <Grid container spacing={3}>
            {TesteNoticias.map((noticias, index) => (

              <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
            ))}
          </Grid> */}

      </Container>
      
    </Page>
  );
}




export const LoadTres = () => {
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
      <Grid xs={maches ? 2 : 12} sm={4} md={4} >
        <Box sx={{ width: 300 }}>
          <Skeleton sx={{
            height: 300
          }} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Grid>
      <Grid xs={maches ? 2 : 12} sm={4} md={4} >
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

const TabNews = ({ persona }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular o índice inicial e final da página atual
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  // Obter as notícias da página atual
  const currentNews = persona.slice(startIndex, endIndex);

  // Calcular o número total de páginas
  const totalPages = Math.ceil(persona.length / PAGE_SIZE);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  }
  return (
    <>
      {persona.length === 0 ? (
        <p>nada encontrado</p>
      ) : (
        <>
          {currentNews.map((noticia, index) => (
            <NoticiasAllCard key={noticia.title} index={index} noticias={noticia} />
          ))}

          <Grid container justifyContent="center" sx={{ marginTop: 5 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handleChangePage}
            />
          </Grid>
        </>
      )}
    </>
  );
}
