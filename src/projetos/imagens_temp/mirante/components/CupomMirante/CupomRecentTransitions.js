  import PropTypes from 'prop-types';
  import { useEffect, useRef, useState } from 'react';
  import { format , parseISO } from 'date-fns';
  import { sentenceCase } from 'change-case';
  import Iconify from '../../../../../components/Iconify';
  import { Link as RouterLink } from 'react-router-dom';
  // material
  import { useTheme } from '@mui/material';
  import {
    Box,
    Card,
    Menu,
    Table,
    Avatar,
    Button,
    Divider,
    MenuItem,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    CardHeader,
    Typography,
    TableContainer,
    styled,
    Toolbar
  } from '@mui/material';
  // utils
  //
  import Label from '../../../../../components/Label';
  import Scrollbar from '../../../../../components/Scrollbar';
  import { MIconButton } from '../../../../../components/@material-extend';
  import axios from 'axios';
  import urlApi from '../../../../../_mock/url';
  import dayjs from 'dayjs';

  import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { DatePicker } from '@mui/x-date-pickers/DatePicker';

  // ----------------------------------------------------------------------



  const RootStyle = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3),
  }));

  // ----------------------------------------------------------------------

  AvatarIcon.propTypes = {
    icon: PropTypes.object
  };

  function AvatarIcon({ icon }) {
    return (
      <Avatar
        sx={{
          width: 48,
          height: 48,
          color: 'text.secondary',
          bgcolor: 'background.neutral'
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </Avatar>
    );
  }



  MoreMenuButton.propTypes = {
    onDelete: PropTypes.func,
    onDownload: PropTypes.func,
    onPrint: PropTypes.func,
    onShare: PropTypes.func
  };

  function MoreMenuButton({ onDownload, onPrint, onShare, onDelete }) {
    const menuRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <>
          <MIconButton ref={menuRef} size="large" onClick={handleOpen}>
            <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
          </MIconButton>
        </>

        <Menu
          open={open}
          anchorEl={menuRef.current}
          onClose={handleClose}
          PaperProps={{
            sx: { width: 200, maxWidth: '100%' }
          }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={onDownload}>
            <Iconify icon={'fluent:cloud-download-24-filled'} width={20} height={20} />
            <Typography variant="body2" sx={{ ml: 2 }}>
              Download
            </Typography>
          </MenuItem>
          <MenuItem onClick={onPrint}>
            <Iconify icon={'printerFill'} width={20} height={20} />
            <Typography variant="body2" sx={{ ml: 2 }}>
              Print
            </Typography>
          </MenuItem>
          <MenuItem onClick={onShare}>
            <Iconify icon={'material-symbols:share'} width={20} height={20} />
            <Typography variant="body2" sx={{ ml: 2 }}>
              Share
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={onDelete} sx={{ color: 'error.main' }}>
            <Iconify icon={'iconamoon:trash-fill'} width={20} height={20} />
            <Typography variant="body2" sx={{ ml: 2 }}>
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </>
    );
  }

  export default function CupomRecentTransitions() {
    const theme = useTheme();
    const isLight = theme.palette.mode === 'light';
    const [dados, setDados] = useState([]);
    const currentDate = dayjs();
    const [startDate, setStartDate] = useState(currentDate);
    const handleClickDownload = () => { };
    const handleClickPrint = () => { };
    const handleClickShare = () => { };
    const handleClickDelete = () => { };
    const handleStartDateChange = (newDate) => {
      setStartDate(newDate);
    };
    useEffect(() => {
      const formattedDate = startDate.format('YYYY-MM-DD');
      axios.get(`${urlApi}/mirante/list/cupons/list?date=${formattedDate}`).then((response) => {
        setDados(response.data.dados);
        console.log(response.data.dados)
      });
    }, [startDate]);
    const adjustAndFormatDate = (dateString) => {
      const adjustedDate = new Date(dateString); // Criar instância de Date diretamente
      adjustedDate.setMinutes(adjustedDate.getMinutes() + adjustedDate.getTimezoneOffset()); // Ajustar para UTC
      return format(adjustedDate, 'dd MMM yyyy', { timeZone: 'UTC' });
    };

    return (
      <>
        <Card>
          <Box sx={{ ml: 0, mt: 2 }}>
            <RootStyle>
              <Typography component="div" variant="subtitle1">
                Cupons Mirante
              </Typography>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      label="Date"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Box>
            </RootStyle>

          </Box>
          <CardHeader sx={{ mb: 0 }} />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 720 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Cupom</TableCell>
                    <TableCell>Ultima verificação</TableCell>
                    <TableCell>Quantidade de usos</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dados.length > 0 && dados.map((row) => {
                    console.log(row.date)
                    console.log(format(parseISO(row.date), 'dd MMM yyyy'));
                    return(
                      <TableRow key={row.id}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                          <Box sx={{ ml: 2 }}>
                            <Typography variant="subtitle2"> {row.nome}</Typography>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell>
                        <Typography variant="subtitle2">  {adjustAndFormatDate(row.date)} </Typography>

                      </TableCell>

                      <TableCell>{row.amount}</TableCell>

                      <TableCell>
                        <Label
                          variant={isLight ? 'ghost' : 'filled'}
                          color={
                            (row.status === "ativo" && 'success') ||
                            (row.status === 'in_progress' && 'warning') ||
                            'error'
                          }
                        >
                          {sentenceCase(row.status)}
                        </Label>
                      </TableCell>

                      <TableCell align="right">
                        <MoreMenuButton
                          onDownload={handleClickDownload}
                          onPrint={handleClickPrint}
                          onShare={handleClickShare}
                          onDelete={handleClickDelete}
                        />
                      </TableCell>
                    </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Divider />

          <Box sx={{ p: 2, textAlign: 'right' }}>
            <Button
              to="#"
              size="small"
              color="inherit"
              component={RouterLink}
              endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
            >
              View All
            </Button>
          </Box>
        </Card>
      </>
    );
  }
