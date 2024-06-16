import { CommonRes } from './common.model';

export interface LoginReq {
  email: string;
  password: string;
}

export interface JoinReq {
  nickname: string;
  email: string;
  password: string;
}

export interface EmailCheckRes extends CommonRes {
  result: boolean;
}
