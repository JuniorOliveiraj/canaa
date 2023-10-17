import React, { useState, useEffect } from 'react';
import { Typography, Stack, Grid, Divider, Chip, Button, Box, TextField, Container, styled } from '@mui/material';
import Iconify from '../../components/Iconify';
import ProductCard from './CardprodutosJson';
import ProductCard2 from './CardprodutosJson copy';
import Logo from "../../pages/components-overview/extra/animate/other/Logo";

import useSettings from '../../hooks/useSettings';
import axios from 'axios';
import urlApi from '../../_mock/url';
const ContentStyle = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 40,
    marginTop: 5,
    width: '100%'

}));
function Subcategory({ subcategoryName, products, amburger }) {
    return (
        <Grid container spacing={3} sx={{ margin: 5 }}>
            <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                    <Divider>
                        <Chip label={subcategoryName} variant="h2" />
                    </Divider>

                </Typography>
            </Grid>
            {
                !amburger ?
                    <>
                        {products.map((product) => (
                            <Grid item xs={!amburger ? 12 : 6} key={product.productName}>
                                <ProductCard productName={product.productName} productImageUrl={product.productImageUrl} />
                            </Grid>
                        ))}
                    </> :
                    <ContentStyle>
                        {products.map((product) => (
                            <ProductCard2 productName={product.productName} productImageUrl={product.productImageUrl} />
                        ))}
                    </ContentStyle>

            }

        </Grid>
    );
}

function CategoryGroup({ categoryName, subcategories, amburger }) {
    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {categoryName}
            </Typography>

            {subcategories.map((subcategory) => (
                <Subcategory {...subcategory} key={subcategory.subcategoryName} amburger={amburger} />
            ))}

        </div>
    );
}

function MostrarJson() {
    const [jsonData, setJsonData] = useState({});
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Novo estado para a categoria selecionada
    const categoryGroups = [];

    const [amburger, setAmburger] = useState(false);
    const { themeStretch } = useSettings();
    useEffect(() => {
        const ListProdutos = async () => {
            setLoading(true);
            axios.get(`${urlApi}/mirante/list`)
                .then((response) => {
                    setJsonData(response.data.PRODUTOS)
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }
        ListProdutos()
    }, []);



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
                    (selectedCategory === '' || selectedCategory === categoryName)
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
            <Container sx={{ marginTop: 12 }} maxWidth={themeStretch ? false : 'xl'}>
                <Box>
                    <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
                        <Typography variant="h4" gutterBottom>
                            Lista de Produtos
                        </Typography>
                        <Button sx={{ borderRadius: '50%' }} onClick={() => { amburger ? setAmburger(false) : setAmburger(true) }}><Iconify icon={!amburger ? "fluent:table-simple-24-regular" : "ci:hamburger-md"} width={30} height={30} /></Button>
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
                        {Object.keys(jsonData).map((category) => (
                            <Button
                                key={category}
                                variant={category === selectedCategory ? 'contained' : 'outlined'}
                                onClick={() => handleCategoryButtonClick(category)}
                                sx={{ margin: 0.5 }}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <br />
                    <br />
                    {
                        loading ? (<Box sx={{ width: 800, height: 800, display: 'flex', justifyContent: 'center', margin: '0 auto' }}><Logo /></Box>)
                            :
                            (
                                categoryGroups.map((categoryGroup) => (
                                    <CategoryGroup {...categoryGroup} key={categoryGroup.categoryName} amburger={amburger} />
                                ))
                            )

                    }
                </Box>

            </Container>
        </div>
    );
}














export default MostrarJson;
