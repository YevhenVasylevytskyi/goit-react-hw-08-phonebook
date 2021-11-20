import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer from './phonebook/filter/filter-reducer';
import { phonebookApi } from './phonebook/phonebookApi';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
