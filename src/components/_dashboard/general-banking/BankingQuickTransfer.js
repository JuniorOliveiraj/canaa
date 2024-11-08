import PropTypes from 'prop-types';
import { useState, useEffect  } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DialogJson, JsonTransferDrawer } from './DialogJson';
// material
import { styled, } from '@mui/material';
import {
  Box,
  Card,
  Stack,
  Input,
  Button,
  Avatar,
  Dialog,
  TextField,
  Typography,
  CardHeader,
  DialogTitle,
  DialogActions,
  SwipeableDrawer,
  Slider as MuiSlider
} from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 1000;
const STEP = 50;



const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.background.neutral,
  '& .slick-list': {
    paddingTop: '24px !important'
  }
}));



// ----------------------------------------------------------------------

InputAmount.propTypes = {
  amount: PropTypes.number,
  autoWidth: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  sx: PropTypes.object
};

function InputAmount({ autoWidth, amount, onBlur, onChange, sx, ...other }) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1} sx={sx}>
      <Typography variant="h5">$</Typography>
      <Input
        disableUnderline
        size="small"
        value={amount}
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{ step: STEP, min: MIN_AMOUNT, max: MAX_AMOUNT, type: 'number' }}
        sx={{
          typography: 'h3',
          '& input': {
            p: 0,
            textAlign: 'center',
            width: autoWidth
          }
        }}
        {...other}
      />
    </Stack>
  );
}

ConfirmTransferDialog.propTypes = {
  amount: PropTypes.number,
  autoWidth: PropTypes.number,
  contactInfo: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string
  }),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

function ConfirmTransferDialog({ open, amount, autoWidth, contactInfo, onClose, onBlur, onChange }) {
  return (
    <Dialog open={open} fullWidth maxWidth="xs" onClose={onClose}>
      <DialogTitle>adicionar gastos manuais</DialogTitle>

      <Stack spacing={3} sx={{ p: 3, pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={contactInfo?.avatar} sx={{ width: 48, height: 48 }} />
          <div>
            <Typography variant="subtitle2">{contactInfo?.name} name do individus</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {contactInfo?.email} e mail do 
            </Typography>
          </div>
        </Stack>

        <InputAmount
          onBlur={onBlur}
          onChange={onChange}
          autoWidth={autoWidth}
          amount={amount}
          disableUnderline={false}
          sx={{ justifyContent: 'flex-end' }}
        />

        <TextField fullWidth multiline rows={2} placeholder="Write a message..." />
      </Stack>
      <DialogActions>
        <Button variant="contained" disabled={amount === 0} onClick={onClose}>
          Confirm & ADD
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}
ConfirmTransferDrawer.propTypes = {
  amount: PropTypes.number,
  autoWidth: PropTypes.number,
  contactInfo: PropTypes.shape({
    avatar: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string
  }),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

function ConfirmTransferDrawer({ open, amount, autoWidth, contactInfo, onClose, onBlur, onChange }) {
  return (
    <SwipeableDrawer anchor="bottom" open={open} onClose={onClose} onOpen={() => { }}>
      <div style={{ minWidth: 250, padding: '16px' }}>
        <Typography variant="h6">Transfer to</Typography>

        <Stack spacing={3} sx={{ p: 3, pb: 0 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar src={contactInfo?.avatar} sx={{ width: 48, height: 48 }} />
            <div>
              <Typography variant="subtitle2">{contactInfo?.name}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {contactInfo?.email}
              </Typography>
            </div>
          </Stack>

          {/* InputAmount Component */}
          <div>
            <InputAmount
              onBlur={onBlur}
              onChange={onChange}
              autoWidth={autoWidth}
              amount={amount}
              disableUnderline={false}
              sx={{ justifyContent: 'flex-end' }}
            />
          </div>

          <TextField fullWidth multiline rows={2} placeholder="Write a message..." />
        </Stack>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <Button variant="contained" disabled={amount === 0} onClick={onClose}>
            Confirm & Transfer
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </SwipeableDrawer>
  );
}
export default function BankingQuickTransfer() {
  const matches = useMediaQuery('(min-width:600px)');
  const [autoWidth, setAutoWidth] = useState(24);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openConfirmDialogJson, setOpenConfirmDialogJson] = useState(false);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    if (amount) {
      handleAutoWidth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };
  const handleOpenDialoJson = () => {
    setOpenConfirmDialogJson(true);
  };
  const handleCloseDialoJson = () => {
    setOpenConfirmDialogJson(false);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleAutoWidth = () => {
    const getNumberLength = amount.toString().length;
    setAutoWidth(getNumberLength * 22);
  };

  const handleSliderChange = (event, newValue) => {
    setAmount(newValue);
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (amount < 0) {
      setAmount(0);
    } else if (amount > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT);
    }
  };



  return (
    <>
      <RootStyle>
        <CardHeader title="Adicionar gastos" />
        <Box sx={{ p: 3 }}>
         

          <Stack spacing={3}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              Manuais
            </Typography>

            <InputAmount onBlur={handleBlur} onChange={handleInputChange} autoWidth={autoWidth} amount={amount} />

            <MuiSlider
              value={typeof amount === 'number' ? amount : 0}
              valueLabelDisplay="auto"
              step={STEP}
              marks
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              onChange={handleSliderChange}
            />

            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                Seu saldo
              </Typography>
              <Typography variant="subtitle1">{fCurrency(34212)}</Typography>
            </Stack>

            <Button variant="contained" size="large" disabled={amount === 0} onClick={handleOpenConfirm}>
              Add now
            </Button>
            {
              (
                !amount &&  <Button variant="contained" size="large" disabled={amount != 0} onClick={handleOpenDialoJson}>
                Add with json
              </Button>
              )
            }
          </Stack>
        </Box>
      </RootStyle>
      {
        matches ? <ConfirmTransferDialog
          open={openConfirm}
          autoWidth={autoWidth}
          amount={amount}

          onClose={handleCloseConfirm}
          onBlur={handleBlur}
          onChange={handleInputChange}
        /> : <ConfirmTransferDrawer
          open={openConfirm}
          autoWidth={autoWidth}
          amount={amount}

          onClose={handleCloseConfirm}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      }
      {
        matches ? <DialogJson
          open={openConfirmDialogJson}
          autoWidth={autoWidth}


          onClose={handleCloseDialoJson}
          onBlur={handleBlur}
          //onChange={handleInputChange}
        /> : <JsonTransferDrawer
          open={openConfirmDialogJson}
          autoWidth={autoWidth}
          amount={amount}

          onClose={handleCloseDialoJson}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      }


    </>
  );
}
