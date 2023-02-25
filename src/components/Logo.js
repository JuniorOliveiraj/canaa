import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { AlteracaoThema } from '../contexts/Themas';
// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />
  const { darkModeThem } = useContext(AlteracaoThema);
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>

      <svg width="40" height="40" viewBox="0 0 403 474" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <defs>
            <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
          </defs>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M207 56H117.14V413H154.88V299.78H207V267.65H154.88V88.64H207V56ZM277 265.907C299.531 262.806 317.474 255.567 330.83 244.19C349.53 228.55 358.88 206.62 358.88 178.4C358.88 149.84 349.53 127.74 330.83 112.1C317.474 100.723 299.531 93.484 277 90.383V57.3475C296.335 59.4254 313.598 63.9062 328.79 70.79C350.55 80.31 367.21 94.25 378.77 112.61C390.67 130.63 396.62 152.56 396.62 178.4C396.62 203.56 390.67 225.32 378.77 243.68C367.21 261.7 350.55 275.64 328.79 285.5C324.391 287.425 319.818 289.155 315.072 290.69L402.23 413H360.92L279.564 298.198C278.714 298.296 277.859 298.39 277 298.479V294.58V283.46V265.907Z" fill={darkModeThem ? "#ffffff": "black"} />
        <path d="M6.58 214V165H29.54C35.42 165 39.9 166.167 42.98 168.5C46.06 170.787 47.6 173.867 47.6 177.74C47.6 180.353 46.9933 182.593 45.78 184.46C44.5667 186.28 42.9333 187.703 40.88 188.73C38.8733 189.71 36.68 190.2 34.3 190.2L35.56 187.68C38.3133 187.68 40.7867 188.193 42.98 189.22C45.1733 190.2 46.9 191.647 48.16 193.56C49.4667 195.473 50.12 197.853 50.12 200.7C50.12 204.9 48.51 208.167 45.29 210.5C42.07 212.833 37.2867 214 30.94 214H6.58ZM15.68 206.86H30.38C33.7867 206.86 36.4 206.3 38.22 205.18C40.04 204.06 40.95 202.263 40.95 199.79C40.95 197.363 40.04 195.59 38.22 194.47C36.4 193.303 33.7867 192.72 30.38 192.72H14.98V185.65H28.56C31.7333 185.65 34.16 185.09 35.84 183.97C37.5667 182.85 38.43 181.17 38.43 178.93C38.43 176.643 37.5667 174.94 35.84 173.82C34.16 172.7 31.7333 172.14 28.56 172.14H15.68V206.86Z" fill={darkModeThem ? "#ffffff": "black"} />
        <path d="M129.63 473.02C103.277 473.02 78.4867 467.213 55.26 455.6C32.48 443.987 14.1667 427.46 0.32 406.02L29.13 372.52C42.0833 391.28 57.0467 405.573 74.02 415.4C90.9933 425.227 109.753 430.14 130.3 430.14C188.367 430.14 217.4 395.747 217.4 326.96V42.88H45.88V-3.19481e-05H266.31V324.95C266.31 374.53 254.697 411.603 231.47 436.17C208.69 460.737 174.743 473.02 129.63 473.02Z" fill={darkModeThem ? "#ffffff": "black"} />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
