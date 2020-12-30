import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import { thunkErrorHandlerRefresh } from '../utils/thunkErrorHandler';
import rootReducer from './reducer';
import { RootState } from './entities';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    thunkErrorHandlerRefresh,
    ...getDefaultMiddleware(),
  ],
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
