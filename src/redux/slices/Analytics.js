import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../auth/Axios.interceptor';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  gastosChartMes: [],
  expenses: [],
  incomes: [],
  categoriesCharts: [],
  listaDeGastos: [],
  totalExpenses: null,
  totalIncomes: null,
  saldoEmConta: null,
  porcentagemComparadoComMesAnterior: 0,
  hasMore: true,
  cartaoSelecionado: null,
  index: 0,
  step: 11,
  createPostError: null,
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.createPostError = action.payload; // Adicione essa linha
    },

    // GET Chart
    getChatSucess(state, action) {
      state.isLoading = false;
      state.gastosChartMes = action.payload;
    },
    getTotalExpenses(state, action) {
      state.isLoading = false;
      state.totalExpenses = action.payload;
    },
    getTotalIncomes(state, action) {
      state.isLoading = false;
      state.totalIncomes = action.payload;
    },
    getSaldoEmConta(state, action) {
      state.isLoading = false;
      state.saldoEmConta = action.payload;
    },
    getExpenses(state, action) {
      state.isLoading = false;
      state.expenses = action.payload;
    },
    getIncomes(state, action) {
      state.isLoading = false;
      state.incomes = action.payload;
    },
    getCategoriesCharts(state, action) {
      state.isLoading = false;
      state.categoriesCharts = action.payload;
    },
    getListaDeGastos(state, action) {
      state.isLoading = false;
      state.listaDeGastos = action.payload;
    },
    noHasMore(state) {
      state.hasMore = false;
    },


  }
});

// Reducer
export default slice.reducer;

// Actions
export const { gettotalExpenses, getChatSucess } = slice.actions;


// ----------------------------------------------------------------------

export function getTotalExpenses(year, month,  pageIndex, pageSize) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
       const response = await axios.get('/v1/ExpenseTransactions/Expenses', {
        params: { Year: year, Month: month, Type: 0, PageIndex: pageIndex, PageSize: pageSize }
      });
       dispatch(slice.actions.getExpenses(response.data.expenses));
      dispatch(slice.actions.getTotalExpenses(response.data.totalAmount));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
export function getTotalIncomes(year, month,  pageIndex, pageSize) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
       const response = await axios.get('/v1/ExpenseTransactions/Expenses', {
        params: { Year: year, Month: month, Type: 1, PageIndex: pageIndex, PageSize: pageSize }
      });
       dispatch(slice.actions.getIncomes(response.data.expenses));
      dispatch(slice.actions.getTotalIncomes(response.data.totalAmount));
    } catch (error) {
       console.log('Erro ao buscar receitas.', error);
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getChartGastos(mes, ano) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
       const response = await axios.get('/v1/ExpenseTransactions/total-monthly', {
        params: { mes, ano }
      });
      dispatch(slice.actions.getChatSucess(response.data.dados.data.charts));
      dispatch(slice.actions.getExpenses(response.data.dados.data.charts[0].data));
      dispatch(slice.actions.getCategoriesCharts(response.data.dados.data.week));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}


export function getSaldoEmConta(mes, ano) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const rota = "/charts/saldo";
      const response = await axios.get('/api/Analytics/gastos/all', {
        params: { mes, ano, rota }
      });
      dispatch(slice.actions.getSaldoEmConta(response.data.dados.data.values[0].Total));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}





//-------------------------------------------------------------------

export function getListaDeGastos(mes, ano) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const rota = "/list/gastos/todos";
      const response = await axios.get('/api/Analytics/gastos/list', {
        params: { mes, ano, rota }
      }); 
      dispatch(slice.actions.getListaDeGastos(response.data.gastosMapeados));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------
