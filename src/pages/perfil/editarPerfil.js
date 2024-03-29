
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Avatar, Stack, alpha, Button } from '@mui/material';

import AlertaDefout from '../../components/Alert';
import { useState, useContext, } from 'react';
import uploadImageToFirebase from '../noticiasAll/produtos/bd/subirImagem';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../components/hook-form';
import editarUsusario from './bd/editarUsuario';
import StyledInput from './adicionarNoticias/style';
//---context --------------
import { authGoogleContex } from '../../autenticação';

import { LoadingButton } from '@mui/lab';
import useSettings from '../../hooks/useSettings';
const Item = styled(Paper)(({ theme }) => ({
  
    ...theme.typography.body,
    padding: theme.spacing(1),
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: ' center',
    flexWrap: 'wrap',
    color: theme.palette.text.secondary,
    margin: 10,
}));
// const Item2 = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body,
//     padding: theme.spacing(1),
//     display: 'flex',
//     flexWrap: 'wrap',
//     color: theme.palette.text.secondary,
//     justifyContent: ' right',
//     margin: 10,
// }));
const AvatarStyle = styled(Avatar)(({ theme, matches }) => ({
    zIndex: 9,
    width: 150,
    height: 150,
    margin: 10,
    border: '3px solid #ffffff',

}));
const Descrition = styled('p')(({ theme }) => ({
    maxWidth: '50%',
    fontSize: '1em',
    margin: 10,
}));
export default function EditarPerfil() {
    const [imagens, setImagens] = useState(null)
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const matches = useMediaQuery('(min-width:900px)');
    const { acoontUser, user, reloadAcoontUserSet } = useContext(authGoogleContex);
    const [defoutEmail, setdefoutEmail] = useState(false);
    const [defoutName, setdefoutName] = useState(false);
    const [defoutCompany, setdefoutCompany] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [responseBD, setResponseBD] = useState('');
    const {themeMode} = useSettings();
    const onImageChange = (event) => {
        const file = event.target.files[0];

        if (file.type.startsWith('image/')) {
            const imageURL = URL.createObjectURL(file);
            setImagens(imageURL);
            setSelectedImageFile(file);
        } else {
            // Arquivo selecionado não é uma imagem válida
            console.log('Por favor, selecione um arquivo de imagem válido.');
        }
    };

    const EditPerfilSchema = Yup.object().shape({
        email: !defoutEmail ? '' : Yup.string().email('Email must be a valid email address').required('Email is required'),
        name: !defoutName ? '' : Yup.string().required('name is required'),
        company: !defoutCompany ? '' : Yup.string().required('company is required'),
    });

    const defaultValues = {
        email: '',
        name: '',
        role: '',
        company: '',

    };

    const methods = useForm({
        resolver: yupResolver(EditPerfilSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data, e) => {
        const upload = {
            email: data.email ? data.email : acoontUser[0].email,
            name: data.name ? data.name : acoontUser[0].displayName,
            role: data.role ? data.role : acoontUser[0].role,
            company: data.company ? data.company : acoontUser[0].company,
        }
        if (selectedImageFile) {
            try {
                const caminho = 'avatarUrl';
                const url = await uploadImageToFirebase(caminho, selectedImageFile);
                if (url) {
                    const uploadEditar = await editarUsusario(user, upload, url);
                    console.log(uploadEditar)
                    if (uploadEditar) {
                        const user = {
                            uid: uploadEditar.data.user.id,
                            email: uploadEditar.data.user.email,
                            displayName: uploadEditar.data.user.name,
                            updated_at: uploadEditar.data.user.updated_at,
                            accessToken: uploadEditar.data.user.token,
                            role: uploadEditar.data.user.role,
                            company: uploadEditar.data.user.company,
                            photoURL: uploadEditar.data.user.avatarUrl,
                        };
                        localStorage.setItem("user", JSON.stringify(user));
                        console.log(user)
                        reloadAcoontUserSet(1);
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
                const uploadEditar = await editarUsusario(user, upload, url);
                console.log(uploadEditar)
                if (uploadEditar) {
                    const user = {
                        uid: uploadEditar.data.user.id,
                        email: uploadEditar.data.user.email,
                        displayName: uploadEditar.data.user.name,
                        updated_at: uploadEditar.data.user.updated_at,
                        accessToken: uploadEditar.data.user.token,
                        role: uploadEditar.data.user.role,
                        company: uploadEditar.data.user.company,
                        photoURL: uploadEditar.data.user.avatarUrl,
                    };
                    localStorage.setItem("user", JSON.stringify(user));
                    reloadAcoontUserSet(1);
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
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={matches ? 6 : 22} md={4} >
                    <Item sx={{
                        paddingTop: 10,
                        paddingBottom: 10
                    }}>
                        <Typography variant="h4" >

                        </Typography>
                        <Button component="label" >
                            <AvatarStyle
                                alt="teste junior"
                                src={imagens ? imagens : acoontUser[0].photoURL}
                            />
                            <StyledInput type="file" multiple accept="image/*" onChange={onImageChange} />
                        </Button>
                        <Descrition maxWidth="50%" backgroundColor="red">
                            Allowed *.jpeg, *.jpg, *.png, *.gif
                            max size of 3.1 MB
                        </Descrition>
                    </Item>
                </Grid>
                <Grid xs={matches ? 6 : 22} md={8}>

                    <Item>
                        <FormProvider
                            methods={methods}
                            onSubmit={handleSubmit(onSubmit)}>
                            <Stack >

                                <Paper spacing={2} sx={{
                                    bgcolor: themeMode  ===  'dark' ?(theme) => alpha(theme.palette.grey[800], 0.99) : (theme) => alpha(theme.palette.grey[100], 0.99),
                                    '& > :not(style)': { m: 1.5, width: matches ? '50ch' : '35ch' },
                                }}>
                                    {!defoutName ? <RHFTextField name="name" label="name " value={acoontUser[0].displayName} onClick={e => { setdefoutName(true) }} /> : <RHFTextField name="name" label="name " />}
                                    {!defoutEmail ? <RHFTextField name="email" label="Email address" value={acoontUser[0].email ? acoontUser[0].email : ""} onClick={e => { setdefoutEmail(true) }} /> : <RHFTextField name="email" label="Email address" />}
                                     <RHFTextField name="role" label="role" value={acoontUser[0].role ? acoontUser[0].role : ""} disabled /> :
                                    {!defoutCompany ? <RHFTextField name="company" label="company" value={acoontUser[0].company ? acoontUser[0].company : ""} onClick={e => { setdefoutCompany(true) }} /> : <RHFTextField name="company" label="company" />}
                                </Paper>
                            </Stack>
                            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ width: '18ch', float: 'right', m: 1.5 }}>
                                save
                            </LoadingButton>
                        </FormProvider>
                    </Item>
                </Grid>
            </Grid>
            <AlertaDefout errorMessage={errorMessage} responseBD={responseBD} openNotification={openNotification} setOpenNotification={setOpenNotification} />
        </Box>
    );
}



