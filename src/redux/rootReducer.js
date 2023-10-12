import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices

import kanbanReducer from './slices/kanban';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

// const productPersistConfig = {
//   key: 'product',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: ['sortBy', 'checkout']
// };

const rootReducer = combineReducers({
  //user: userReducer,
  kanban: kanbanReducer,
});

export { rootPersistConfig, rootReducer };
