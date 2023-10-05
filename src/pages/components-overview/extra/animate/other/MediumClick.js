import Iconify from '../../../../../components/Iconify';
// material
import { Fab, Button, IconButton } from '@mui/material';
// components
import { ButtonAnimate } from '../../../../../components/animate';

// ----------------------------------------------------------------------

export default function MediumClick() {
  return (
    <>
      <ButtonAnimate mediumClick>
        <Button variant="contained" size="large">
          Button
        </Button>
      </ButtonAnimate>
      <ButtonAnimate mediumClick>
        <Fab>
          <Iconify icon={'ic:baseline-plus'} width={20} height={20} />
        </Fab>
      </ButtonAnimate>
      <ButtonAnimate mediumClick>
        <IconButton color="primary">
          <Iconify icon={'ic:baseline-plus'} width={24} height={24} />
        </IconButton>
      </ButtonAnimate>
    </>
  );
}
