import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useContext, useState, useEffect } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material/styles';
import {
  Card,
  Grid,
  Chip,
  Stack,
  Button,
  Switch,
  TextField,
  Typography,
  Autocomplete,
  FormHelperText,
  FormControlLabel
} from '@mui/material';
// utils
//
//import { QuillEditor } from '../../editor';
import { UploadSingleFile } from '../../upload';
//
import BlogNewPostPreview from './BlogNewPostPreview';
import EditorBlog from '../../../pages/Blog/editdocs';
import AlertaDefout from '../../Alert';

import { useDispatch } from '../../../redux/store';
import { createPost, } from '../../../redux/slices/blog';
import { authGoogleContex } from '../../../autenticação';
import uploadImageToFirebase from '../../../pages/noticiasAll/produtos/bd/subirImagem';
import urlApi from '../../../_mock/url';
import axios from 'axios';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1)
}));

// ----------------------------------------------------------------------
BlogNewPostForm.propTypes = {
  id: <PropTypes className="string"></PropTypes>,
  status: PropTypes.bool

};
export default function BlogNewPostForm({ id, status }) {

  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [responseBD, setResponseBD] = useState('');
  const [tags, setTags] = useState(['Blog']); // O estado para armazenar as tags selecionadas
  const [tagsOptions, setTagsoptions] = useState(['carregando...']);
  const { user } = useContext(authGoogleContex);




  useEffect(() => {
    axios.get(`${urlApi}/blog/list/tags`).then((response) => {
      setTagsoptions(response.data.data);
    });
  }, [tags,]);
  useEffect(() => {
    const Fatch = async () => {
      await axios.get(`${urlApi}/blog/read?id=${id}`).then((response) => {
        setFieldValue('title', response.data.BLOG.title);
        setFieldValue('description', response.data.BLOG.description);
        setFieldValue('content', response.data.BLOG.body);
        setFieldValue('cover', response.data.BLOG.cover);
        setFieldValue('tags', response.data.BLOG.tags);
        setFieldValue('metaTitle', response.data.BLOG.meta[0].description);
        setFieldValue('metaDescription', response.data.BLOG.meta[0].title);
        setTags(response.data.BLOG.tags)
      });
    }
    if (id) Fatch();

  }, [id,  setTags]);


  const dispatch = useDispatch();
  const handleOpenPreview = () => {
    setOpen(true);
  };

  const handleClosePreview = () => {
    setOpen(false);
  };
  const NewBlogSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .max(240, 'Title must be at most 240 characters long'),
    description: Yup.string()
      .required('Description is required')
      .max(240, 'Description must be at most 240 characters long'),
    content: Yup.string().min(1000).required('Content is required'),
    cover: Yup.mixed().required('Cover is required')
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      content: '',
      cover: null,
      tags: ['Blog'],
      publish: true,
      comments: true,
      blogType: true,
      metaTitle: '',
      metaDescription: '',
      metaKeywords: ['Blog']
    },
    validationSchema: NewBlogSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        if (user.accessToken) {
          const caminho = 'imagensBlog';
          const url = values.imagem ? await uploadImageToFirebase(caminho, values.imagem.file): values.cover;
          console.log(url)
          const post = await dispatch(createPost({ user, values, url, id }));
          if (!post) {
            // resetForm();
            handleClosePreview();
            setSubmitting(true);
            enqueueSnackbar('Post success', { variant: 'success' });
            setErrorMessage('Blog publicado');
            setResponseBD('success');
            setOpenNotification(true)
          } else {
            enqueueSnackbar('Post error', { variant: 'error' });
            setErrorMessage('Erro ao publicar blog');
            setResponseBD('error');
            setOpenNotification(true)
            setSubmitting(false);
          }
        } else {
          console.log(values)
          enqueueSnackbar('Post error', { variant: 'error' });
          setErrorMessage('Faça login');
          setResponseBD('error');
          setOpenNotification(true)
          setSubmitting(false);
        }



      } catch (error) {
        enqueueSnackbar('Post error', { variant: 'error' });
        setErrorMessage('Erro ao publicar blog');
        setResponseBD('error');
        setOpenNotification(true)
        console.error(error);
        setSubmitting(false);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        if (file.type.startsWith('image/')) {
          setFieldValue('imagem', { file })
          const formData = new FormData();
          formData.append("image", file);
          setFieldValue('cover', {
            ...file,
            preview: URL.createObjectURL(file)
          })
        } else {

          console.log('Por favor, selecione um arquivo de imagem válido.');
        }
       
        
        ;
      }
    },

    [setFieldValue]
  );

  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Post Title"
                    {...getFieldProps('title')}
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                    value={values.title}

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

                  <div>
                    <LabelStyle>Content</LabelStyle>
                    <EditorBlog
                      id="post-content"
                      value={values.content}
                      onChange={(val) => setFieldValue('content', val)}
                      error={Boolean(touched.content && errors.content)}
                    //user={user}
                    />
                    {touched.content && errors.content && (
                      <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                        {touched.content && errors.content}
                      </FormHelperText>
                    )}
                  </div>

                  <div>
                    <LabelStyle>Cover</LabelStyle>
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
                </Stack>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Stack spacing={3}>
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
                    <FormControlLabel
                      control={<Switch {...getFieldProps('blogType')} checked={values.blogType} />}
                      label="Blog"
                      labelPlacement="start"
                      sx={{ mx: 0, width: '100%', justifyContent: 'space-between' }}
                    />
                  </div>

                  <Autocomplete
                    multiple
                    freeSolo
                    value={tags}
                    onChange={(event, newValue) => {
                      setFieldValue('tags', newValue);
                      setTags(newValue);
                    }}
                    options={tagsOptions}
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
                    options={tagsOptions}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip key={option} size="small" label={option} {...getTagProps({ index })} />
                      ))
                    }
                    renderInput={(params) => <TextField {...params} label="Meta keywords" />}
                  />
                </Stack>
              </Card>

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
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
      <AlertaDefout errorMessage={errorMessage} responseBD={responseBD} openNotification={openNotification} setOpenNotification={setOpenNotification} />
      <BlogNewPostPreview formik={formik} openPreview={open} onClosePreview={handleClosePreview} />
    </>
  );
}

