
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Stack, alpha, Button } from '@mui/material';
import { useState, useContext } from 'react';
import uploadImageToFirebase from '../../noticiasAll/produtos/bd/subirImagem';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import StyledInput from './style';
import AdicionaNoticia from './requisicoes/addNotidia';
//---context --------------
import { authGoogleContex } from '../../../autenticação';

// ----------------------------------------------------------------------

import { forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


















import { LoadingButton } from '@mui/lab';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.grey[999],
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

const Descrition = styled('p')(({ theme }) => ({
    maxWidth: '50%',
    fontSize: '1em',
    margin: 10,
}));
export default function Adicionarnosticias() {
    const [imagens, setImagens] = useState(null)
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const matches = useMediaQuery('(min-width:900px)');
    const { user } = useContext(authGoogleContex);
    const [errorMessage, setErrorMessage] = useState('');
    const [responseBD, setResponseBD] = useState('')
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
    const [state, setState] = useState({
        openNotification: false,
        vertical: 'top',
        horizontal: 'right',

    });
    const Alert = forwardRef(function Alert(props, ref, state) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleCloseMensage = () => {
        setState({ ...state, openNotification: false });
    }
    const { vertical, horizontal, openNotification } = state;

    /******************
    validar formulario 
    ************************** */
    const LoginSchema = Yup.object().shape({
        content: Yup.string().required('content is required'),
        title: Yup.string().required('title is required'),
        description: Yup.string().required('description is required'),
        url: Yup.string().required('url is required'),
    });
    const defaultValues = {
        content: '',
        title: '',
        description: '',
        url: '',
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
        console.log(user)
        if (selectedImageFile) {
            try {
                if (user.role === 'ADM') {
                    const caminho = 'imagen-noticias';
                    const url = await uploadImageToFirebase(caminho, selectedImageFile);
                    const userToken = user.accessToken;
                    const id = user.uid;
                    const name = user.displayName;
                    const subirBD = await AdicionaNoticia(data, url, userToken, id, name)
                    if (subirBD) {
                        methods.reset();
                        setImagens(null);
                        setState({ ...state, openNotification: true });
                        setErrorMessage('noticia adicionada com sucesso ');
                        setResponseBD('success')
                    } else {
                        setState({ ...state, openNotification: true });
                        setErrorMessage('erro interno');
                        setResponseBD('error')
                    }
                } else {
                    setState({ ...state, openNotification: true });
                    setErrorMessage('somnete ADM pode adicionar noticias');
                    setResponseBD('error')
                }
            } catch (error) {
                setState({ ...state, openNotification: true });
                setErrorMessage(error.response.data.error);
                setResponseBD('error')
            }
        } else {
            setState({ ...state, openNotification: true });
            setErrorMessage('adicione uma imagem ');
            setResponseBD('error')
        }
        //  login(data.email, data.password).then((val) => val ? null:setState({ ...state, openNotification: true }) );


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
                        <Button component="label"   >
                            <img
                                style={{ width: 200, margin: 4, marginBottom: 10 }}
                                alt="teste junior"
                                src={imagens ? imagens : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9JmF81YK9fgD10FNfxuxHm2qZdf5I9D_6CVfG2v8KPJlBg4CUNDPBx6LPDPyscxDLJs&usqp=CAU'}
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
                                    bgcolor: (theme) => alpha(theme.palette.grey[999], 0.72),
                                    '& > :not(style)': { m: 1.5, width: !matches ? '35ch' : '80%' },
                                }}>
                                    <RHFTextField name="title" label="title " />
                                    <RHFTextField name="description" label="descrição  " />
                                    <RHFTextField name="url" label=" link referencia " />
                                    <RHFTextField multiline name="content" label="conteudo da noticia " />

                                </Paper>
                            </Stack>
                            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ width: matches ? '18ch' : '90%', float: matches && 'right', m: matches && 1.5, marginRight: matches && 9, marginTop: !matches && 3 }}>
                                save
                            </LoadingButton>
                        </FormProvider>
                    </Item>
                </Grid>
            </Grid>
            <div>
                <Snackbar
                    open={openNotification} autoHideDuration={6000}
                    onClose={handleCloseMensage}
                    anchorOrigin={{ vertical, horizontal }}
                    key={vertical + horizontal}
                >
                    <Alert
                        onClose={handleCloseMensage}
                        severity={responseBD} sx={{ width: window.innerWidth < 500 ? '70%' : '100%' }}
                    >
                        {errorMessage}

                    </Alert>
                </Snackbar>
            </div>
        </Box>
    );
}
