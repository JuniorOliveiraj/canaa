import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useState, useContext } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material';
import {
    Card,
    Box,
    Chip,
    Stack,
    Button,
    Switch,
    TextField,
    Typography,
    Autocomplete,
    FormHelperText,
    FormControlLabel,
    Container
} from '@mui/material';
import AlertaDefout from '../../components/Alert';
// utils
import useSettings from '../../hooks/useSettings';
//import fakeRequest from '../../utils/fakeRequest';
//
import EditorBlog from './editdocs';
import { UploadSingleFile } from '../../components/upload';
//
import AdicionarBlog from './request/addBlog';
import BlogNewPostPreview from './BlogNewPostPreview';
import { authGoogleContex } from '../../autenticação';
import axios from 'axios';
import urlApi from '../../_mock/url';
// ----------------------------------------------------------------------

const TAGS_OPTION = [
    'Finanças',
    'Tecnologia',
    'Investimentos',
    'Startups',
    'The Sting',
    'Inovação',
    "Moda",
    'Viagens',
    'Saúde e Bem-estar',
    'DIY ',
    'Desenvolvimento pessoal',
    'Inteligência Artificial',
    'Dicas de economia'
];



const AccountStyle = styled(Card)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    // backgroundColor: theme.palette.grey[500_12],
}));
// ----------------------------------------------------------------------

export default function BlogNewPostForm() {
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = useState(false);
    const { user, signed, } = useContext(authGoogleContex)
    const [coverCapa, setCoverCapa] = useState(null)
    const [openNotification, setOpenNotification] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [responseBD, setResponseBD] = useState('');
    const { themeStretch } = useSettings();
    const handleOpenPreview = () => {
        setOpen(true);
    };

    const handleClosePreview = () => {
        setOpen(false);
    };

    const NewBlogSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        content: Yup.string().min(1000).required('Content is required'),
        cover: Yup.mixed().required('Cover is required')
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            content: '',
            cover: null,
            tags: ['Tecnologia'],
            publish: true,
            comments: true,
            metaTitle: '',
            metaDescription: '',
            metaKeywords: ['Tecnologia']
        },
        validationSchema: NewBlogSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            console.log(values)
            try {
                const url = await axios.post(`${urlApi}/storage/upload`, coverCapa)
                    .then((response) => {
                        return response.data.urls[0]
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
                const subirBD = await AdicionarBlog(user, values, url);
                if(subirBD){
                    resetForm();
                    handleClosePreview();
                    setSubmitting(true);
                    enqueueSnackbar('Post success', { variant: 'success' });
                    setErrorMessage('Blog publicado');
                    setResponseBD('success');
                    setOpenNotification(true)
                }
               
            } catch (error) {
                enqueueSnackbar('Post success', { variant: 'error' });
                setErrorMessage('Erro ao publicar blog');
                setResponseBD('error');
                setOpenNotification(true)
                console.error(error);
                setSubmitting(false);
            }
        }
    });

    const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;
    const matchDownSM = useMediaQuery('(min-width:1000px)');
    const handleDrop = useCallback(

        (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                if (file.type.startsWith('image/')) {
                    setFieldValue('imagem', { file })
                    const formData = new FormData();
                    formData.append("image", file);
                    setCoverCapa(formData)
                } else {

                    console.log('Por favor, selecione um arquivo de imagem válido.');
                }
                setFieldValue('cover', {
                    ...file,
                    preview: URL.createObjectURL(file)
                });
            }
        },

        [setFieldValue]
    );

    return (
        <Container maxWidth={themeStretch ? false : 'xl'}>
            <FormikProvider value={formik}>
                <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Conteinerblog componentleft={<Typography color="text.primary">Hello, {signed && user.displayName}</Typography>}
                        commentRight={
                            <Box  >
                                <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
                                    <Button
                                        fullWidth
                                        type="button"
                                        color="inherit"
                                        variant="outlined"
                                        size="large"
                                        onClick={handleOpenPreview}
                                        sx={{ mr: 1.5 }}
                                    >
                                        Preview
                                    </Button>
                                    <LoadingButton fullWidth type="submit" variant="contained" size="large" loading={isSubmitting}>
                                        Post
                                    </LoadingButton>
                                </Stack>
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Title</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSM ? '90%' : '100%' }}>
                                <TextField
                                    fullWidth
                                    label="Post Title"
                                    {...getFieldProps('title')}
                                    error={Boolean(touched.title && errors.title)}
                                    helperText={touched.title && errors.title}
                                />

                                <TextField
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    maxRows={5}
                                    label="Description"
                                    {...getFieldProps('description')}
                                    error={Boolean(touched.description && errors.description)}
                                    helperText={touched.description && errors.description}
                                />
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Content</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSM ? '90%' : '100%' }}>
                                <div>

                                    <EditorBlog
                                        id="post-content"
                                        value={values.content}
                                        onChange={(val) => setFieldValue('content', val)}
                                        error={Boolean(touched.content && errors.content)}
                                        user={user}
                                    />
                                    {touched.content && errors.content && (
                                        <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                                            {touched.content && errors.content}
                                        </FormHelperText>
                                    )}
                                </div>
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Cover</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSM ? '90%' : '100%' }} >
                                <div>
                                    <UploadSingleFile
                                        maxSize={3145728}
                                        accept="image/*"
                                        file={values.cover}
                                        onDrop={handleDrop}
                                        error={Boolean(touched.cover && errors.cover)}
                                    />
                                    {touched.cover && errors.cover && (
                                        <FormHelperText error sx={{ px: 2 }}>
                                            {touched.cover && errors.cover}
                                        </FormHelperText>
                                    )}
                                </div>
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Meta</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSM ? '90%' : '100%' }}>
                                <Stack spacing={3}>
                                    <Autocomplete
                                        multiple
                                        freeSolo
                                        value={values.tags}
                                        onChange={(event, newValue) => {
                                            setFieldValue('tags', newValue);
                                        }}
                                        options={TAGS_OPTION.map((option) => option)}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                                            ))
                                        }
                                        renderInput={(params) => <TextField {...params} label="Tags" />}
                                    />

                                    <TextField fullWidth label="Meta title" {...getFieldProps('metaTitle')} />

                                    <TextField
                                        fullWidth
                                        multiline
                                        minRows={3}
                                        maxRows={5}
                                        label="Meta description"
                                        {...getFieldProps('metaDescription')}
                                    />

                                    <Autocomplete
                                        multiple
                                        freeSolo
                                        value={values.tags}
                                        onChange={(event, newValue) => {
                                            setFieldValue('metaKeywords', newValue);
                                        }}
                                        options={TAGS_OPTION.map((option) => option)}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                                            ))
                                        }
                                        renderInput={(params) => <TextField {...params} label="Meta keywords" />}
                                    />
                                </Stack>
                            </Box>
                        }
                    />
                    <Conteinerblog componentleft={<Typography color="text.primary">Publicar</Typography>}
                        commentRight={
                            <Box sx={{ width: matchDownSM ? '90%' : '100%' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Switch {...getFieldProps('publish')} checked={values.publish} />}
                                        label="Publish"
                                        labelPlacement="start"
                                        sx={{ mb: 1, mx: 0, width: '100%', justifyContent: 'space-between' }}
                                    />

                                    <FormControlLabel
                                        control={<Switch {...getFieldProps('comments')} checked={values.comments} />}
                                        label="Enable comments"
                                        labelPlacement="start"
                                        sx={{ mx: 0, width: '100%', justifyContent: 'space-between' }}
                                    />
                                </div>
                            </Box>
                        }
                    />

                </Form>
            </FormikProvider>

            <BlogNewPostPreview formik={formik} openPreview={open} onClosePreview={handleClosePreview} />
            <AlertaDefout errorMessage={errorMessage} responseBD={responseBD} openNotification={openNotification} setOpenNotification={setOpenNotification} />
        </Container>
    );
}


function Conteinerblog({ componentleft, commentRight }) {
    const matchDownSM = useMediaQuery('(min-width:1000px)');
    const { themeStretch } = useSettings();
    return (
        <AccountStyle sx={{ marginTop: matchDownSM ? 4 : 2, }}>
            <Container maxWidth={themeStretch ? false : 'xl'}>
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
