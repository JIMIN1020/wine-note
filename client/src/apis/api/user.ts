import { baseInstance } from '../instance';
import { processUserData } from '../services/user';
import { JoinReq, LoginReq } from '../../types/api/request';
import { AxiosResponse } from 'axios';
import { CommonRes, EmailCheckRes } from '../../types/api/response';
import { ERROR_ALERT } from '../../constants/message';

export const userAPI = {
  login: async (formData: LoginReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await baseInstance.post(
        `/user/login`,
        formData
      );
      if (data.isSuccess) {
        processUserData(data);
        return data;
      }
    } catch (err: any) {
      if (err.response.status === 401) {
        return err.response.data;
      } else {
        window.alert(ERROR_ALERT);
      }
    }
  },
  join: async (formData: JoinReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await baseInstance.post(
        `/user/join`,
        formData
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  checkEmail: async (email: string) => {
    try {
      const { data }: AxiosResponse<EmailCheckRes> = await baseInstance.post(
        `/user/join/emailCheck`,
        {
          email,
        }
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
};
