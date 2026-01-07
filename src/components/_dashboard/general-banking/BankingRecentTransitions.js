import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { fCurrency } from '../../../utils/formatNumber';
import PropTypes from 'prop-types';
import axios from '../../../auth/Axios.interceptor';
 
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
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
// redux 
import { useDispatch, } from '../../../redux/store';
import {  deleteUser } from '../../../redux/slices/user';

import useSettings from '../../../hooks/useSettings';
// components

import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import SearchNotFound from '../../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../user/list';
import Iconify from '../../Iconify';
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
  { id: 'description', label: 'Description', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
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
    return filter(array, (_user) => _user.description.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function BankingRecentTransitions() {
  const { themeStretch } = useSettings();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [expenses, setExpenses] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  useEffect(() => {
    const savedFilters = localStorage.getItem('bankingFilters');
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);
      setYear(filters.year || '');
      setMonth(filters.month || '');
      setType(filters.type || '');
      setCategoryId(filters.categoryId || '');
      setStartDate(filters.startDate || '');
      setEndDate(filters.endDate || '');
      setFilterName(filters.filterName || '');
    }
  }, []);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('desc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('date');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    setPage(0);
  }, [filterName]);

   useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const params = {
          PageIndex: page,
          PageSize: rowsPerPage,
        };
        if (year !== '' && !isNaN(parseInt(year))) params.Year = parseInt(year);
        if (month !== '' && !isNaN(parseInt(month))) params.Month = parseInt(month);
        if (filterName) params.Search = filterName;
        if (type !== '') params.Type = parseInt(type);
        if (categoryId !== '' && !isNaN(parseInt(categoryId))) params.CategoryId = parseInt(categoryId);
        if (startDate) params.StartDate = startDate;
        if (endDate) params.EndDate = endDate;
        const response = await axios.get('/v1/ExpenseTransactions/Expenses', {
          params,
        });
        setExpenses(response.data.expenses);
        setTotalTransactions(response.data.totalTransactions);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, [page, rowsPerPage, year, month, filterName, type, categoryId, startDate, endDate]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = expenses.map((n) => n.description);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, description) => {
    const selectedIndex = selected.indexOf(description);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, description);
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

  const handleFilterClick = () => {
    setFilterModalOpen(true);
  };

  const handleFilterApply = () => {
    setFilterModalOpen(false);
    const filters = {
      year,
      month,
      type,
      categoryId,
      startDate,
      endDate,
      filterName
    };
    localStorage.setItem('bankingFilters', JSON.stringify(filters));
    // The useEffect will trigger due to state changes
  };

  const handleFilterCancel = () => {
    setFilterModalOpen(false);
  };

  const handleDeleteExpense = (expenseId) => {
    dispatch(deleteUser(expenseId)); // Assuming deleteUser works for expenses, or change to appropriate action
  };

  const emptyRows = 0; // Server-side pagination

  const filteredUsers = applySortFilter(expenses, getComparator(order, orderBy), '');

  const isUserNotFound = filteredUsers.length === 0;

  return (
    < >

      <Card>
        <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} placeholderName="Search transaction..." onFilterClick={handleFilterClick} />

        <Box sx={{ position: 'relative' }}>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={totalTransactions}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.map((row) => {
                    const { id, date, amount, categoryId, categoryName, type, description } = row;
                    const status = 'completed'; // Default status
                    const category = categoryName;
                    const isItemSelected = selected.indexOf(description) !== -1;

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
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, description)} />
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
                                  bgcolor: type === 1 ? 'error.main' : 'success.main',
                                  justifyContent: 'center',
                                }}
                              >
                                <Iconify
                                  icon={type === 1 ? 'eva:diagonal-arrow-left-down-fill' :'eva:diagonal-arrow-right-up-fill' }
                                  width={16}
                                  height={16}
                                />
                              </Box>
                            </Box>
                            <Box sx={{ ml: 2 }}>
                              
                              <Typography variant="subtitle2"> {description}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              <Iconify icon={'heroicons:shopping-cart-solid'} width={17} height={17} /> {category} 
                              </Typography>
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
                        <TableCell align="left">
                          <Label
                            variant={'ghost'}
                            color={'info'}
                          >
                            {sentenceCase(category)}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <UserMoreMenu onDelete={() => handleDeleteExpense(id)} userName={description} id={id} handleNotion={undefined} />
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

          {loading && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                zIndex: 1,
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalTransactions}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>

      <Dialog open={filterModalOpen} onClose={handleFilterCancel} maxWidth="sm" fullWidth>
        <DialogTitle>Filter Transactions</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            <TextField
              label="Year"
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
            />
            <TextField
              label="Month"
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)} label="Type">
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={0}>Income</MenuItem>
                <MenuItem value={1}>Expense</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Category ID"
              type="number"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              fullWidth
            />
            <TextField
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFilterCancel}>Cancel</Button>
          <Button onClick={handleFilterApply} variant="contained">Apply</Button>
        </DialogActions>
      </Dialog>

    </ >
  );
}
