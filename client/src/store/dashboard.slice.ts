import { createSlice } from '@reduxjs/toolkit';
import type { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { Dashboard } from '../shared/Types/dashboardSlice';
type State = Dashboard;

const initialState: State = {
  hommaPersonalWatchlist: [],
  sectorWatchList: [],
  youtubeVideos: [],
  hpaVideos: [],
  chartLinkScanners: [],
  telegramChannel: [],
  tradingViewHPAIndicators: [],
};
const setDashboardData: CaseReducer<State, PayloadAction<State>> = (
  state,
  action
) => ({
  ...state,
  ...action.payload,
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData,
  },
});

export const dashboardActions = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
