import { AppThunk } from '../../store';
import { SignInRequest, SignUpRequest } from './api/entities';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants';
import { signUp, signIn, fetchMe } from './api';
import { actions } from './slice';

export const signUpAction = (signUpRequest: SignUpRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.authPending());

    const { data } = await signUp(signUpRequest);
    const { accessToken, refreshToken } = data;

    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);

    dispatch(actions.authSuccess(data));
  } catch (e) {
    dispatch(actions.authFailure());
    throw e;
  }
};

export const signInAction = (signInRequest: SignInRequest): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.authPending());

    const { data } = await signIn(signInRequest);
    const { accessToken, refreshToken } = data;

    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);

    dispatch(actions.authSuccess(data));
  } catch (e) {
    dispatch(actions.authFailure());
    throw e;
  }
};

export const fetchMeAction = (): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.fetchMePending());
    const { data } = await fetchMe();
    dispatch(actions.fetchMeSuccess(data));
  } catch (e) {
    dispatch(actions.fetchMeFailure());
    throw e;
  }
};
