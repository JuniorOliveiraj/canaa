
import { styled } from '@mui/material/styles';
import { Grid, Stack, Box, Paper, alpha, } from '@mui/material';
import { useState, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../components/hook-form';
import emailjs from '@emailjs/browser'; 
//---context --------------

import { LoadingButton } from '@mui/lab';

const sendEmail = (e) => {
    return emailjs.send('SERVICE_ENVIO', 'template_9ali4e4', e, 'boZRDzowP6-_u3-h9')
        .then((result) => {
            console.log('foiiiiii')
            console.log(result.text);
            return true
        }, (error) => {
            console.log('erro');
            console.log(error.text);
            return false;
        });
};

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


export default function FormContato() {
    const matches = useMediaQuery('(min-width:900px)');

    const methodsRef = useRef(null); // criar uma referência para o objeto 'methods'

    /******************
    validar formulario 
    ************************** */
    const [defoutEmail, setdefoutEmail] = useState(false);
    const [defoutName, setdefoutName] = useState(false);
    const [mensagen, setMensagen] = useState(false);
    const LoginSchema = Yup.object().shape({
        email: !defoutEmail ? '' : Yup.string().email('Email must be a valid email address').required('Email is required'),
        name: !defoutName ? '' : Yup.string().required('name is required'),
        mensagen: !mensagen ? '' : Yup.string().required('comunity is required'),
    });
    const defaultValues = {
        email: '',
        name: '',
        mensagen: '',
    };
    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    methodsRef.current = methods; // atribuir a referência ao objeto 'methods'

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data, e) => {
        if (!defoutEmail) {
            alert("digite um email")
            defoutEmail(false)
        } else if (!defoutName) {
            alert('digite um nome')
        } else {
            sendEmail(data).then((val) => {
                if (val) {
                    alert('E-mail enviado com sucesso!');
                    methods.reset(); // redefinir os campos do formulário após o envio do e-mail
                } else {
                    alert('Erro ao enviar o e-mail.');
                }
            });
        }
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={matches ? 6 : 22} md={8}>

                    <Item>
                        <FormProvider
                            methods={methods}
                            onSubmit={handleSubmit(onSubmit)}>
                            <Stack >

                                <Paper spacing={2} sx={{
                                    backgroundColor: (theme) => alpha(theme.palette.grey[999], 1),

                                    '& > :not(style)': { m: 1.5, width: '80%' },
                                }}>

                                    {!defoutName ? <RHFTextField name="name" label="Name" value={""} onClick={e => { setdefoutName(true) }} /> : <RHFTextField name="name" label="Name" />}
                                    {!defoutEmail ? <RHFTextField name="email" label="Email address" value={""} onClick={e => { setdefoutEmail(true) }} /> : <RHFTextField name="email" label="Email address" />}
                                    {!mensagen ? <RHFTextField multiline name="mensagen" label="Mensagen" value={""} onClick={e => { setMensagen(true) }} /> : <RHFTextField multiline name="mensagen" label="Mensagen" />}

                                </Paper>
                            </Stack>
                            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ width: '18ch', float: 'right', m: 1.5 }}>
                                submit
                            </LoadingButton>
                        </FormProvider>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
