// material
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  alpha,
  DialogContent,
  DialogContentText,
  DialogActions,
  OutlinedInput,
  InputAdornment,
  Box,
  Skeleton,
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
import React, { useState, } from 'react';
import NoticiasAllCard from './NoticiasCard';
import urlApi from '../../_mock/url';
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

export default function NoticiasALL() {
  const { isLoading, fetchData2, ok, onFilterName, setOnFilterName, setIsLoading, listaFinalDeNoticias , debounce} = useContext(AlteracaoThema);
  const [open, setOpen] = useState(false);
  const [totalCard, setTotalCard] = useState(null);
  const [noticiasPersonalizadas, setNoticiasPersonalizadas]=useState([])
  
  const [buscar, setBuscar] = useState(false);
  const openTrue = (data, openValor) => {
    setTotalCard({ data, openValor })
    setOpen(true)
  }
  const handleClose = (e) => {
    setOpen(false);
  };
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
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const teste = (e) => {
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
                  console.log('error');
                  setNoticiasPersonalizadas([]);
            
                } else {
                  setNoticiasPersonalizadas(response.data.articles);
                  setIsLoading(false);
                  console.log('chamou');
                  console.log(noticiasPersonalizadas)
              
                }
              })
              .catch((error) => {
                console.error(error);
                setNoticiasPersonalizadas([]);
                
              });
          }, 1000)

            ();
        }

      }
      fetchData2(e)
    }

    if(newValue ==='2'){
      teste('esporte');
      loadingPersonalizaos()
      
    }
    
    if(newValue ==='3'){
      teste('technology');
      loadingPersonalizaos()
    }


  };



  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      console.log('enter press here! ');
      fetchData2();
      loadingPersonalizaos()
    }
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
            placeholder="Search user..."
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="home" value="1" />
                <Tab label="sport" value="2" />
                <Tab label="tecnologia" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{
              isLoading ? <>carregando </> : buscar ? <LoadTres/> :   ok && listaFinalDeNoticias.length > 1 ?
                <Grid container spacing={3}>
                  {listaFinalDeNoticias.map((noticias, index) => (

                    <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
                  ))}
                </Grid> : <LoadTres />
            }

            </TabPanel>
            <TabPanel value="2">

              {
              isLoading ? <>carregando </> : buscar ? <LoadTres/> :  noticiasPersonalizadas.length > 1 ?
                <Grid container spacing={3}>
                  {noticiasPersonalizadas.map((noticias, index) => (

                    <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
                  ))}
                </Grid> :<LoadTres/>
            }
            
            </TabPanel>
            <TabPanel value="3">{
              isLoading ? <>carregando </> : buscar ? <LoadTres/> :     noticiasPersonalizadas.length > 1 ?
                <Grid container spacing={3}>
                  {noticiasPersonalizadas.map((noticias, index) => (

                    <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
                  ))}
                </Grid> :<LoadTres/>
            }</TabPanel>
          </TabContext>
        </Box>




        {/* <Grid container spacing={3}>
            {TesteNoticias.map((noticias, index) => (

              <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
            ))}
          </Grid> */}

      </Container>
      <DialogAdicionar handleClose={handleClose} valores={open ? totalCard : null} />
    </Page>
  );
}


function DialogAdicionar({/*valores =>*/ media, valores, /*cunctions =>*/  handleClose, ...other }) {
  const [openAdd, setOpenAdd] = useState(false);
  const [title, setTitle] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  if (valores != null && openAdd === false) {
    if (valores.openValor) {
      setOpenAdd(true)

      const { /*content, source,publishedAt, url,*/   description, image, title, } = valores.data;
      setTitle(title)
      setimage(image)
      setdescription(description)
    }

  }
  const handleClose2 = () => {
    setOpenAdd(false)
    handleClose(false);
  };



  return (
    <div>
      <Dialog
        open={openAdd}
        onClose={handleClose2}
        aria-labelledby="draggable-dialog-title"

      >
        <DialogTitle sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[999], 1), }} id="draggable-dialog-title">
          <h1> {title}</h1>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[999], 1) }}>
          <DialogContentText>
            <Grid item xs={12} md={6} lg={4}>
              {/* conteudo */}
              <img src={image} alt="img" style={{ width: '800px' }} />
              <p>{description}</p>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: (theme) => alpha(theme.palette.grey[999], 1) }}>
          <Button sx={{ color: (theme) => alpha(theme.palette.grey[800], 1) }} autoFocus onClick={handleClose2}>
            Cancel
          </Button>
          <Button sx={{ color: (theme) => alpha(theme.palette.grey[800], 1) }} onClick={handleClose2}>Concluir</Button>
        </DialogActions>
      </Dialog>
    </div>
  )


}



const LoadTres = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid xs={2} sm={4} md={4}>
        <Box sx={{ width: 300 }}>
          <Skeleton sx={{
            height: 300
          }} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Grid>
      <Grid xs={2} sm={4} md={4} >
        <Box sx={{ width: 300 }}>
          <Skeleton sx={{
            height: 300
          }} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Grid>
      <Grid xs={2} sm={4} md={4} >
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
