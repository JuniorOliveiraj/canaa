import { TableFooter, Grid, Link } from "@mui/material";
import { TextContato } from "../../contato/styles";
import Iconify from "../../../components/Iconify";
import Logo from "../../../components/Logo";
import styled from "styled-components";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import useMediaQuery from '@mui/material/useMediaQuery';

import { useRef, useState } from "react";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
//---context --------------

import { LoadingButton } from '@mui/lab';

const sendEmail = (e) => {
    return emailjs.send('SERVICE_ENVIO', 'template_nir733i', e, 'boZRDzowP6-_u3-h9')
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
const CenterAll = styled.div`
    width: 100%;
    max-width:99%;
    margin: 0;
    align-items: center;
    text-align: center;
    display: flex;
    text-align: center;
    justify-content: center;

`;
const CenterAllIcons = styled.div`
    width: 100%;
    margin: 0;
    align-items: left;
    text-align: left;
    display: flex;
    text-align: left;
    justify-content: left;

`;
export const TextEmailContato = styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    max-width: 85%;
    /* or 140% */

    letter-spacing: -0.03em;
    @media (max-width: 1300px) {
            font-size:17px;
            line-height: 20px;
        }

    @media (max-width: 600px) {
        font-size:10px;
        line-height: 17px;

    }
    `;

export default function FooterPortifolio() {
    const matches = useMediaQuery('(min-width:700px)');
    return (

        <CenterAll>
            <Grid sx={{ marginBottom: 13 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid xs={2} sm={4} md={4} >
                    <CenterAll>
                        <TableFooter style={{ padding: 30 }}>
                            <Logo style={{ marginBottom: 10 }} />
                            <TextContato style={{ textAlign: "left", marginBottom: 10, marginTop: 10 }}>me siga também nas redes sociais </TextContato>
                            <CenterAllIcons style={{ marginBottom: 10 }}>
                                <Link style={{ textDecoration: 'none', cursor: "pointer", }} href="https://www.instagram.com/junyor_oliveiraj/" target="_blank"><Iconify icon="uil:instagram-alt" width={24} height={24} style={{ marginRight: 20, marginTop: 20 }} /></Link>
                                <Link style={{ textDecoration: 'none', cursor: "pointer", }} href="https://www.linkedin.com/in/junior-oliveira-ba22381a3/" target="_blank"> <Iconify icon="akar-icons:linkedin-box-fill" width={24} height={24} style={{ marginRight: 20, marginTop: 20 }} /></Link>
                                <Link style={{ textDecoration: 'none', cursor: "pointer", }} href="https://www.facebook.com/junior.oliveira.belem" target="_blank"><Iconify icon="ic:baseline-facebook" width={24} height={24} style={{ marginRight: 20, marginTop: 20 }} /></Link>
                                <Link style={{ textDecoration: 'none', cursor: "pointer", }} href="https://wa.me/5549998139167" target="_blank"><Iconify icon="ri:whatsapp-fill" width={24} height={24} style={{ marginRight: 20, marginTop: 20 }} /></Link>
                            </CenterAllIcons>
                        </TableFooter>
                    </CenterAll>
                </Grid>
                <Grid xs={2} sm={4} md={4} >
                    <CenterAll>
                        <TableFooter style={{ padding: 20, marginTop: !matches && 30 }}>

                            <CenterAllIcons style={{ flex: 'wrap', flexWrap: 'wrap' }}>
                                <Link style={{ textDecoration: 'none', cursor: "pointer", display: "flex", margin: matches ? 10 : 2, marginTop: !matches && 20 }} href="mailto:junioroliveira.belem@gamil.com" target="_blank"><Iconify icon="material-symbols:attach-email" width={24} height={24} style={{ marginRight: matches && 5, marginTop: matches && 5 }} /> <TextEmailContato >junioroliveira.belem@gamil.com</TextEmailContato></Link>
                                <Link style={{ textDecoration: 'none', cursor: "pointer", display: "flex", margin: matches ? 10 : 2, marginTop: !matches && 20 }} href="mailto:junyorolliveira.belem@gamil.com" target="_blank"><Iconify icon="material-symbols:attach-email" width={24} height={24} style={{ marginRight: matches && 5, marginTop: matches && 5 }} /> <TextEmailContato >junioroliveira.belem@gamil.com</TextEmailContato></Link>
                            </CenterAllIcons>
                        </TableFooter>
                    </CenterAll>
                </Grid>
                <Grid xs={matches ? 2 : 12} sm={4} md={4} >
                    <CenterAll style={{ marginTop: 50 }}>
                        <EnviarEmail />
                    </CenterAll>
                </Grid>
            </Grid>
        </CenterAll>
    )
}

function EnviarEmail() {
    const methodsRef = useRef(null); // criar uma referência para o objeto 'methods'
    /******************
    validar formulario 
    ************************** */
    const [defoutEmail, setdefoutEmail] = useState(false);
    const LoginSchema = Yup.object().shape({
        email: !defoutEmail ? '' : Yup.string().email('Email must be a valid email address').required('Email is required'),
    });
    const defaultValues = {
        email: '',
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
        <CenterAll>
            <FormProvider
                methods={methods}
                onSubmit={handleSubmit(onSubmit)}>
                <CenterAllIcons >
                    {!defoutEmail ? <RHFTextField name="email" label="Email address" value={""} onClick={e => { setdefoutEmail(true) }} /> : <RHFTextField name="email" label="Email address" />}
                    <LoadingButton fullWidth size="large" type="submit" loading={isSubmitting} sx={{ width: '6ch', backgroundColor: '#FA541C', color: '#ffffff', '&:hover': { backgroundColor: '#37514d'} }}>
                        <Iconify icon="material-symbols:chevron-right" width={25} height={25} style={{ marginRight: 5, marginTop: 5 }} />
                    </LoadingButton>
                </CenterAllIcons>
            </FormProvider>
        </CenterAll>
    )
}