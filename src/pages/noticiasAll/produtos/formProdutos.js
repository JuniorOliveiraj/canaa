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
import MuiAlert from '@mui/material/Alert';
import { Box, Button, Typography } from '@mui/material';
import styled from "styled-components";
import Iconify from '../../../components/Iconify';
//---------------------------------------
import uploadImageToFirebase from './bd/subirImagem';
import AdicionarProduto from './bd/addProdutos';
export default function FormProdutosAgro({ feixar, ...other }) {
    const {  logado, user } = useContext(authGoogleContex);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    // ****** notificação de erro de login *******



    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    // ***********************************
    const LoginSchema = Yup.object().shape({
        name: Yup.string().required('Nome não pode estar vazio '),
        valor: Yup.string().required('valor não pode estar vazio '),
        quantidade: Yup.string().required('valor não pode estar vazio '),
    });

    const defaultValues = {
        name: '',
        valor: '',
        quantidade: '',
        ativo: true,
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file.type.startsWith('image/')) {
            const imageURL = URL.createObjectURL(file);
            setSelectedImage(imageURL);
            setSelectedImageFile(file);
        } else {
            // Arquivo selecionado não é uma imagem válida
            console.log('Por favor, selecione um arquivo de imagem válido.');
        }
    };
    const onSubmit = async (data, e) => {
        if (selectedImageFile) {
            try {
                const url = await uploadImageToFirebase(selectedImageFile);
                const userToken = user.accessToken;
                const subirBD = await AdicionarProduto(logado, data, url, userToken)
                if (subirBD) feixar(true);
            } catch (error) {
                console.log("Erro aosubir os dados", error);
            }
        } else {
            const userToken = user.accessToken;
            const url = '';
            const subirBD = await AdicionarProduto(logado, data, url, userToken)
            if (subirBD) feixar(true);
        }

    };



    return (
        <Box sx={{ width: '100%' }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <RHFTextField name="name" label="Name Produto" />
                    <RHFTextField name="valor" label="valor produto" type='number' />
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <RHFCheckbox name="ativo" label="ativo" />
                    <Button component="label" variant="contained">
                        <StyledInput type="file" onChange={handleFileChange} />
                        {selectedImage ? (
                            <Box sx={{ textAlign: 'center', position: 'relative' }}>
                                <Typography variant="body2" name='image' sx={{ position: 'absolute', top: '0px', left: 0, right: 0 }}>
                                    <Iconify icon="line-md:uploading-loop" sx={{ color: 'text.disabled', width: 35, height: 35 }} />
                                </Typography>
                                <img style={{ width: 90, borderRadius: 8 }} src={selectedImage} alt="Selected" />
                            </Box>
                        ) : <Iconify icon="line-md:uploading-loop" sx={{ color: 'text.disabled', width: 20, height: 20 }} />}
                    </Button>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                    <RHFTextField name="quantidade" label="quantidade estoque " type='number' sx={{ width: 200 }} />
                </Stack>
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ marginTop: 2 }} >
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
