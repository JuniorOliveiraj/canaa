import Iconify from '../../components/Iconify';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// material
import { alpha, styled } from '@mui/material';
import { Box, Tab, Card, Grid, Divider, Skeleton, Container, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// routes
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Markdown from '../../components/Markdown';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import {
  ProductDetailsSumary,
  // ProductDetailsReview,
  ProductDetailsCarousel
} from '../../components/_dashboard/e-commerce/product-details';
import CartWidget from '../../components/_dashboard/e-commerce/CartWidget';

// ----------------------------------------------------------------------

const PRODUCT_DESCRIPTION = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'ic:round-verified-user'
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'mdi:clock'
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'ic:round-verified-user'
  }
];

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  justifyContent: 'center',
  height: theme.spacing(8),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`
}));

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6} lg={7}>
      <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '100%', borderRadius: 2 }} />
    </Grid>
    <Grid item xs={12} md={6} lg={5}>
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="text" height={240} />
      <Skeleton variant="text" height={40} />
      <Skeleton variant="text" height={40} />
      <Skeleton variant="text" height={40} />
    </Grid>
  </Grid>
);

export default function EcommerceProductDetails() {
  const { themeStretch } = useSettings();
  const { name } = useParams();
  const [value, setValue] = useState('1');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        // Simulating an API call to fetch the product data
        const response = await fetch(`API_ENDPOINT/products/${name}`);
        const data = await response.json();
        setProduct(data);
        console.log(data)
      } catch (error) {
        const data =
        {
          id: '123',
          name: 'Product Name',
          sizes: ['S', 'M', 'L', 'XL'],
          price: 19.99,
          imagens: [
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://ogimg.infoglobo.com.br/in/25363326-488-0b7/FT1086A/WhatsApp-Image-2022-01-21-at-18.41.57.jpeg.jpg',
            'https://classic.exame.com/wp-content/uploads/2022/04/MAYC-10953.jpg?quality=70&strip=info',
            'https://s2-valor.glbimg.com/EPCclUpcD8MwJ3gqsD5Nw1FsOgw=/0x0:595x599/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/c/8/vwEnBlQTOR5JMPV1qigw/captura-de-tela-2021-12-14-114837.jpg'
          ],
          status: 'In Stock',
          colors: ['Red', 'Green'],
          available: 10,
          priceSale: 14.99,
          totalRating: 4.5,
          totalReview: 86,
          inventoryType: 'in_stock'
        }

        setProduct(data);
        setError(error.message);
        console.log(error)
      }
    };

    getProduct();
  }, [name]);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const descriptionP = "editdocs.js:15 <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6><h1>Heading H1</h1><p><br></p><p><br></p><h2>Heading H2</h2><p><br></p><p><br></p><h3>Heading H3</h3><p><br></p><p><br></p><h4>Heading H4</h4><p><br></p><p><br></p><h5>Heading H5</h5><p><br></p><p><br></p><h6>Heading H6</h6><p><br></p><p><br></p><p><br></p><p><br></p><h3>Paragraph</h3><p><br></p><p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTAs successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p><p><br></p><p><strong>This is strong text.</strong></p><p><br></p><p><em>This is italic text</em></p><p><br></p><p><u>This is underline text</u></p><p><br></p><p><br></p><p><br></p><p><br></p><h3>Unordered list</h3><p><br></p><ul><li>Implements&nbsp; esign</li><li>Implementation</li></ol><p><br></p><p><br></p><p><br></p><p><br></p><h3>Blockquote</h3><p><br></p><blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote><p><br></p><p><br></p><p><br></p><p><br></p><h3>Block Code</h3>"

  return (
    <Page title="Ecommerce: Product Details | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Product Details"
          links={[
            { name: 'Dashboard', href: '/dashboard' },
            {
              name: 'E-Commerce',
              href: '/dashboard/products/list'
            },
            { name: 'produto' }
          ]}
        />

        <CartWidget />

        {product ? (
          <>
            <Card>
              <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                  <ProductDetailsCarousel product={product} />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <ProductDetailsSumary product={product} />
                </Grid>
              </Grid>
            </Card>

            <Grid container sx={{ my: 8 }}>
              {PRODUCT_DESCRIPTION.map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <Box sx={{ my: 2, mx: 'auto', maxWidth: 280, textAlign: 'center' }}>
                    <IconWrapperStyle>
                      <Iconify icon={item.icon} width={36} height={36} />
                    </IconWrapperStyle>
                    <Typography variant="subtitle1" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Card>
              <TabContext value={value}>
                <Box sx={{ px: 3, bgcolor: 'background.neutral' }}>
                  <TabList onChange={handleChangeTab}>
                    <Tab disableRipple value="1" label="Description" />
                    <Tab
                      disableRipple
                      value="2"
                      // label={`Review (${product.reviews.length})`}
                      sx={{ '& .MuiTab-wrapper': { whiteSpace: 'nowrap' } }}
                    />
                  </TabList>
                </Box>

                <Divider />

                <TabPanel value="1">
                  <Box sx={{ p: 3 }}>
                    <Markdown children={descriptionP} />
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  {/* <ProductDetailsReview product={product} /> */}
                </TabPanel>
              </TabContext>
            </Card>
          </>
        ) : (
          SkeletonLoad
        )}

        {error && <Typography variant="h6">404 Product not found</Typography>}
      </Container>
    </Page>
  );
}
