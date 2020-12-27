import { actions } from './slice';
import { signUp, signIn } from './api';
import { SignInRequest, SignUpRequest } from './api/entities';
import { AppThunk } from '../../store';

export const signUpAction = (boardRequest: SignUpRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.signUpPending());
    const { data } = await signUp(boardRequest);

    dispatch(actions.signUpSuccess(data));
  } catch (e) {
    dispatch(actions.signUpFailure());
  }
};

export const signInAction = (boardRequest: SignInRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.signInPending());
    const { data } = await signIn(boardRequest);

    dispatch(actions.signInSuccess(data));
  } catch (e) {
    dispatch(actions.signInFailure());
  }
};
