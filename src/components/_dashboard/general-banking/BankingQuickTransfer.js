import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from '../../../auth/Axios.interceptor';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DialogJson, JsonTransferDrawer } from './DialogJson';

// material
import { styled } from '@mui/material';
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
  Slider as MuiSlider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel
} from '@mui/material';

// utils
import { fCurrency } from '../../../utils/formatNumber';
import {  getTotalIncomes, getTotalExpenses } from '../../../redux/slices/Analytics';
import { useDispatch } from '../../../redux/store';

// ----------------------------------------------------------------------

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 1000;
const STEP = 50;

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  backgroundColor: theme.palette.background.neutral
}));

// ----------------------------------------------------------------------

function InputAmount({ autoWidth, amount, onBlur, onChange, sx }) {
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
      />
    </Stack>
  );
}

// ----------------------------------------------------------------------
// DESKTOP MODAL
// ----------------------------------------------------------------------

function ConfirmTransferDialog({
  open,
  amount,
  autoWidth,
  onClose,
  onBlur,
  onChange,
  categories,
  expense,
  setExpense,
  onConfirm
}) {
  return (
    <Dialog open={open} fullWidth maxWidth="lg" onClose={onClose}>
      <DialogTitle>Adicionar transação manual</DialogTitle>

      <Stack spacing={2} sx={{ p: 3 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Tipo</InputLabel>
          <Select
            label="Tipo"
            value={expense.type}
            onChange={(e) => setExpense({ ...expense, type: e.target.value })}
          >
            <MenuItem value={0}>Receita</MenuItem>
            <MenuItem value={1}>Despesa</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth size="small">
          <InputLabel>Categoria</InputLabel>
          <Select
            label="Categoria"
            value={expense.categoryId || ''}
            onChange={(e) => setExpense({ ...expense, categoryId: e.target.value })}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <InputAmount
          onBlur={onBlur}
          onChange={onChange}
          autoWidth={autoWidth}
          amount={amount}
          disableUnderline={false}
          sx={{ justifyContent: 'flex-end' }}
        />

        {/* DESCRIÇÃO COMO ANTES */}
        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder="Descrição..."
          value={expense.description}
          onChange={(e) => setExpense({ ...expense, description: e.target.value })}
        />



        {/* DATA */}
        <TextField
          type="date"
          size="small"
          label="Data"
          InputLabelProps={{ shrink: true }}
          value={expense.startDate}
          onChange={(e) => setExpense({ ...expense, startDate: e.target.value })}
        />

        {/* PARCELADO */}
        <FormControlLabel
          control={
            <Switch
              checked={expense.isInstallment}
              onChange={(e) =>
                setExpense({ ...expense, isInstallment: e.target.checked })
              }
            />
          }
          label="Parcelado"
        />

        {expense.isInstallment && (
          <TextField
            type="number"
            size="small"
            label="Parcelas"
            value={expense.installments}
            onChange={(e) =>
              setExpense({ ...expense, installments: Number(e.target.value) })
            }
          />
        )}

        {/* LINK DA IMAGEM */}
        <TextField
          fullWidth
          size="small"
          placeholder="Link da imagem (opcional)"
          value={expense.imageUrl}
          onChange={(e) => setExpense({ ...expense, imageUrl: e.target.value })}
        />

        {expense.imageUrl && (
          <Box
            component="img"
            src={expense.imageUrl}
            alt="preview"
            sx={{
              width: '100%',
              maxHeight: 120,
              objectFit: 'contain',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider'
            }}
          />
        )}
      </Stack>

      <DialogActions>
        <Button variant="contained" disabled={amount === 0} onClick={onConfirm}>
          Confirm & ADD
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

// ----------------------------------------------------------------------
// MOBILE DRAWER
// ----------------------------------------------------------------------

function ConfirmTransferDrawer({
  open,
  amount,
  autoWidth,
  onClose,
  onBlur,
  onChange,
  categories,
  expense,
  setExpense,
  onConfirm
}) {
  return (
    <SwipeableDrawer anchor="bottom" open={open} onClose={onClose} onOpen={() => { }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Adicionar transação</Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <FormControl fullWidth size="small">
            <InputLabel>Tipo</InputLabel>
            <Select
              label="Tipo"
              value={expense.type}
              onChange={(e) => setExpense({ ...expense, type: e.target.value })}
            >
              <MenuItem value={1}>Receita</MenuItem>
              <MenuItem value={2}>Despesa</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel>Categoria</InputLabel>
            <Select
              label="Categoria"
              value={expense.categoryId || ''}
              onChange={(e) => setExpense({ ...expense, categoryId: e.target.value })}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <InputAmount
            onBlur={onBlur}
            onChange={onChange}
            autoWidth={autoWidth}
            amount={amount}
          />

          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="Descrição..."
            value={expense.description}
            onChange={(e) => setExpense({ ...expense, description: e.target.value })}
          />

          <TextField
            fullWidth
            size="small"
            placeholder="Link da imagem"
            value={expense.imageUrl}
            onChange={(e) => setExpense({ ...expense, imageUrl: e.target.value })}
          />

          {expense.imageUrl && (
            <Box
              component="img"
              src={expense.imageUrl}
              alt="preview"
              sx={{
                width: '100%',
                maxHeight: 120,
                objectFit: 'contain',
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider'
              }}
            />
          )}

          <TextField
            type="date"
            size="small"
            label="Data"
            InputLabelProps={{ shrink: true }}
            value={expense.startDate}
            onChange={(e) => setExpense({ ...expense, startDate: e.target.value })}
          />

          <FormControlLabel
            control={
              <Switch
                checked={expense.isInstallment}
                onChange={(e) =>
                  setExpense({ ...expense, isInstallment: e.target.checked })
                }
              />
            }
            label="Parcelado"
          />

          {expense.isInstallment && (
            <TextField
              type="number"
              size="small"
              label="Parcelas"
              value={expense.installments}
              onChange={(e) =>
                setExpense({ ...expense, installments: Number(e.target.value) })
              }
            />
          )}

          <Button variant="contained" disabled={amount === 0} onClick={onConfirm}>
            Confirm & ADD
          </Button>
        </Stack>
      </Box>
    </SwipeableDrawer>
  );
}

// ----------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------

export default function BankingQuickTransfer() {
  const matches = useMediaQuery('(min-width:600px)');
  const [autoWidth, setAutoWidth] = useState(24);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openConfirmDialogJson, setOpenConfirmDialogJson] = useState(false);
  const [amount, setAmount] = useState(0);
  const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();

  const [expense, setExpense] = useState({
    categoryId: null,
    description: '',
    imageUrl: '',
    type: 2,
    isInstallment: false,
    installments: 2,
    startDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    if (amount) setAutoWidth(amount.toString().length * 22);
  }, [amount]);

  useEffect(() => {
    axios
      .get('/v1/ExpenseCategories/persistence/get', {
        params: { pageIndex: 0, pageSize: 12 }
      })
      .then((res) => setCategories(res.data.data));
  }, []);

  const handleConfirm = async () => {
    if (expense.isInstallment) {
      await axios.post('/v1/ExpenseTransactions/installments', {
        categoryId: expense.categoryId,
        totalAmount: amount,
        description: expense.description,
        startDate: expense.startDate,
        type: expense.type,
        installments: expense.installments,
        imageUrl: expense.imageUrl,
        status: 1
      });
    } else {
      await axios.post('/v1/ExpenseTransactions/persistence/add', {
        categoryId: expense.categoryId,
        amount,
        description: expense.description,
        date: expense.startDate,
        type: expense.type,
        imageUrl: expense.imageUrl,
        status: 1
      });
    }
    fetchDataAction();
    setOpenConfirm(false);
    setAmount(0);
  };

  var fetchDataAction = async () => {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    await dispatch(getTotalExpenses(year, month, 0, 100));
    await dispatch(getTotalIncomes(year, month, 0, 100));
    
  }
  return (
    <>
      <RootStyle>
        <CardHeader title="Adicionar gastos" />
        <Box sx={{ p: 3 }}>
          <Stack spacing={3}>
            <InputAmount autoWidth={autoWidth} amount={amount} onChange={(e) => setAmount(Number(e.target.value))} />

            <MuiSlider
              value={amount}
              step={STEP}
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              valueLabelDisplay="auto"
              onChange={(_, v) => setAmount(v)}
            />

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle2">Seu saldo</Typography>
              <Typography variant="subtitle1">{fCurrency(34212)}</Typography>
            </Stack>

            <Button variant="contained" size="large" disabled={amount === 0} onClick={() => setOpenConfirm(true)}>
              Add now
            </Button>

            {!amount && (
              <Button variant="contained" size="large" onClick={() => setOpenConfirmDialogJson(true)}>
                Add with json
              </Button>
            )}
          </Stack>
        </Box>
      </RootStyle>

      {matches ? (
        <ConfirmTransferDialog
          open={openConfirm}
          amount={amount}
          autoWidth={autoWidth}
          categories={categories}
          expense={expense}
          setExpense={setExpense}
          onConfirm={handleConfirm}
          onClose={() => setOpenConfirm(false)}
        />
      ) : (
        <ConfirmTransferDrawer
          open={openConfirm}
          amount={amount}
          autoWidth={autoWidth}
          categories={categories}
          expense={expense}
          setExpense={setExpense}
          onConfirm={handleConfirm}
          onClose={() => setOpenConfirm(false)}
        />
      )}

      {matches ? (
        <DialogJson open={openConfirmDialogJson} autoWidth={autoWidth} onClose={() => setOpenConfirmDialogJson(false)} />
      ) : (
        <JsonTransferDrawer
          open={openConfirmDialogJson}
          autoWidth={autoWidth}
          amount={amount}
          onClose={() => setOpenConfirmDialogJson(false)}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      )}
    </>
  );
}
