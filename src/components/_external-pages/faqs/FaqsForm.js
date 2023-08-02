import { Stack } from '@mui/material';
import { varFadeInUp, MotionInView } from '../../animate';
import { FormProvider, RHFTextField } from '../../hook-form';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';
import AlertaDefout from '../../Alert';
const sendEmail = (e) => {
  return new Promise(async (resolve, reject) => {
    await emailjs.send('SERVICE_ENVIO', 'template_9ali4e4', e, 'boZRDzowP6-_u3-h9')
      .then((result) => {
        console.log('foiiiiii')
        console.log(result.text);
        resolve(true)
      }, (error) => {
        console.log('erro');
        console.log(error.text);
        reject(false);
      });
  })

};
// ----------------------------------------------------------------------

export default function FaqsForm() {
  const [defoutEmail, setDefoutEmail] = useState(false);
  const [defoutName, setDefoutName] = useState(false);
  const [mensagen, setMensagen] = useState(false);
  const [subject, setSubject] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [openNotification, setOpenNotification] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [responseBD, setResponseBD] = useState('');
  const EmailSchema = Yup.object().shape({
    email: defoutEmail
      ? Yup.string().email('Email must be a valid email address').required('Email is required')
      : '',
    name: defoutName ? Yup.string().required('Name is required') : '',
    mensagen: mensagen ? Yup.string().required('Community is required') : '',
    Subject: subject ? Yup.string().required('Subject is required') : '',
  });

  const defaultValues = {
    email: '',
    name: '',
    mensagen: '',
    Subject: '',
  };

  const methods = useForm({
    resolver: yupResolver(EmailSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = async (data, e) => {
    console.log(data)
    if (!defoutEmail) {
      enqueueSnackbar('email error', { variant: 'error' });
      setErrorMessage('adicione um email');
      setResponseBD('error');
      setOpenNotification(true)
      defoutEmail(false)
    } else if (!defoutName) {
      enqueueSnackbar('email error', { variant: 'error' });
      setErrorMessage('digite um nome');
      setResponseBD('error');
      setOpenNotification(true)
      defoutEmail(false)
    } else {
      await sendEmail(data).then((val) => {
        if (val) {
          enqueueSnackbar('email success', { variant: 'success' });
          setErrorMessage('E-mail enviado com sucesso!');
          setResponseBD('success');
          setOpenNotification(true)
          reset(); // redefinir os campos do formulário após o envio do e-mail
        } else {
          enqueueSnackbar('email error', { variant: 'error' });
          setErrorMessage('Erro ao enviar o e-mail.');
          setResponseBD('error');
          setOpenNotification(true)
        }
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <MotionInView variants={varFadeInUp}>
          {!defoutName ? (
            <RHFTextField name="name" label="Name" value="" onClick={() => setDefoutName(true)} />
          ) : (
            <RHFTextField name="name" label="Name" />
          )}
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          {!defoutEmail ? (
            <RHFTextField
              label="Email address"
              name="email"
              value=""
              onClick={() => setDefoutEmail(true)}
            />
          ) : (
            <RHFTextField name="email" label="Email address" />
          )}
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          {!subject ? (
            <RHFTextField name="Subject" label="Subject" value="" onClick={() => setSubject(true)} />
          ) : (
            <RHFTextField name="Subject" label="Subject" />
          )}
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          {!mensagen ? (
            <RHFTextField
              multiline
              rows={4}
              name="mensagen"
              label="Enter your message here."
              value=""
              onClick={() => setMensagen(true)}
            />
          ) : (
            <RHFTextField
              multiline
              MinRows={4}
              name="mensagen"
              label="Enter your message here."
            />
          )}
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <LoadingButton size="large" variant="contained" type="submit" loading={isSubmitting}>
            Submit Now
          </LoadingButton>
        </MotionInView>
      </Stack>
      <AlertaDefout errorMessage={errorMessage} responseBD={responseBD} openNotification={openNotification} setOpenNotification={setOpenNotification} />
    </FormProvider>
  );
}
