import * as Yup from 'yup';
import { useState, useContext, forwardRef } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { authGoogleContex } from '../../../autenticação';
// ----------------------------------------------------------------------
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Box, Button, Typography } from '@mui/material';
import styled from "styled-components";
import Iconify from '../../../components/Iconify';
//---------------------------------------
export default function FormProdutosAgro() {
    const { errorMessage } = useContext(authGoogleContex);

    // ****** notificação de erro de login *******
    const [state, setState] = useState({
        openNotification: false,
        vertical: 'top',
        horizontal: 'right',

    });
    const { vertical, horizontal, openNotification } = state;
    const handleClose2 = () => {
        setState({ ...state, openNotification: false });

    };
    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    // ***********************************
    const LoginSchema = Yup.object().shape({
        name: Yup.string().required('Nome não pode estar vazio '),
        number: Yup.string().required('valor não pode estar vazio '),
    });

    const defaultValues = {
        name: '',
        number: '',
        remember: true,
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data, e) => {
        console.log(data, e)


    };

    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setSelectedImage(imageURL);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Snackbar
                        open={openNotification} autoHideDuration={6000}
                        onClose={handleClose2}
                        anchorOrigin={{ vertical, horizontal }}
                        key={vertical + horizontal}
                    >
                        <Alert
                            onClose={handleClose2}
                            severity="error" sx={{ width: window.innerWidth < 500 ? '70%' : '100%' }}
                        >
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </div>
                <Stack spacing={3}>
                    <RHFTextField name="name" label="Name Produto" />
                    <RHFTextField name="number" label="valor produto" />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <RHFCheckbox name="remember" label="ativo" />
                    <Button component="label" variant="contained">
                        <StyledInput type="file" onChange={handleFileChange} />
                                               {selectedImage ? (
                            <Box sx={{ textAlign: 'center', position: 'relative' }}>
                                <Typography variant="body2" sx={{ position: 'absolute', top: '0px', left: 0, right: 0 }}>
                                <Iconify icon="line-md:uploading-loop" sx={{ color: 'text.disabled', width: 35, height: 35 }} />
                                </Typography>
                                <img style={{ width: 90, borderRadius: 8 }} src={selectedImage} alt="Selected" />
                            </Box>
                        ):  <Iconify icon="line-md:uploading-loop" sx={{ color: 'text.disabled', width: 20, height: 20 }} />}
                    </Button>
                </Stack>
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ marginTop: 2 }}>
                    OK
                </LoadingButton>
            </FormProvider>
        </Box>
    );
}




const StyledInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 148px;
  height: 46px;
  cursor: pointer;
`;
