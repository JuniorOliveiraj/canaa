import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography, useMediaQuery, Dialog, DialogTitle, alpha, DialogContent, DialogContentText, DialogActions, OutlinedInput, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// mock
import { BlogPostsSort, } from '../../sections/@dashboard/blog';
// ----------------------------------------------------------------------
import axios from 'axios';
import React, { useState } from 'react';
import NoticiasAllCard from './NoticiasCard';

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
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [totalCard, setTotalCard] = useState(null);
  const [onFilterName, setOnFilterName] = useState("");
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
  const openTrue = (data, openValor) => {

    setTotalCard({ data, openValor })
    setOpen(true)
  }
  const handleClose = (e) => {
    setOpen(false);
  };
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const url = 'https://junioroliveiraj.000webhostapp.com';
  //       const caminho = '/noticias/buscarNoticias';
  //       const q = 'gpt23232'; // valor da variável tema 
  //       const lang = 'pt';// valor da variável lingauem 
  //       const country = 'br';
  //       const max = '90';
  //       const response = await axios.get(`${url}${caminho}?q=${q}&?lang=${lang}&?country=${country}&?max=${max}`);
  //       setNoticias(response.data.articles);
  //       console.log(response.data)
  //     } catch (error) {
  //       setNoticias(TesteNoticias.articles)
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const url = 'https://junioroliveiraj.000webhostapp.com';
  //       const caminho = '/noticias/buscarNoticias';
  //       const q = 'gpt23232'; // valor da variável tema 
  //       const lang = 'pt';// valor da variável lingauem 
  //       const country = 'br';
  //       const max = '90';
  //       const response = await axios.get(`${url}${caminho}?q=${q}&?lang=${lang}&?country=${country}&?max=${max}`);
  //       setNoticias(response.data.articles);
  //       console.log(response.data)
  //     } catch (error) {
  //       setNoticias(TesteNoticias.articles)
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);


  const handleSearch = (event) => {
    setOnFilterName(event.target.value);
    const url = 'https://junioroliveiraj.000webhostapp.com';
    const caminho = '/noticias/buscarNoticias';
    const q = onFilterName !=='' ? onFilterName : null  ; // valor da variável tema 
    const lang = 'pt';// valor da variável lingauem 
    const country = 'br';
    const max = '90';
if(q!== null){
  debounce(() => {
    axios.get(`${url}${caminho}?q=${q}&?lang=${lang}&?country=${country}&?max=${max}`)
      .then((response) => {
        setNoticias(response.data.articles);
        console.log("dados",response.data);
        setIsLoading(false);
        setOk(noticias.articles =! 0 &&  true)
      })
      .catch((error) => {
        console.error(error);
        setError(true)
      });
  }, 1000)();
}
  };
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };


  return (
    <Page title="Dashboard: NOticias">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            News
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          {/* <BlogPostsSearch posts={noticias} /> */}
          <SearchStyle
            value={onFilterName}
            onChange={handleSearch}
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>
        {
          isLoading ? <>carregando </> : error ?  <>nenhum resultado </>:ok && 
          <Grid container spacing={3}>
          {noticias.map((noticias, index) => (
            <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
          ))}
        </Grid>
       
            
        }

      </Container>
      <DialogAdicionar handleClose={handleClose} valores={open ? totalCard : null} />
    </Page>
  );
}


function DialogAdicionar({/*valores =>*/ media, valores, /*cunctions =>*/  handleClose, ...other }) {
  const [openAdd, setOpenAdd] = useState(false);
  const matches = useMediaQuery('(min-width:900px)');
  const [title, setTitle] = useState('')
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  if (valores != null && openAdd === false) {
    if (valores.openValor) {
      setOpenAdd(true)

      const { content, description, image, source, title, publishedAt, url, } = valores.data;
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
              <img src={image} style={{ width: '800px' }} />
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
