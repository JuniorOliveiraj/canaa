import Iconify from '../../../../../components/Iconify';
// material
import { Fab, Button, IconButton } from '@mui/material';
// components
import { ButtonAnimate } from '../../../../../components/animate';

// ----------------------------------------------------------------------

export default function SmallClick() {
  return (
    <>
      <ButtonAnimate>
        <Button variant="contained">Button</Button>
      </ButtonAnimate>
      <ButtonAnimate>
        <Fab size="small">
          <Iconify icon={'ic:baseline-plus'} width={20} height={20} />
        </Fab>
      </ButtonAnimate>
      <ButtonAnimate>
        <IconButton color="primary">
          <Iconify icon={'ic:baseline-plus'} width={20} height={20} />
        </IconButton>
      </ButtonAnimate>
    </>
  );
}
