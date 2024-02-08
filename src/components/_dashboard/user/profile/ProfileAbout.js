import PropTypes from 'prop-types';

import { Link, Card, Typography, CardHeader, Stack } from '@mui/material';
import Iconify from '../../../Iconify';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

ProfileAbout.propTypes = {
  profile: PropTypes.object
};

export default function ProfileAbout({ profile }) {
  const { quote, country, email, role, company, school } = profile;

  return (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">{quote}</Typography>

        <Stack direction="row">
          <Iconify icon={'tabler:pin-filled'} />
          <Typography variant="body2">
            Live at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {country}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <Iconify icon={'ic:baseline-email'} />
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Stack direction="row">
          <Iconify icon={'ic:round-business-center'} />
          <Typography variant="body2">
            {role} at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {company}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row">
          <Iconify icon={'roundBusinessCenter'} />
          <Typography variant="body2">
            Studied at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {school}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
