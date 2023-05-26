import * as Yup from 'yup';
import { useState, useContext, forwardRef } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { authGoogleContex } from '../../../autenticação';
// ----------------------------------------------------------------------
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//---------------------------------------
export default function LoginForm() {
  const { login, signed, errorMessage } = useContext(authGoogleContex);

  // ****** notificação de erro de login *******
  const [state, setState] = useState({
    openNotification: false,
    vertical: 'top',
    horizontal: 'right',

  });
  const { vertical, horizontal, openNotification } = state;
  const handleClose2 = () => {
    setState({ ...state, openNotification: false });

  };
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  // ***********************************
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
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
    login(data.email, data.password).then((val) => val ? null : setState({ ...state, openNotification: true }));
  };

  if (signed) {
    navigate('/noticias', { replace: true })
    window.location.reload(false);
    return <Navigate to="/noticias" />
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Snackbar
          open={openNotification} autoHideDuration={6000}
          onClose={handleClose2}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose2}
            severity="error" sx={{ width: window.innerWidth < 500 ? '70%' : '100%' }}
          >
            {errorMessage}

          </Alert>
        </Snackbar>
      </div>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
