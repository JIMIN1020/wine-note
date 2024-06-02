export interface CommonRes {
  isSuccess: boolean;
  message?: string;
}

export interface EmailCheckRes extends CommonRes {
  result: boolean;
}
