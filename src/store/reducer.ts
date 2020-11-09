import { combineReducers } from '@reduxjs/toolkit';

import { dashboardSlice } from '../features/dashboard';

export default combineReducers({
  dashboard: dashboardSlice,
});
