import React from 'react';
import Iconify from '../../../Iconify';
import { sentenceCase } from 'change-case';
//import { useNavigate } from 'react-router-dom';

import { useFormik, Form, FormikProvider, useField } from 'formik';
// material
import { useTheme, styled } from '@mui/material';
import {
  Box,
  Link,
  Stack,
  Button,
  Rating,
  Tooltip,
  Divider,
  TextField,
  Typography,
  FormHelperText
} from '@mui/material';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <Iconify icon={'logos:facebook'} width={20} height={20} color="#1877F2" />
  },
  {
    name: 'Instagram',
    icon: <Iconify icon={'skill-icons:instagram'} width={20} height={20} color="#D7336D" />
  },
  {
    name: 'Linkedin',
    icon: <Iconify icon={'devicon:linkedin'} width={20} height={20} color="#006097" />
  },
  {
    name: 'Twitter',
    icon: <Iconify icon={'logos:twitter'} width={20} height={20} color="#1C9CEA" />
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up(1368)]: {
    padding: theme.spacing(5, 8)
  }
}));

// ----------------------------------------------------------------------

const Incrementer = (props) => {
  const [field, , helpers] = useField(props);
  const { available } = props;
  const { value } = field;
  const { setValue } = helpers;

  const incrementQuantity = () => {
    setValue(value + 1);
  };

  const decrementQuantity = () => {
    setValue(value - 1);
  };

  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032'
      }}
    >
      <Button size="small" color="inherit" disabled={value <= 1} onClick={decrementQuantity}>
        -
      </Button>
      <Typography
        variant="body2"
        component="span"
        sx={{
          width: 40,
          textAlign: 'center',
          display: 'inline-block'
        }}
      >
        {value}
      </Typography>
      <Button size="small" color="inherit" disabled={value >= available} onClick={incrementQuantity}>
        +
      </Button>
    </Box>
  );
};

export default function ProductDetailsSummary({product}) {
  const theme = useTheme();
 // const navigate = useNavigate();

  // Dados fictícios


  const onAddCart = (product) => {
    // Lógica para adicionar ao carrinho
    console.log('Product added to cart:', product);
  };

  const handleBuyNow = () => {
    // Lógica para comprar agora
    console.log('Buy now clicked');
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: product.id,
      name: product.name,
      cover: product.cover,
      available: product.available,
      price: product.price,
      color: product.colors[0],
      size: product.sizes[0],
      quantity: product.available < 1 ? 0 : 1
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Lógica de submissão do formulário
        console.log('Form submitted:', values);
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
      }
    }
  });

  const { values, touched, errors, getFieldProps, handleSubmit } = formik;

  const handleAddCart = () => {
    onAddCart({
      ...values,
      subtotal: values.price * values.quantity
    });
  };

  return (
    <RootStyle>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="subtitle1">
            {sentenceCase(product.inventoryType)}
          </Typography>

          <Typography variant="overline" sx={{ mt: 2, mb: 1, display: 'block' }}>
            {product.status}
          </Typography>

          <Typography variant="h5" paragraph>
            {product.name}
          </Typography>

          <Stack spacing={0.5} direction="row" alignItems="center" sx={{ mb: 2 }}>
            <Rating value={product.totalRating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              ({product.totalReview} reviews)
            </Typography>
          </Stack>

          <Typography variant="h4" sx={{ mb: 3 }}>
            {product.priceSale && (
              <Box component="span" sx={{ color: 'text.disabled', textDecoration: 'line-through' }}>
                ${product.priceSale}
              </Box>
            )}
            &nbsp;${product.price}
          </Typography>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack spacing={3} sx={{ my: 3 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                Color
              </Typography>
              <Box sx={{ display: 'flex' }}>
                {product.colors.map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: color,
                      cursor: 'pointer',
                      ml: index !== 0 ? 1 : 0,
                      ...(color === values.color && {
                        border: `2px solid ${theme.palette.primary.main}`
                      })
                    }}
                    onClick={() => formik.setFieldValue('color', color)}
                  />
                ))}
              </Box>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                Size
              </Typography>
              <TextField
                select
                size="small"
                {...getFieldProps('size')}
                SelectProps={{ native: true }}
                FormHelperTextProps={{
                  sx: {
                    textAlign: 'right',
                    margin: 0,
                    mt: 1
                  }
                }}
                helperText={
                  <Link href="#" underline="always" color="text.primary">
                    Size Chart
                  </Link>
                }
              >
                {product.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </TextField>
            </Stack>


            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                Quantity
              </Typography>
              <div>
                <Incrementer name="quantity" available={product.available} />
                <Typography
                  variant="caption"
                  sx={{
                    mt: 1,
                    display: 'block',
                    textAlign: 'right',
                    color: 'text.secondary'
                  }}
                >
                  Available: {product.available}
                </Typography>

                <FormHelperText error>{touched.quantity && errors.quantity}</FormHelperText>
              </div>
            </Stack>
          </Stack>
          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 5 }}>
            <Button
              fullWidth
              size="large"
              type="button"
              color="warning"
              variant="contained"
              startIcon={<Iconify icon={'ic:round-add-shopping-cart'} />}
              onClick={handleAddCart}
              disabled={values.quantity <= 0}
              sx={{ whiteSpace: 'nowrap' }}
            >
              Add to Cart
            </Button>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleBuyNow}
              disabled={values.quantity <= 0}
            >
              Buy Now
            </Button>
          </Stack>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            {SOCIALS.map((social) => (
              <Tooltip key={social.name} title={social.name}>
                <Button>{social.icon}</Button>
              </Tooltip>
            ))}
          </Box>
        </Form>
      </FormikProvider>
    </RootStyle>
  );
}
