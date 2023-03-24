// material
import { Grid, Button, Container, Stack, Typography, Dialog, DialogTitle, alpha, DialogContent, DialogContentText, DialogActions, OutlinedInput, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import { useContext } from 'react';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// mock
import { AlteracaoThema } from '../../contexts/Themas';
import { BlogPostsSort, } from '../../sections/@dashboard/blog';
// ----------------------------------------------------------------------
import React, { useState,  } from 'react';
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
  const { noticias, isLoading, fetchData2, ok, onFilterName, setOnFilterName, setIsLoading } = useContext(AlteracaoThema);

  const [open, setOpen] = useState(false);
  const [totalCard, setTotalCard] = useState(null);




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


  
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      console.log('enter press here! ');
      fetchData2();
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
        {
          isLoading ? <>carregando </> : ok && noticias.length > 1 ?
            <Grid container spacing={3}>
              {noticias.map((noticias, index) => (
                
                <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} adicionar={openTrue} />
              ))}
            </Grid> : <>nenhum resultado encontrado</>


        }

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
