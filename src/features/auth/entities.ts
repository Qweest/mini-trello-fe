export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface Auth {
  user?: User;
  pending: boolean;
  error: string;
}
