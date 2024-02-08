import PropTypes from 'prop-types';
import Iconify from '../../../Iconify';
import { Link, Card, CardHeader, Stack } from '@mui/material';

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

ProfileSocialInfo.propTypes = {
  profile: PropTypes.object
};

export default function ProfileSocialInfo({ profile }) {
  const { facebookLink, instagramLink, linkedinLink, twitterLink } = profile;

  const SOCIALS = [
    {
      name: 'Linkedin',
      icon: <Iconify icon='bi:linkedin' color="#006097" sx={{  width: 20, height: 20, marginTop: 1, flexShrink: 0, marginRight: 2}}/>,
      href: linkedinLink
    },
    {
      name: 'Twitter',
      icon: <Iconify icon='mdi:twitter' color="#1C9CEA" sx={{  width: 20, height: 20, marginTop: 1, flexShrink: 0, marginRight: 2}}/>,
      href: twitterLink
    },
    {
      name: 'Instagram',
      icon: <Iconify icon='ri:instagram-fill' color="#D7336D" sx={{  width: 20, height: 20, marginTop: 1, flexShrink: 0, marginRight: 2}}/>,
      href: instagramLink
    },
    {
      name: 'Facebook',
      icon: <Iconify icon='ic:baseline-facebook' color="#1877F2"sx={{  width: 20, height: 20, marginTop: 1, flexShrink: 0, marginRight: 2}} />,
      href: facebookLink
    }
  ];

  return (
    <Card>
      <CardHeader title="Social" />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOCIALS.map((link) => (
          <Stack key={link.name} direction="row" alignItems="center">
            {link.icon}
            <Link component="span" variant="body2" color="text.primary" noWrap>
              {link.href}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
