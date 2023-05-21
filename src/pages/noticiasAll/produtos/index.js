import Page from "../../../components/Page";
import { Container, Typography, Stack, InputAdornment, OutlinedInput, Button, Box, } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import Iconify from "../../../components/Iconify";
import DrawerAddProduto from "./addProduto";
import { useMediaQuery } from "@mui/material";
import ListarTodosProdutos from "./bd/ListarTodos";
import { useContext } from "react";
import { authGoogleContex } from "../../../autenticação";
import ProdutoList from "./cardProduto";
export default function ProdutosAgro() {
    const [produtoPesquisa, setProdutoPesquisa] = useState('');
    const [open, setOpen] = useState(false);
    const [produtosReload, setProdutosReload] = useState(1);
    const { logado, user } = useContext(authGoogleContex);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [produtos, setProdutos] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState([]);
    useEffect(() => {
        const buscar = async () => {
            const userToken = user.accessToken;
            const response = await ListarTodosProdutos(logado, userToken);
            setProdutos(response);
            setProdutosFiltrados(response);
        };

        buscar();
    }, [produtosReload, logado, user]);
    const openTrue = (data, openValor) => {
        console.log(data, openValor);
        setOpen(true)
        setProdutoSelecionado(data);
    }
    const handleClose = (e) => {
        setOpen(false);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('enter press here! ');
            console.log(produtoPesquisa);
        }
    }
    const handleSearch = (event) => {
        setProdutoPesquisa(event.target.value);

        const query = event.target.value.toLowerCase();
        const produtosFiltrados = produtos.filter((produto) =>
            produto.name_produto.toLowerCase().includes(query)
        );

        setProdutosFiltrados(produtosFiltrados);
    };
    const matchDownSM = useMediaQuery('(min-width:1200px)');
    return (
        <Page title="Dashboard: NOticias">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Produtos Agro
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        todos
                    </Typography>
                </Stack>
                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                    {/* <BlogPostsSearch posts={noticias} /> */}
                    <SearchStyle
                        value={produtoPesquisa}
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
                    <Button variant="contained" onClick={()=>{openTrue(null, true)}} >   <Iconify icon="material-symbols:add-circle-rounded" sx={{ color: 'text.disabled', width: 20, height: 20, marginRight: 1, }} />adicionar</Button>
                </Stack>
                {produtosFiltrados.map((produto, index) => (
                    <Box sx={{ marginBottom: 3 }} key={produto.id}>
                        <ProdutoList index={index} produtos={produto} openTrue={openTrue} produtosReload={produtosReload} setProdutosReload={setProdutosReload} />
                    </Box>
                ))}

            </Container>
            <DrawerAddProduto media={matchDownSM} handleClose={handleClose} drawerValue={open} setProdutosReload={setProdutosReload} produtosReload={produtosReload}  produtoSelecionado={produtoSelecionado} />
        </Page>
    )
}

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


