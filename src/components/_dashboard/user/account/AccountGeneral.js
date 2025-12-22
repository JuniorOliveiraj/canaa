import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import {
  Box,
  Grid,
  Card,
  Stack,
  Switch,
  TextField,
  FormControlLabel,
  Typography,
  FormHelperText
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import { useContext } from 'react';
import { authGoogleContex } from '../../../../autenticação';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import { UploadAvatar } from '../../../upload';
// utils
import { fData } from '../../../../utils/formatNumber';
//
import countries from '../countries';
import AlertaDefout from '../../../Alert';
import uploadImageToFirebase from '../../../../pages/noticiasAll/produtos/bd/subirImagem';
import editarUsusario from '../../../../pages/perfil/bd/editarUsuario';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const [openNotification, setOpenNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [responseBD, setResponseBD] = useState('');
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { accountUser, reloadaccountUserSet } = useContext(authGoogleContex);
  const user = accountUser
  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      displayName: user.displayName || '',
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      permission_level: user.permission_level,
      country: user.country,
      address: user.address,
      state: user.state,
      city: user.city,
      zipCode: user.zipCode,
      about: user.about,
      isPublic: true,
      role: user.role,
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        // await updateProfile({ ...values });
        console.log(values)
        if(user.accessToken){
          if (values.photoURL.file) {
            try {
              const caminho = 'photoURL';
              const url = await uploadImageToFirebase(caminho, values.photoURL.file);
              if (url) {
                const uploadEditar = await editarUsusario(user, values, url);
                console.log(uploadEditar)
                if (uploadEditar) {
                  const user = {
                    uid: uploadEditar.data.user.id,
                    email: uploadEditar.data.user.email,
                    displayName: uploadEditar.data.user.name,
                    updated_at: uploadEditar.data.user.updated_at,
                    accessToken: uploadEditar.data.user.token,
                    permission_level: uploadEditar.data.user.permission_level,
                    role: uploadEditar.data.user.role,
                    photoURL: uploadEditar.data.user.photoURL,
                  };
                  localStorage.setItem("user", JSON.stringify(user));
                  reloadaccountUserSet(1);
                  setErrorMessage('Usuario alterado!');
                  setResponseBD('success');
                  setOpenNotification(true)
                }
              }
  
            } catch (error) {
              console.log("Erro aosubir os dados", error);
              setErrorMessage('erro interno!');
              setResponseBD('error');
              setOpenNotification(true)
            }
          } else {
            try {
              const url = user.photoURL ? user.photoURL : '.';
              const uploadEditar = await editarUsusario(user, values, url);
              console.log(uploadEditar)
              if (uploadEditar) {
                const user = {
                  uid: uploadEditar.data.user.id,
                  email: uploadEditar.data.user.email,
                  displayName: uploadEditar.data.user.name,
                  updated_at: uploadEditar.data.user.updated_at,
                  accessToken: uploadEditar.data.user.token,
                  permission_level: uploadEditar.data.user.permission_level,
                  role: uploadEditar.data.user.role,
                  photoURL: uploadEditar.data.user.photoURL,
                };
                localStorage.setItem("user", JSON.stringify(user));
                reloadaccountUserSet(1);
                setErrorMessage('Usuario alterado!');
                setResponseBD('success');
                setOpenNotification(true)
  
              }
            } catch (error) {
              console.log(error);
              setErrorMessage('erro interno!');
              setResponseBD('error');
              setOpenNotification(true)
  
            }
          }
          enqueueSnackbar('Update success', { variant: 'success' });
        }else{
          setErrorMessage('você deve fazer login para continuar!');
              setResponseBD('error');
              setOpenNotification(true)
        }
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.code });
          setSubmitting(false);
        }
      }
    }
  });

  const { values, errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        if (file.type.startsWith('image/')) {

          setFieldValue('photoURL', {
            ...file,
            file: file,
            preview: URL.createObjectURL(file)
          });
        } else {
          alert('apenas imagens')
        }
      }
    },
    [setFieldValue]
  );
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
              <UploadAvatar
                accept="image/*"
                file={values.photoURL}
                maxSize={3145728}
                onDrop={handleDrop}
                error={Boolean(touched.photoURL && errors.photoURL)}
                caption={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />

              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {touched.photoURL && errors.photoURL}
              </FormHelperText>

              <FormControlLabel
                control={<Switch {...getFieldProps('isPublic')} color="primary" />}
                labelPlacement="start"
                label="Public Profile"
                sx={{ mt: 5 }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Name" {...getFieldProps('displayName')} />
                  <TextField fullWidth disabled label="Email Address" {...getFieldProps('email')} />
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Role" {...getFieldProps('role')} />
                  <TextField fullWidth disabled label="Permissões" {...getFieldProps('permission_level')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Phone Number" {...getFieldProps('phoneNumber')} />
                  <TextField fullWidth label="Address" {...getFieldProps('address')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    fullWidth
                    label="Country"
                    placeholder="Country"
                    {...getFieldProps('country')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.country && errors.country)}
                    helperText={touched.country && errors.country}
                  >
                    <option value="" />
                    {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField fullWidth label="State/Region" {...getFieldProps('state')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="City" {...getFieldProps('city')} />
                  <TextField fullWidth label="Zip/Code" {...getFieldProps('zipCode')} />
                </Stack>

                <TextField {...getFieldProps('about')} fullWidth multiline minRows={4} maxRows={4} label="About" />
              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  Save Changes
                </LoadingButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
      <AlertaDefout errorMessage={errorMessage} responseBD={responseBD} openNotification={openNotification} setOpenNotification={setOpenNotification} />
    </FormikProvider>
  );
}
