import { actions } from './slice';
import { signUp } from './api';
import { SignUpRequest } from './api/entities';
import { AppThunk } from '../../store';

export const signUpAction = (boardRequest: SignUpRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.signUpPending());
    const { data } = await signUp(boardRequest);
    dispatch(actions.signUpSuccess());
  } catch (e) {
    dispatch(actions.signUpFailure());
  }
};
