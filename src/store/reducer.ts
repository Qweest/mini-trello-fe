import { combineReducers } from '@reduxjs/toolkit';

import { dashboardSlice } from '../features/dashboard';
import { authSlice } from '../features/auth';

export default combineReducers({
  dashboard: dashboardSlice,
  auth: authSlice,
});
