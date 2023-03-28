
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Avatar, Stack , alpha} from '@mui/material';
import { useState, useEffect, useContext } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from '../../components/hook-form';
//---context --------------
import { authGoogleContex } from '../../autenticação';

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
    const [urlimage, setUrlimage] = useState(null)
    const matches = useMediaQuery('(min-width:900px)');
    const { acoontUser } = useContext(authGoogleContex);
    function onImageChange(e) {
        setImagens([...e.target.files])
    }
    useEffect(() => {
        try {
            if (imagens !== null) {
                const newImageUrl = []
                imagens.forEach(image => newImageUrl.push(URL.createObjectURL(image)));
                setUrlimage(newImageUrl);
            }
        } catch (error) {
            console.log(error)
        }

    }, [imagens]);
    /******************
    validar formulario 
    ************************** */

/*
setando valores para campos defolt 
*/
const [defoutEmail, setdefoutEmail] = useState(false);
const [defoutName, setdefoutName] = useState(false);
const [defoutSobrenome, setdefoutSobrenome] = useState(false);
const [defoutTelefone, setdefoutTelefone] = useState(false);
const [defoutRole, setdefoutRole] = useState(false);
const [defoutComunity, setdefoutComunity] = useState(false);


    const LoginSchema = Yup.object().shape({
        email: !defoutEmail ? '' :Yup.string().email('Email must be a valid email address').required('Email is required'),
        name: !defoutName ? '': Yup.string().required('name is required'),
        sobrenome: !defoutSobrenome ? '': Yup.string().required('lest name is required'),
        telefone:!defoutTelefone ? '':Yup.string().required('telephone is required'),
        role:!defoutRole ? '':Yup.string().required('role is required'),
        comunity:!defoutComunity ? '':Yup.string().required('comunity is required'),
    });

    const defaultValues = {
        email: '',
        name: '',
        sobrenome: '',
        telefone:'',
        role:'',
        comunity:'',
       
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
        if(!defoutEmail || !defoutName || !defoutSobrenome || !defoutTelefone || !defoutRole || !defoutComunity){
            alert("não foi")
        }
        console.log(data)

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
                        <AvatarStyle
                            alt="teste junior"
                            src={urlimage ? urlimage[0] : acoontUser[0].photoURL}
                        />
                        <input type="file" multiple accept="image/*" onChange={onImageChange} />
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
                                    '& > :not(style)': { m: 1.5, width: '35ch' },
                                }}>
                                    {!defoutName ? <RHFTextField name="name" label="name "  value={  acoontUser[0].displayName } onClick={e =>{setdefoutName(true)}}  /> : <RHFTextField name="name" label="name " />}
                                    {!defoutSobrenome ?  <RHFTextField name="sobrenome" label="lest name "  value={  acoontUser[0].displayName } onClick={e =>{setdefoutSobrenome(true)}}  /> :<RHFTextField name="sobrenome" label="lest name " />}
                                   {!defoutTelefone ?  <RHFTextField name="telefone" label="telephone " value={acoontUser[0].telefone ? acoontUser[0].telefone : ""} onClick={e =>{setdefoutTelefone(true)}} />: <RHFTextField name="telefone" label="telephone " />}
                                   {!defoutEmail ?  <RHFTextField name="email" label="Email address" value={acoontUser[0].email ?acoontUser[0].email :""} onClick={e =>{setdefoutEmail(true)}} />: <RHFTextField name="email" label="Email address" />}
                                   {!defoutRole ?  <RHFTextField name="role" label="role" value={acoontUser[0].role ? acoontUser[0].role :""} onClick={e =>{setdefoutRole(true)}} />: <RHFTextField name="role" label="role" />}
                                   {!defoutComunity ?  <RHFTextField name="comunity" label="comunity"  value={acoontUser[0].comunity ?acoontUser[0].comunity :"" } onClick={e =>{setdefoutComunity(true)}} />:  <RHFTextField name="comunity" label="comunity" />}
                                </Paper>
                            </Stack>
                            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ width: '18ch', float: 'right', m: 1.5 }}>
                                save
                            </LoadingButton>
                        </FormProvider>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
