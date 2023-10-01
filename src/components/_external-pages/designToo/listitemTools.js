import React, { useState, useEffect } from 'react';
import { Typography, Stack, Grid, Button, Box, TextField, Container, styled, } from '@mui/material';
import Iconify from '../../Iconify';
import CardToos from './cardtools';
import { useParams } from 'react-router-dom';
import * as data from './json';
import {useMediaQuery} from '@mui/material';
const ContentStyle = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 50,
    marginTop: 5,

}));
function Subcategory(children, { amburger, subcategory }) {
    const isMobile = useMediaQuery('(min-width:600px)');
    return (
        <Grid container spacing={1} sx={{ margin: !isMobile ? 0 : 5 }}>
            <Grid item xs={12}></Grid>
            <CardToos   {...children} />
        </Grid>
    );
}


function CategoryGroup(children, { amburger }) {
    const { categoryName, AllObjectForCategory } = children

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                {categoryName}
            </Typography>
            <ContentStyle>

                {AllObjectForCategory.map((subcategory) => (
                    <Subcategory {...subcategory} key={AllObjectForCategory.title} subcategory={true} />
                ))}
            </ContentStyle>
        </div>
    );
}

function ListitemTools() {
    const [jsonData, setJsonData] = useState({});
    let { id } = useParams();
    useEffect(() => {

        if (id) {
            // const categoraSelecionada = data[id]
            // setJsonData(data.AITools)
            switch (id) {
                case "Inspiration":
                    setJsonData(data.Inspiration);
                    break;
                case "Illustrations":
                    setJsonData(data.Illustrations);
                    break;
                case "Icons":
                    setJsonData(data.Icons);
                    break;
                case "Mockups + Kits":
                    setJsonData(data.MockupsKits);
                    break;
                case "Typography":
                    setJsonData(data.Typography);
                    break;
                case "Stock Photos":
                    setJsonData(data.StockPhotos);
                    break;
                case "Learning":
                    setJsonData(data.Learning);
                    break;
                case "Blogs":
                    setJsonData(data.Blogs);
                    break;
                case "Podcasts":
                    setJsonData(data.Podcasts);
                    break;
                case "Books":
                    setJsonData(data.Books);
                    break;
                case "Accessibility":
                    setJsonData(data.Accessibility);
                    break;
                case "Community":
                    setJsonData(data.Community);
                    break;
                case "Design Tools":
                    setJsonData(data.DesignTools);
                    break;
                case "UX Tools":
                    setJsonData(data.UXTools);
                    break;
                case "Color Tools":
                    setJsonData(data.ColorTools);
                    break;
                case "Project Tools":
                    setJsonData(data.ProjectTools);
                    break;
                case "AI Tools":
                    setJsonData(data.AITools);
                    break;
                case "Website Builder":
                    setJsonData(data.WebsiteBuilder);
                    break;
                default:
                    // Lidar com outros casos, talvez lançar um erro ou definir um valor padrão
                    console.log('daasdç')
                    break;
            }
        }
    }, [id,]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // Novo estado para a categoria selecionada
    const categoryGroups = [];
    const [amburger, setAmburger] = useState(false);

    const handleCategoryButtonClick = (category) => {
        setSelectedCategory(category);
    };

    for (const category in jsonData) {

        const categoryName = category;
        const subcategories = [];
        const AllObjectForCategory = jsonData[category]
        for (const subcategory in jsonData[category]) {
            const products = [];
            for (const product in jsonData[category][subcategory]) {
                const productName = product;
                const allObjectCAtegoria = jsonData[category][subcategory]
                if (
                    (productName.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === '') &&
                    (selectedCategory === '' || selectedCategory === categoryName)
                ) {
                    products.push({ allObjectCAtegoria });
                }
            }

            if (products.length > 0) {
                subcategories.push({ categoryName, AllObjectForCategory });
            }
        }
        if (subcategories.length > 0) {
            categoryGroups.push({ categoryName, AllObjectForCategory });
        }

    }



    return (
        <div>
            <Container sx={{ marginTop: 12 }}>
                <Box>
                    <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between" >
                        <Typography variant="h4" gutterBottom>
                             {id}
                        </Typography>
                        <Button sx={{ borderRadius: '50%' }} onClick={() => { amburger ? setAmburger(false) : setAmburger(true) }}><Iconify icon={!amburger ? "fluent:table-simple-24-regular" : "ci:hamburger-md"} width={30} height={30} /></Button>
                    </Stack >

                    <TextField
                        label="Buscar por nome"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ marginBottom: '16px', display:'none' }}
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
                        <CategoryGroup {...categoryGroup} key={categoryGroup.AllObjectForCategory[0].length} amburger={amburger} jsonData={jsonData} />


                    ))}
                </Box>

            </Container>
        </div>
    );
}
    
export default ListitemTools;
