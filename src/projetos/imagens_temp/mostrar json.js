import React, { useState, useCallback } from 'react';
import { Typography, Stack, Grid, Card, Divider, Chip, CardContent, Button, Box, TextField, Container, Dialog, DialogTitle, styled, DialogContent, DialogContentText, DialogActions, FormHelperText } from '@mui/material';
import Iconify from '../../components/Iconify';
import ProductCard from './CardprodutosJson';
import ProductCard2 from './CardprodutosJson copy';
import { UploadSingleFile } from '../../components/upload';
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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Novo estado para a categoria selecionada
    const categoryGroups = [];
    const [open, setOpen] = useState(true);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [amburger, setAmburger] = useState(false);



    const handleDropSingleFile = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            if (file.type === 'application/json') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const jsonContent = JSON.parse(event.target.result);
                        setJsonData(jsonContent);
                        setOpen(false);
                        setFile({
                            ...file,
                            preview: URL.createObjectURL(file)
                        });
                        setError(null);
                    } catch (error) {
                        setError('Erro ao analisar o arquivo JSON');
                        console.error('Erro ao analisar o arquivo JSON', error);
                    }
                };
                reader.readAsText(file);
            } else {
                setError('O arquivo deve ser um JSON');
                console.error('O arquivo deve ser um JSON');
            }
        }
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
    const handleDownload = () => {
        const filename = 'json_base.json'; // Nome do arquivo a ser baixado
        const fileUrl = './json_base.json'; // URL do arquivo

        fetch(fileUrl)
            .then((response) => response.blob())
            .then((blob) => {
                // Cria um objeto URL temporário para o blob
                const blobUrl = window.URL.createObjectURL(blob);

                // Cria um elemento "a" para o download
                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename;

                // Dispara um clique no elemento "a" para iniciar o download
                a.click();

                // Libera o objeto URL temporário
                window.URL.revokeObjectURL(blobUrl);
            })
            .catch((error) => {
                console.error('Erro ao baixar o arquivo', error);
            });
    }
    console.log(categoryGroups)
    return (
        <div>
            <Container sx={{ marginTop: 12 }}>
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
                    {categoryGroups.map((categoryGroup) => (
                        <CategoryGroup {...categoryGroup} key={categoryGroup.categoryName} amburger={amburger} />
                    ))}
                </Box>
                <Dialog
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <Stack mb={1} direction="row" alignItems="center" justifyContent="space-between" >
                        <DialogTitle id="alert-dialog-title">
                            {"Cole seu JSON aqui"}
                        </DialogTitle>
                        <Button sx={{ marginRight: 2, }} onClick={handleDownload}><Iconify icon={"material-symbols:info-outline"} width={20} height={20} /> </Button>
                    </Stack>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">



                            <Card>

                                <CardContent>
                                    <UploadSingleFile
                                        maxSize={3145728}
                                        file={file}
                                        onDrop={handleDropSingleFile}
                                        error={Boolean(error)}
                                    />
                                    {error && (
                                        <FormHelperText error sx={{ px: 2 }}>
                                            {error}
                                        </FormHelperText>
                                    )}
                                </CardContent>

                            </Card>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
}














export default MostrarJson;
