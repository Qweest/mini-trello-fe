export interface SignUpRequest {
  email: string;
  username: string;
  password: string;
}

export interface SignUpResponse {
  email: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}
