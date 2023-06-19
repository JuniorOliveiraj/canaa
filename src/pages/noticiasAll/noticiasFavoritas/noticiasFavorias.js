import { Grid, Container, Stack, Typography, OutlinedInput, InputAdornment, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import urlApi from '../../../_mock/url';
import { useContext, useEffect, useState } from 'react';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import NoticiasAllCard from '../NoticiasCard';
import { BlogPostsSort } from '../../../sections/@dashboard/blog';
import { LoadTres } from '..';
import { authGoogleContex } from '../../../autenticação';
import { Link as RouterLink } from 'react-router-dom';
import { CenterAll } from '../../../Portifolio/contato/styles';
import axios from 'axios';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

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

export default function NoticiasALLFavoritas() {
  const { logado } = useContext(authGoogleContex);
  const [noticiasFavoritas, setNoticiasFavoritas] = useState([]);
  const [favoritasfiltradas, setfavoritasfiltradas] = useState([]);
  const [onFilterName, setOnFilterName] = useState('');

  useEffect(() => {
    async function listarFavorito(id) {
      const caminho = '/favoritos/listar';
      try {
        const response = await axios.get(`${urlApi}${caminho}`, {
          params: {
            id: id,
          },
        });
        setNoticiasFavoritas(response.data);
        setfavoritasfiltradas(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    function loadUserFromLocalStorage() {
      const userString = localStorage.getItem('user');
      if (userString) {
        listarFavorito(JSON.parse(userString).uid);
      }
    }

    loadUserFromLocalStorage();
  }, []);

  const handleSearch = (event) => {
    setOnFilterName(event.target.value);

    const query = event.target.value.toLowerCase();
    const produtosFiltrados = noticiasFavoritas.filter((noticiasFavoritas) =>
    noticiasFavoritas.title.toLowerCase().includes(query)
    );
    console.log(produtosFiltrados)
    setfavoritasfiltradas(produtosFiltrados);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here!');
    }
  };

  return (
    <Page title="Dashboard: Noticias">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            News
          </Typography>
          <Typography variant="h4" gutterBottom>
            mundo
          </Typography>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
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
        {!logado ? (
          <DontAccount />
        ) : (
          <>
            {noticiasFavoritas.length > 0 ? (
              <Grid container spacing={3}>
                {favoritasfiltradas.map((noticias, index) => (
                  <NoticiasAllCard key={noticias.title} noticias={noticias} status={noticias.status} />
                ))}
              </Grid>
            ) : (
              <Box sx={{ paddingLeft: 3 }}>
                <LoadTres />
              </Box>
            )}
          </>
        )}
      </Container>
    </Page>
  );
}

function DontAccount() {
  return (
    <Box>
      <Box>
        <CenterAll>
          <Typography variant="h4" component="h2">
            Faça login ou crie uma conta
          </Typography>
        </CenterAll>
        <CenterAll>
          <RouterLink to="/login">
            <Button variant="contained" sx={{ margin: 2 }}>
              Login
            </Button>
          </RouterLink>
          <RouterLink to="/register">
            <Button variant="contained" sx={{ margin: 2 }}>
              Register
            </Button>
          </RouterLink>
        </CenterAll>
      </Box>
    </Box>
  );
}

