import { User } from "./User";

export interface LoginResponse {
  message: string;
  status: boolean;
  token: string;
  user: User;
}