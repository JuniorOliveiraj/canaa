// material
import { styled} from '@mui/material';
import { Box, Card, Stack, Typography,  } from '@mui/material';
import { ChartRadialBar } from '../../charts';

// ----------------------------------------------------------------------
const ContentStyle = styled(Card)(({ theme }) => ({
  //marginTop: -10,
  boxShadow: 'none',
  padding: theme.spacing(5),
  paddingTop: theme.spacing(16),
  color: theme.palette.common.white,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`
}));

// ----------------------------------------------------------------------

export default function BankingInviteFriends() {
 
  return (
    <div>
      <Box
        component="img"
        src="https://minimals.cc/assets/illustrations/characters/character_11.png"
        sx={{
          zIndex: 9,
          position: 'relative',
          left: 40,
          width: 140,
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.24))'
        }}
      />
      <ContentStyle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">
            Sua meta é <br /> Gastar
          </Typography>
          <Typography variant="h2">$2324</Typography>
        </Stack>
        <ChartRadialBar   series={70} type="radialBar" subtotal={5000} height={350} />
      </ContentStyle>
    </div>
  );
}
