import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios'; 
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  gastosChartMes: [],
  chartMesCompleto: [],
  categoriesCharts: [],
  totalGasto: null,
  saldoEmConta:null,
  porcentagemComparadoComMesAnterior: 0,
  hasMore: true,
  cartaoSelecionado:null,
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
    getTotalGasto(state, action) {
      state.isLoading = false;
      state.totalGasto = action.payload;
    },
    getSaldoEmConta(state, action) {
      state.isLoading = false;
      state.saldoEmConta = action.payload;
    },
    getChartMesCompleto(state, action) {
      state.isLoading = false;
      state.chartMesCompleto = action.payload;
    },
    getCategoriesCharts(state, action) {
      state.isLoading = false;
      state.categoriesCharts = action.payload;
    },
    noHasMore(state) {
      state.hasMore = false;
    },


  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getTotalGasto, getChatSucess } = slice.actions;


// ----------------------------------------------------------------------
 
export function getGastosTotal(mes, ano) {
    return async (dispatch) => {
        dispatch(slice.actions.startLoading());
        try {
            const rota = "/list/gastos/total";
            const response = await axios.get('/api/Analytics/gastos/all', {
                params: { mes, ano , rota }
            });
            //dispatch(slice.actions.getChatSucess(response.data.charts));
            dispatch(slice.actions.getTotalGasto(response.data.dados.data.total));
        } catch (error) {
            console.error(error);
            dispatch(slice.actions.hasError(error));
        }
    };
}
 
export function getChartGastos(mes, ano) {
    return async (dispatch) => {
        dispatch(slice.actions.startLoading());
        try {
            const rota = "/charts/gastos";
            const response = await axios.get('/api/Analytics/gastos/all', {
                params: { mes, ano , rota }
            });
            dispatch(slice.actions.getChatSucess(response.data.dados.data.charts));
            dispatch(slice.actions.getChartMesCompleto(response.data.dados.data.charts[0].data));
            dispatch(slice.actions.getCategoriesCharts(response.data.dados.data.week));
        
            console.log(response.data.dados.data)
             
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
              params: { mes, ano , rota }
          });
          dispatch(slice.actions.getSaldoEmConta(response.data.dados.data.values[0].Total));
      
          console.log(response.data.dados.data.values[0].Total)
           
      } catch (error) {
          console.error(error);
          dispatch(slice.actions.hasError(error));
      }
  };
}
// ----------------------------------------------------------------------
 