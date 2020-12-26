import { mainService } from '../../../api';
import { SIGN_UP } from './constants';
import { SignUpRequest } from './entities';

export const signUp = async (signUpRequest: SignUpRequest) => {
  return await mainService.post(SIGN_UP, signUpRequest);
};
