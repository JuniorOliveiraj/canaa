// material
import { Grid, Container, Stack, Typography, OutlinedInput, InputAdornment, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import { useContext, useEffect } from 'react';
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
// mock
import { AlteracaoThema } from '../../../contexts/Themas';
import { BlogPostsSort } from '../../../sections/@dashboard/blog';
import { LoadTres } from '..';
import { authGoogleContex } from '../../../autenticação';
import { Link as RouterLink } from 'react-router-dom';
// ----------------------------------------------------------------------
import { CenterAll } from '../../../Portifolio/contato/styles';

import NoticiasAllCard from '../NoticiasCard';


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

export default function NoticiasALLFavoritas() {

  const { isLoading, fetchData2, ok, onFilterName, setOnFilterName, setIsLoading, noticiasFavoritas } = useContext(AlteracaoThema);
  const { logado } = useContext(authGoogleContex);
  useEffect(() => {

  }, []);




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
          !logado ? <DontAccount /> : isLoading ? <>carregando </> : ok && noticiasFavoritas.length > 1 ?
            <Grid container spacing={3}>
              {noticiasFavoritas.map((noticias, index) => (

                <NoticiasAllCard key={noticias.title} index={index} noticias={noticias} status={noticias.status} />
              ))}
            </Grid>
            : <Box sx={{

              paddingLeft: 3
            }}>
              <LoadTres /></Box>


        }
      </Container>

    </Page>
  );
}

function DontAccount() {
 // const [handleLogin, setHandleLogin] = useState(0);
  
  return (
    <Box >

      <Box>
        <CenterAll>
          <Typography variant="h4" component="h2">
            faça login ou crie uma conta
          </Typography>
        </CenterAll>
        <CenterAll >
          <RouterLink to='/login'>
            <Button variant="contained" sx={{ margin: 2 }} >
              login
            </Button>
          </RouterLink>
          <RouterLink to='/register'>
            <Button variant="contained" sx={{ margin: 2 }} >
            register
            </Button>
          </RouterLink>
        </CenterAll>
      </Box>

    </Box>
  )
}
