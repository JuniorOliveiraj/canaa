import React, { useState, useEffect } from 'react';
import { Typography, Stack, Grid, Divider, Chip, Button, Box, TextField, Container, alpha, useTheme, Select, MenuItem } from '@mui/material';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





import Iconify from '../../components/Iconify';
import ProductCard from './CardprodutosJson';
import ProductCard2 from './CardprodutosJson copy';
import Logo from "../../pages/components-overview/extra/animate/other/Logo";

import useSettings from '../../hooks/useSettings';
import axios from 'axios';
import urlApi from '../../_mock/url';

function Subcategory({ subcategoryName, products, amburger,sizeImg }) {
    const theme = useTheme();
    const { themeMode } = useSettings()
    return (
        <Grid container spacing={3} sx={{ margin: 5 }}>
            <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                    <Divider sx={{ backgroundColor: themeMode === 'Dark' ? alpha(theme.palette.primary.dark, 0.1) : alpha(theme.palette.primary.light, 0.1), marginBottom: 5 }}>
                        <Chip label={subcategoryName} variant="h2" />
                    </Divider>

                </Typography>
            </Grid>
            {
                !amburger ?
                    <>
                        {products.map((product) => (
                            <Grid item xs={!amburger ? 12 : 6} key={product.productName}>
                                <ProductCard productName={product.productName} productImageUrl={product.productImageUrl} sizeImg={sizeImg} />
                            </Grid>
                        ))}
                    </> :
                    <>
                        {products.map((product) => (
                            <ProductCard2 productName={product.productName} productImageUrl={product.productImageUrl} sizeImg={sizeImg} />
                        ))}
                    </>

            }

        </Grid>
    );
}

function CategoryGroup({ categoryName, subcategories, amburger,sizeImg }) {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {categoryName}
            </Typography>

            {subcategories.map((subcategory) => (
                <Subcategory {...subcategory} key={subcategory.subcategoryName} amburger={amburger} sizeImg={sizeImg} />
            ))}

        </div>
    );
}

function MostrarJson() {
    const [jsonData, setJsonData] = useState({});
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Novo estado para a categoria selecionada
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selecSizeImg, setSelectedSizeImg] = useState("1000x1000");

    const categoryGroups = [];
    const [open, setOpen] = useState(true);
    const [banco, setBanco] = useState(false);

    const [amburger, setAmburger] = useState(true);
    const { themeStretch } = useSettings();


    const handleClose = (children) => {
        console.log(children)
        setBanco(children === 2 ? true : false)
        setOpen(false);
    };
    useEffect(() => {
        const ListProdutos = async () => {
            setLoading(true);
            if (!open) {
                const caminho = banco ? `${urlApi}/mirante/list` : `${urlApi}/mirante/list/bancoMirante`
                axios.get(caminho)
                    .then((response) => {
                        setJsonData(response.data.PRODUTOS)
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log(error);
                        setLoading(false);
                    });
            }
        }
        ListProdutos()
    }, [banco, open]);



    const handleCategoryButtonClick = (category) => {
        setSelectedCategory(category);
    };

    for (const category in jsonData) {
        const categoryName = category;
        const subcategories = [];

        for (const subcategory in jsonData[category]) {
            const subcategoryName = subcategory;
            const products = [];

            for (const product in jsonData[category][subcategory]) {
                const productName = product;
                const productImageUrl = jsonData[category][subcategory][product];

                if (
                    (productName.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
                    (selectedCategory === '' || selectedCategory === categoryName) &&
                    (selectedSubcategory === '' || selectedSubcategory === subcategoryName)
                ) {
                    products.push({ productName, productImageUrl });
                }
            }

            if (products.length > 0) {
                subcategories.push({ subcategoryName, products });
            }
        }

        if (subcategories.length > 0) {
            categoryGroups.push({ categoryName, subcategories });
        }
    }

    return (
        <div>
            <Container sx={{ marginTop: 12, }} maxWidth={themeStretch ? false : 'xl'}>
                <Box>
                    <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
                        <Typography variant="h4" gutterBottom>
                            Lista de Produtos
                        </Typography>
                        <Box>

                            <Select
                                value={selecSizeImg}
                                onChange={(e) => setSelectedSizeImg(e.target.value)}
                                label="Subcategoria"

                            >
                                <MenuItem value="40x35">40x35</MenuItem>
                                <MenuItem value="119x150">119x150</MenuItem>
                                <MenuItem value="290x365">290x365</MenuItem>
                                <MenuItem value="524x520">524x520</MenuItem>
                                <MenuItem value="1000x1000">1000x1000</MenuItem>
                                <MenuItem value="1760x2215">1760x2215</MenuItem>



                            </Select>
                            <Button sx={{ borderRadius: '50%' }} onClick={() => { amburger ? setAmburger(false) : setAmburger(true) }}><Iconify icon={!amburger ? "fluent:table-simple-24-regular" : "ci:hamburger-md"} width={30} height={30} /></Button>
                        </Box>
                    </Stack >

                    <TextField
                        label="Buscar por nome"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ marginBottom: '16px' }}
                    />
                    <br />
                    <div>
                        {Object.keys(jsonData).map((category, index) => {
                            return (
                                <Button
                                    variant={category === selectedCategory ? 'contained' : 'outlined'}
                                    onClick={() => handleCategoryButtonClick(category)}
                                    sx={{ margin: 0.5 }}
                                >
                                    {category}
                                    {selectedCategory === category && (
                                        <Select
                                            value={selectedSubcategory || ''}  // Modifique aqui
                                            onChange={(e) => setSelectedSubcategory(e.target.value)}
                                            label="Subcategoria"
                                            sx={{ height: 15, color: '#fff' }}
                                        >
                                            <MenuItem value="">Todos</MenuItem>
                                            {Object.keys(jsonData[category] || {}).map((subcategory, subIndex) => (
                                                <MenuItem key={subIndex} value={subcategory}>
                                                    {subcategory}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                </Button>
                            )
                        })}

                    </div>
                    <br />
                    <br />
                    {
                        loading ? (<Box sx={{ width: 800, height: 800, display: 'flex', justifyContent: 'center', margin: '0 auto' }}><Logo /></Box>)
                            :
                            (
                                categoryGroups.map((categoryGroup) => (
                                    <Container maxWidth={themeStretch ? false : 'xl'}>
                                        <CategoryGroup {...categoryGroup} key={categoryGroup.categoryName} amburger={amburger} sizeImg={selecSizeImg} />
                                    </Container>
                                ))
                            )

                    }
                </Box>

            </Container>


            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Escolha um tamanho de imagen"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            ao escolher o tamanho 1000x1000 as imagens serão adicionada aos poucos conforme no site Mirante
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' onClick={() => handleClose(1)}>1000x1000</Button>
                        <Button variant='contained' onClick={() => handleClose(2)} autoFocus>
                            tamanho site
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>
    );
}














export default MostrarJson;
