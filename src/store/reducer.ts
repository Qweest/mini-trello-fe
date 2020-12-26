import { combineReducers } from '@reduxjs/toolkit';

import { dashboardSlice } from '../features/dashboard';
import { SignUpSlice } from '../features/signUp';

export default combineReducers({
  dashboard: dashboardSlice,
  signUp: SignUpSlice,
});
