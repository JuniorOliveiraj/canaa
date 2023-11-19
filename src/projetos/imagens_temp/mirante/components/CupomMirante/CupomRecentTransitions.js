import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
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
  TableContainer
} from '@mui/material';
// utils
//
import Label from '../../../../../components/Label';
import Scrollbar from '../../../../../components/Scrollbar';
import { MIconButton } from '../../../../../components/@material-extend';
import axios from 'axios';
import urlApi from '../../../../../_mock/url';

// ----------------------------------------------------------------------



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
  const [dados, setDados] = useState([])
  const handleClickDownload = () => { };
  const handleClickPrint = () => { };
  const handleClickShare = () => { };
  const handleClickDelete = () => { };

  useEffect(() => {
    axios.get(`${urlApi}/mirante/list/cupons/list`).then((response) => {
      setDados(response.data.dados);
    });
  }, []);

  return (
    <>
      <Card>
        <CardHeader title="Recent Transitions" sx={{ mb: 3 }} />
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
                {dados.length > 0 && dados.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <Box sx={{ ml: 2 }}>
                          <Typography variant="subtitle2"> {row.nome}</Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2">{format(new Date(row.date), 'dd MMM yyyy')}</Typography>

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
                ))}
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
