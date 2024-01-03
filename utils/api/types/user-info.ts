import { UserInfoRes } from './user-info-res';

export interface UserInfo {
  isError: boolean;
  message: string | undefined;
  userInfo?: UserInfoRes;
}
