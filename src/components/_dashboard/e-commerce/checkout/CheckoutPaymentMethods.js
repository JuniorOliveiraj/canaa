import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Radio,
  Stack,
  Collapse,
  TextField,
  Typography,
  RadioGroup,
  CardHeader,
  CardContent,
  FormHelperText,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
//
import { MHidden } from '../../../@material-extend';
import Iconify from '../../../Iconify';

// ----------------------------------------------------------------------

const OptionStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2.5),
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('all'),
  border: `solid 1px ${theme.palette.grey[500_32]}`
}));

// ----------------------------------------------------------------------

CheckoutPaymentMethods.propTypes = {
  formik: PropTypes.object,
  paymentOptions: PropTypes.array,
  cardOptions: PropTypes.array
};

export default function CheckoutPaymentMethods({ paymentOptions, cardOptions, formik }) {
  const { errors, touched, values, getFieldProps } = formik;

  return (
    <Card sx={{ my: 3 }}>
      <CardHeader title="Payment options" />
      <CardContent>
        <RadioGroup row {...getFieldProps('payment')}>
          <Grid container spacing={2}>
            {paymentOptions.map((method) => {
              const { value, title, icons, description } = method;
              const hasChildren = value === 'credit_card';

              return (
                <Grid key={title} item xs={12}>
                  <OptionStyle
                    sx={{
                      ...(values.payment === value && {
                        boxShadow: (theme) => theme.customShadows.z8
                      }),
                      ...(hasChildren && { flexWrap: 'wrap' })
                    }}
                  >
                    <FormControlLabel
                      value={value}
                      control={<Radio checkedIcon={<Iconify icon={'ion:checkmark-circle'} />} />}
                      label={
                        <Box sx={{ ml: 1 }}>
                          <Typography variant="subtitle2">{title}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {description}
                          </Typography>
                        </Box>
                      }
                      sx={{ flexGrow: 1, py: 3 }}
                    />
                    <MHidden width="smDown">
                      <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                        {icons.map((icon, index) => (
                          <Box
                            key={icon}
                            component="img"
                            alt="logo card"
                            src={icon}
                            sx={{
                              ...(index === 0 && { mr: 1 })
                            }}
                          />
                        ))}
                      </Box>
                    </MHidden>

                    {hasChildren && (
                      <Collapse in={values.payment === 'credit_card'} sx={{ width: '100%' }}>

                        <Stack spacing={3}>
                          <Typography variant="subtitle1">Add new card</Typography>

                          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField
                              fullWidth
                              label="Name on card"
                              {...getFieldProps('cardName')}
                              error={Boolean(touched.cardName && errors.cardName)}
                              helperText={touched.cardName && errors.cardName}
                            />

                            <TextField
                              fullWidth
                              label="Card number"
                              {...getFieldProps('cardNumber')}
                              error={Boolean(touched.cardNumber && errors.cardNumber)}
                              helperText={touched.cardNumber && errors.cardNumber}
                            />
                          </Stack>

                          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField
                              fullWidth
                              label="Expiration date"
                              placeholder="MM/YY"
                              {...getFieldProps('cardExpired')}
                              error={Boolean(touched.cardExpired && errors.cardExpired)}
                              helperText={touched.cardExpired && errors.cardExpired}
                            />

                            <TextField
                              fullWidth
                              label="Cvv"
                              {...getFieldProps('cardCvv')}
                              error={Boolean(touched.cardCvv && errors.cardCvv)}
                              helperText={touched.cardCvv && errors.cardCvv}
                            />
                          </Stack>

                          <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
                      
                            <LoadingButton type="submit" variant="contained" >
                              Save Change
                            </LoadingButton>
                          </Stack>
                        </Stack>

                      </Collapse>
                    )}
                  </OptionStyle>
                </Grid>
              );
            })}
          </Grid>
        </RadioGroup>

        {errors.payment && (
          <FormHelperText error>
            <Box component="span" sx={{ px: 2 }}>
              {touched.payment && errors.payment}
            </Box>
          </FormHelperText>
        )}
      </CardContent>
    </Card>
  );
}
