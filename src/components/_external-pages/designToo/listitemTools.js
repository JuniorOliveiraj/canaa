import React, { useState,   } from 'react';
import { Typography, Stack, Grid,   Divider, Chip, Button, Box, TextField, Container,  } from '@mui/material';
import Iconify from '../../Iconify';
import CardToos from './cardtools';
//import { useParams } from 'react-router-dom';
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
            {products.map((product) => (
                <Grid item xs={!amburger ? 12 : 6} key={product.productName}>


                    <CardToos productName={product.productName} productImageUrl={product.productImageUrl} />


                </Grid>
            ))}
        </Grid>
    );
}

function CategoryGroup({ categoryName, subcategories, amburger }) {
    console.log(subcategories)
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

function ListitemTools() {
    const jsonData= ({


        
            "UI Inspiration": [
                {
                    "url": "https://www.behance.net/",
                    "img": "url(\"https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/5de2a24a83c9d7a57ce551b5_Image-Behance.jpg\")",
                    "title": "Behance",
                    "subTitle": "Adobes Design Community sharing design projects.",
                    "payment": "Free"
                },
               
            ],
            "Web Design Inspiration": [
                {
                    "url": "https://www.awwwards.com/",
                    "img": "url(\"https://uploads-ssl.webflow.com/5ce10a4d0b5f0b560c22e756/5de123935f17628f0d26f73c_Image-Awwwards.jpg\")",
                    "title": "awwwards",
                    "subTitle": "Browse through tons of the most innovative, creative and eye candy websites.",
                    "payment": "Free"
                },
              
            ],
             
        
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Novo estado para a categoria selecionada
    const categoryGroups = [];
    const [amburger, setAmburger] = useState(false);
    //let { id } = useParams(); 
 

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
                console.log(jsonData[category])

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
                
            </Container>
        </div>
    );
}














export default ListitemTools;
