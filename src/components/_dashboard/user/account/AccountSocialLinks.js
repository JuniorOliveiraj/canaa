import Iconify from '../../../Iconify';
import { useSnackbar } from 'notistack';
import { useFormik, Form, FormikProvider } from 'formik';

// material
import { Stack, Card, TextField, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// redux
import { useSelector } from '../../../../redux/store';
// utils
import fakeRequest from '../../../../utils/fakeRequest';

// ----------------------------------------------------------------------

const SOCIAL_LINKS_OPTIONS = [
  {
    value: 'FacebookLink',
    icon: <Iconify icon="logos:facebook"  height={24} />
  },
  {
    value: 'InstagramLink',
    icon: <Iconify icon="skill-icons:instagram"  height={24} />
  },
  {
    value: 'LinkedinLink',
    icon:<Iconify icon="devicon:linkedin"  height={24} />
  },
  {
    value: 'TwitterLink',
    icon: <Iconify icon="logos:twitter"  height={24} />
  }
];

// ----------------------------------------------------------------------

export default function AccountSocialLinks() {
  const { enqueueSnackbar } = useSnackbar();
  const { myProfile } = useSelector((state) => state.user);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      facebookLink: myProfile.facebookLink,
      instagramLink: myProfile.instagramLink,
      linkedinLink: myProfile.linkedinLink,
      twitterLink: myProfile.twitterLink
    },
    onSubmit: async (values, { setSubmitting }) => {
      await fakeRequest(500);
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('Save success', { variant: 'success' });
    }
  });

  const { handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="flex-end">
            {SOCIAL_LINKS_OPTIONS.map((link) => (
              <TextField
                key={link.value}
                fullWidth
                {...getFieldProps(link.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{link.icon}</InputAdornment>
                }}
              />
            ))}

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Save Changes
            </LoadingButton>
          </Stack>
        </Form>
      </FormikProvider>
    </Card>
  );
}
