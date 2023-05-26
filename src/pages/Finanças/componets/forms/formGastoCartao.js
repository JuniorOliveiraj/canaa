import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { RHFTextField, FormProvider } from '../../../../components/hook-form';
//import { authGoogleContex } from '../../../../autenticação';
// ----------------------------------------------------------------------
import { Box} from '@mui/material';

//---------------------------------------
export default function FormAddgastoCartao({ feixar, ...other }) {
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

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;


    const onSubmit = async (data, e) => {
        try {
          //  const subirBD = await AdicionarProduto(logado, data, url, userToken)
           // if (subirBD) feixar(true);
        } catch (error) {
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
        </Box>
    );
}


