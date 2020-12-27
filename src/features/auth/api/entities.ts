import { Tokens, User } from '../entities';

export interface SignUpRequest {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResponse extends Tokens {
  user: User;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse extends Tokens {
  user: User;
}
