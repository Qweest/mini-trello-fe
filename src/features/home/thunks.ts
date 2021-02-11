import { AppThunk } from '../../store';
import { fetchBoards } from './api';
import { actions } from './slice';

export const fetchBoardsAction = (): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.fetchBoardsPending());
    const { data } = await fetchBoards();
    dispatch(actions.fetchBoardsSuccess(data));
  } catch (e) {
    dispatch(actions.fetchBoardsFailure());
    throw e;
  }
};
