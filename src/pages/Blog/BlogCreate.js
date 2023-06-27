import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Button, Container, Stack, Typography, Breadcrumbs, Link, Autocomplete, Chip, TextField } from '@mui/material';
import { styled } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { FormProvider, RHFTextField } from '../../components/hook-form';
import { useMediaQuery } from '@mui/material';
import StyledInput from '../perfil/adicionarNoticias/style';
import EditorBlog from './editdocs';
//import { QuillEditor } from '../../components/editor';
import AlertaDefout from '../../components/Alert';
import { useContext } from 'react';
import { authGoogleContex } from '../../autenticação';
import * as Yup from 'yup';
import RequisicaoGet from '../../_mock/requisição';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui

import { LoadingButton } from '@mui/lab';
import { useState } from 'react';

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
}));
const ImageContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: 250,
    position: 'relative',
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));
const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));
const TAGS_OPTION = [
    'Toy Story 3',
    'Logan',
    'Full Metal Jacket',
    'Dangal',
    'The Sting',
    '2001: A Space Odyssey',
    "Singin' in the Rain",
    'Toy Story',
    'Bicycle Thieves',
    'The Kid',
    'Inglourious Basterds',
    'Snatch',
    '3 Idiots'
];

const BlogCreate = () => {
    const matchDownSM = useMediaQuery('(min-width:1000px)');
    const matchDownSMMoba = useMediaQuery('(min-width:600px)');
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [imagens, setImagens] = useState(null);
    const [conteudo, setConteudo] = useState('');
    const [openNotification, setOpenNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [responseBD, setResponseBD] = useState('');
    const { acoontUser, user } = useContext(authGoogleContex);
    const [tagsvalue, setTagsvalue] = useState(['Logan'])
    const onImageChange = (event) => {
        const file = event.target.files[0];
        if (file.type.startsWith('image/')) {
            const imageURL = URL.createObjectURL(file);
            setImagens(imageURL);
            setSelectedImageFile(file);
        } else {
            setErrorMessage('selecione um arquivo de imagem válido');
            setResponseBD('error');
            setOpenNotification(true)
            console.log('Por favor, selecione um arquivo de imagem válido.');
        }
    };

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const LoginSchema = Yup.object().shape({
        PostTitle: Yup.string().required('PostT itle is required').required('PostTitle is required'),
        ShortDescription: Yup.string().required('Short Description is required'),
        SEOTitle: Yup.string().required('email address').required('SEO Title is required'),
        SEODescription: Yup.string().required('SEO Description is required'),
        Tags: Yup.string().required('Tags is required'),
    });

    const defaultValues = {
        PostTitle: '',
        ShortDescription: '',
        SEOTitle: '',
        SEODescription: '',
        Tags: '',
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
        if (!selectedImageFile) {
            setErrorMessage('selecione uma imagemprincipal para o blog!');
            setResponseBD('error');
            setOpenNotification(true)
        } else {
            try {
                const dataBlog = {
                    authorization: user && user.accessToken,
                    data: {
                        userId: user && user.uid,
                        imagem: selectedImageFile,
                        conteudo,
                        data,
                    },
                    caminho: '/private'
                };
                const subirBD = await RequisicaoGet(dataBlog);
                if (subirBD) {
                    console.log(subirBD)
                    setErrorMessage('blog subiu com sucesso ');
                    setResponseBD('success');
                    setOpenNotification(true);

                }
            } catch (error) {
                console.log(error)
                setErrorMessage('erro');
                setResponseBD('error');
                setOpenNotification(true);
            }
        }
    };
    return (
        <Page title="Blog:create ">
            <Container maxWidth={'xl'}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" component={RouterLink} to="/dashboard" >
                                Dashboard
                            </Link>
                            <Typography color="text.primary">Blog</Typography>
                            <Typography color="text.primary">Create</Typography>
                        </Breadcrumbs>
                    </div>
                </Stack>
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>


                    <Conteinerblog componentleft={<Typography color="text.primary">Hello, {acoontUser[0].displayName}</Typography>}
                        commentRight={
                            <Box  >
                                <Button sx={{ margin: 2 }} component={RouterLink} to="#" startIcon={<Iconify icon="clarity:cancel-line" />} onClick={() => { methods.reset(); setImagens(null) }}>
                                    Cancel
                                </Button>
                                <LoadingButton sx={{ width: matchDownSMMoba ? 200 : 100 }} size="large" type="submit" variant="contained" loading={isSubmitting} startIcon={<Iconify icon="icon-park-solid:up-one" />}>
                                    Publish
                                </LoadingButton>
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Basic details</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSMMoba ? "90%" : '100%' }}>
                                <RHFTextField name="PostTitle" label="Post Title" sx={{ margin: 1 }} />
                                <RHFTextField name="ShortDescription" label="Short Description" sx={{ margin: 1 }} />
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Post cover</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSM ? "90%" : "100%" }}>
                                <ImageContainer>

                                    <Image src={imagens ? imagens : 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80'} />
                                </ImageContainer>
                                <Box>
                                    <Button component="label" sx={{ width: '100%', color: 'text.primary', marginTop: 5 }}>
                                        <Iconify icon="solar:upload-broken" width={70} height={70} />
                                        <StyledInput type="file" multiple accept="image/*" onChange={onImageChange} />
                                        <Box padding={matchDownSMMoba ? 3 : 1}>
                                            <Typography variant="h6" sx={{ fontSize: !matchDownSMMoba && 14, }}>Click-toupload or drag and drop</Typography>
                                            <Typography variant="p" sx={{ fontSize: !matchDownSMMoba && 10, }}>
                                                Allowed *.jpeg, *.jpg, *.png, *.gif
                                                max size of 3.1 MB
                                            </Typography>
                                        </Box>
                                    </Button>

                                </Box>
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">create</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSMMoba ? "90%" : '100%' }}>
                                <EditorBlog setConteudo={setConteudo} teste='oie' />
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Meta</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSMMoba ? "90%" : '100%' }}>

                                <Autocomplete
                                    name="Tags"
                                    multiple
                                    freeSolo
                                    sx={{marginLeft:1, width:"100%"}}
                                    value={tagsvalue}
                                    onChange={(event, newValue) => {
                                        setTagsvalue(newValue);
                                    }}
                                    options={TAGS_OPTION.map((option) => option)}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => <TextField {...params} name="Tags" label="Tags" error={false} />}
                                />
                                <RHFTextField name="SEOTitle" label="SEO Title" sx={{ margin: 1 }} />
                                <RHFTextField name="SEODescription" label="SEO Description" sx={{ margin: 1 }} />
                            </Box>
                        }
                    />
                </FormProvider>
            </Container>
            <AlertaDefout errorMessage={errorMessage} responseBD={responseBD} openNotification={openNotification} setOpenNotification={setOpenNotification} />

        </Page>
    )
}


function Conteinerblog({ componentleft, commentRight }) {
    const matchDownSM = useMediaQuery('(min-width:1000px)');
    return (
        <AccountStyle sx={{ marginTop: matchDownSM ? 4 : 2 }}>
            <Container>
                {
                    matchDownSM ? <Stack direction={"row"} flexWrap="wrap" useFlexGap justifyContent={"space-between"} >
                        {componentleft}
                        {commentRight}
                    </Stack> :
                        <Stack >
                            <Box sx={{ margin: 1 }}> {componentleft} </Box>
                            <Box sx={{ margin: 1 }}> {commentRight}  </Box>
                        </Stack>
                }

            </Container>
        </AccountStyle>
    )
}
export default BlogCreate;