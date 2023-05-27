import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { RHFTextField, FormProvider } from '../../../../components/hook-form';
import AdicionarGastos from '../../requisições/adicionarGastos';
// ----------------------------------------------------------------------
import { Box } from '@mui/material';
import { forwardRef } from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
//---------------------------------------
export default function FormAddgastoCartao({ feixar, usuario, ...other }) {
    const [errorMessage, setErrorMessage] = useState('');
    const [state, setState] = useState({
        openNotification: false,
        vertical: 'top',
        horizontal: 'right',

    });
    const { vertical, horizontal, openNotification } = state;
    const LoginSchema = Yup.object().shape({
        mensagen: Yup.string().required('Nome não pode estar vazio '),
    });

    const defaultValues = {
        mensagen: '',

    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });
    const handleCloseMensage = () => {
        setState({ ...state, openNotification: false });
    }
    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const onSubmit = async (data, e) => {
        try {
            console.log(usuario)
            const subirBD = await AdicionarGastos(usuario, data,)
            if (subirBD) feixar(true)
        } catch (error) {
            setState({ ...state, openNotification: true });
            setErrorMessage(error.response.data.message)
            console.log("Erro aosubir os dados", error);
        }
    };
    return (
        <Box sx={{ width: '100%' }}>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <RHFTextField multiline name="mensagen" label="todos os gastos" />
                </Stack>
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ marginTop: 2 }} >
                    OK
                </LoadingButton>
            </FormProvider>
            <div>
                <Snackbar
                    open={openNotification} autoHideDuration={6000}
                    onClose={handleCloseMensage}
                    anchorOrigin={{ vertical, horizontal }}
                    key={vertical + horizontal}
                >
                    <Alert
                        onClose={handleCloseMensage}
                        severity="error" sx={{ width: window.innerWidth < 500 ? '70%' : '100%' }}
                    >
                        {errorMessage}

                    </Alert>
                </Snackbar>
            </div>
        </Box>
    );
}


