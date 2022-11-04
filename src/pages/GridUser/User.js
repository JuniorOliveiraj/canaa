import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Page from '../../components/Page';
import Label from '../../components/Label';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../sections/@dashboard/user';
// mock
//import USERLIST from '../../_mock/user';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function User() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  //const [USERLIST, setUSERLIST] = useState([{}]);
  const USERLIST = [{
    id: 1,
    avatarUrl: `/static/mock-images/avatars/avatar_1jpg`,
    name: 'joao coco',
    company: 'usa',
    isVerified: true,
    status: 'active',
    role: 'Leader',

  }]



  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;


  /*  botão adicionar usuario */
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [UserName, setUserName] = useState('');
  const [UserLastName, setUserLastName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [company, setCompany] = useState('');
  const [statusChecked, setStatusChecked] = React.useState(true);
  const [verificadoChecked, setVerificadoChecked] = React.useState(true);

  const handleChangeStatus = (event) => {
    setStatusChecked(event.target.checked);
  };
  const handleChangeVerificado = (event) => {
    setVerificadoChecked(event.target.checked);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Adicionar = () => {
    for (var i = 1; i<USERLIST.length; i++){
      console.log(i)
    }
    const data = [
      { 
        id:i,
        name: UserName,
        avatarUrl: UserLastName,
        company: company,
        avatarUrl: avatarUrl,
        status:statusChecked ? "active":"inative",
        isVerified: verificadoChecked 

      }
    ]
    USERLIST.push({
      id:i,
      name: UserName,
      avatarUrl: UserLastName,
      company: company,
      avatarUrl: avatarUrl,
      status:statusChecked ? "active":"inative",
      isVerified: verificadoChecked 

    })
    console.log(USERLIST)
    setOpen(false);
    setUserName("")
    setUserLastName("")
    setCompany("")
    setAvatarUrl('')

  };

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" onClick={handleClickOpen()} />}>
            New User
          </Button>
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"

        >
          <DialogTitle id="scroll-dialog-title">Adicionar </DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <Paper
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: window.innerWidth > 500 ? '25ch' : '100%' },
              }}
              noValidate
              autoComplete="off"

            >
              <TextField
                id="outlined-name"
                label="Name"
                onChange={e => setUserName(e.target.value)}
                value={UserName}
              />
              <TextField
                id="outlined-Role"
                label="Role"
                onChange={e => setUserLastName(e.target.value)}
                value={UserLastName}
              />

            </Paper>
            <Paper
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '100%' },
              }}
              noValidate
              autoComplete="off"

            >
              <TextField
                id="outlined-url"
                label="Url perfil"
                onChange={e => setAvatarUrl(e.target.value)}
                value={avatarUrl}
              />

             

            </Paper>
              <Paper
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width:'9ch',  },
                }}
                noValidate
                autoComplete="off"
  
              >
                 <FormControlLabel control={
                <Checkbox
                  
                  checked={statusChecked}
              
                  onChange={handleChangeStatus}
                  inputProps={{ 'aria-label': 'controlled' }}
                  label="Url perfil"
                />
              }
                label={statusChecked ? "ativo" : "inativo"} />

                
                 <FormControlLabel control={
                <Checkbox
         
                  checked={verificadoChecked}
                  onChange={handleChangeVerificado}
                  inputProps={{ 'aria-label': 'controlled' }}
                  label="Url perfil"
                />
              }
                label={verificadoChecked ? "ativo" : "inativo"} />
                
  
              </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={Adicionar} >Adicionar</Button>
          </DialogActions>
        </Dialog>
        <Card>
          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, status, company, avatarUrl, isVerified } = row;
                    const isItemSelected = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, name)} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{company}</TableCell>
                        <TableCell align="left">{role}</TableCell>
                        <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
                        <TableCell align="left">
                          <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                            {sentenceCase(status)}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <UserMoreMenu />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
