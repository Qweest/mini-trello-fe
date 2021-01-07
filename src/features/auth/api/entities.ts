import { Tokens, User } from '../entities';

export interface SignUpRequest {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface AuthResponse extends Tokens {
  user: User;
}
