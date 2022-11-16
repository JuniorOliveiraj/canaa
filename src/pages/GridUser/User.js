import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
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

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import AdicionarUsuario from './adicionarUsuario';


import { collection, query,/* where, */getDocs } from "firebase/firestore";
import { db } from '../../firebase';

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





















  /*Trafeco de dados externos 
 -------------------------------------------------------------------------------------
]*/







  //API JAVA 

  const baseURL = "http://192.168.3.31:8080/api";
  const [dataApiJAva, setDataApiJAva] = useState(null);
  const [dataApiFireBase, setDataApiFireBase] = useState(null);
  useEffect(() => {
    try {
      fetch(`${baseURL}/usuarios/listar`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => setDataApiJAva(actualData))
        .catch((err) => {
          console.log(err.message);
          setState({
            openNotification: true,
            vertical: 'top',
            horizontal: 'right',
            
          })
          setErrorMessage(err.message === "Failed to fetch" ? "Falha ao conectar na API" : err.message)
        });
    } catch (error) {

    }

  }, []);

  //***************
  /*
  *
  *@FIREBASE
  */



  /*
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  */





  //console.log(dataApiJAva)

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [errorMessage , setErrorMessage] = useState()
  const [state, setState] = React.useState({
    openNotification: false,
    vertical: 'top',
    horizontal: 'right',
    
  });

  const { vertical, horizontal, openNotification } = state;
  const handleClose2 = () => {
    setState({ ...state, openNotification: false });
  };
  const USERLIST = [{
    id: 0,
    avatarUrl: `/static/mock-images/avatars/avatar_1jpg`,
    name: 'Junior Oliveira',
    company: 'Dev',
    isVerified: true,
    status: 'active',
    role: 'FullStack',

  }]


  useEffect(() => {
    const dbFirebase = async () => {
      try {

        const q = query(collection(db, "jr_usuarios")/*, where("capital", "==", true)*/);
        const querySnapshot = await getDocs(q);
        const dbData = [];
        querySnapshot.forEach(function (doc) {
          dbData.push(doc.data());
        });

        // console.log( dbData)
        setDataApiFireBase(dbData)
      } catch (error) {
        console.log("Fire base => ", error.message)
        setState({
          openNotification: true,
          vertical: 'top',
          horizontal: 'right',
          
        })
        setErrorMessage(error.message === "Missing or insufficient permissions." ? "sem permição Firebase":error.message)
      }
    };
    dbFirebase()
  }, []);


  if (dataApiJAva !== null) {
    USERLIST.push(dataApiJAva);
  } else if (dataApiFireBase !== null) {
    // USERLIST.push( dataApiFireBase );
    dataApiFireBase.forEach(function (e) {
      USERLIST.push(e)
    })

    //console.log(dataApiFireBase)
  }

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

  /* Fim **********Trafeco de dados externos 
-------------------------------------------------------------------------------------
*
*
* 
* 
]*/



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

  const [add, setAdd] = useState(false);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setAdd(false);
    setScroll(scrollType);

  };

  const handleClose = () => {
    setOpen(false);
  };
  const BtnAdicionar = () => {
    setAdd(true)
    setOpen(false);
  };

  return (
    <Page title="User">
      <Container>
      <div>
          <Snackbar
            open={openNotification} autoHideDuration={6000}
            onClose={handleClose2}
            anchorOrigin={{ vertical, horizontal }}
            key={vertical + horizontal}
          >
            <Alert
              onClose={handleClose2}
              severity="error" sx={{ width: window.innerWidth  < 500 ? '70%' : '100%'  }}
            >
             {errorMessage}
              
            </Alert>
          </Snackbar>
        </div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button onClick={handleClickOpen()} variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
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
            <AdicionarUsuario value={add} index={USERLIST} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={BtnAdicionar} >Adicionar</Button>
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
