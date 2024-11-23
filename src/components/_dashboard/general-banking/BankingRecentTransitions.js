import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { fCurrency } from '../../../utils/formatNumber';
import PropTypes from 'prop-types';
// material
import { useTheme } from '@mui/material/styles';
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
  Box
} from '@mui/material';
// redux 
import { useSelector, useDispatch, } from '../../../redux/store';
import {  deleteUser } from '../../../redux/slices/user';

import useSettings from '../../../hooks/useSettings';
// components

import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import SearchNotFound from '../../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../user/list';
import Iconify from '../../Iconify';
import { getListaDeGastos } from '../../../redux/slices/Analytics';
import { format } from 'date-fns';

 
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

function renderAvatar(transitions) {
  if (transitions.category === 'Books') {
    return <AvatarIcon icon={'ph:book-fill'} />;
  }
  if (transitions.category === 'Beauty & Health') {
    return <AvatarIcon icon={'mdi:heart'} />;
  }
  return transitions.avatar ? (
    <Avatar
      alt={transitions.category}
      src={transitions.avatar}
      sx={{
        width: 48,
        height: 48,
        boxShadow: (theme) => theme.customShadows.z8,
        backgroundColor: "#FFF",
        "& svg": {
          fill: "red", // Define a cor do SVG
        },
      }}
    />
  ) : null;
}

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' }
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

export default function BankingRecentTransitions() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const dispatch = useDispatch();
  //const { listaDeGastos , } = useSelector((state) => state.user);
  const { listaDeGastos } = useSelector((state) => state.Analytics);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('desc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('date');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    //dispatch(getlistaDeGastos());
    dispatch(getListaDeGastos());
    console.log(listaDeGastos);
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = listaDeGastos.map((n) => n.name);
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

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listaDeGastos.length) : 0;

  const filteredUsers = applySortFilter(listaDeGastos, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    < >

      <Card>
        <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

        <Scrollbar>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <UserListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={listaDeGastos.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
              />
              <TableBody>
                {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  const { id, name, status, amount, avatar, date } = row;
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
                      <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ position: 'relative' }}>
                          {renderAvatar(row)}
                          <Box
                            sx={{
                              right: 0,
                              bottom: 0,
                              width: 18,
                              height: 18,
                              display: 'flex',
                              borderRadius: '50%',
                              position: 'absolute',
                              alignItems: 'center',
                              color: 'common.white',
                              bgcolor: 'error.main',
                              justifyContent: 'center',
                              ...(row.type === 'Income' && {
                                bgcolor: 'success.main'
                              })
                            }}
                          >
                            <Iconify
                              icon={row.type === 'Income' ? 'eva:diagonal-arrow-left-down-fill' : 'eva:diagonal-arrow-right-up-fill'}
                              width={16}
                              height={16}
                            />
                          </Box>
                        </Box>
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {row.message}
                          </Typography>
                          <Typography variant="subtitle2"> {row.category}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                      <TableCell align="left">{fCurrency(amount)}</TableCell>
                      <TableCell>
                        <Typography variant="subtitle2">{format(new Date(date), 'dd MMM yyyy')}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {format(new Date(date), 'p')}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Label
                          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                          color={(status === 'banned' && 'error') || 'success'}
                        >
                          {sentenceCase(status)}
                        </Label>
                      </TableCell>

                      <TableCell align="right">
                        <UserMoreMenu onDelete={() => handleDeleteUser(id)} userName={name}id={id} />
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
          count={listaDeGastos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

    </ >
  );
}
