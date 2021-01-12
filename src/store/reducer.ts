import { combineReducers } from '@reduxjs/toolkit';

import { homeSlice } from '../features/home';
import { dashboardSlice } from '../features/dashboard';
import { authSlice } from '../features/auth';

export default combineReducers({
  home: homeSlice,
  dashboard: dashboardSlice,
  auth: authSlice,
});
