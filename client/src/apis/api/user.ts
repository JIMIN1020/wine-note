import { baseInstance } from '../instance';
import { processUserData } from '../services/user';
import { JoinReq, LoginReq } from '@/models/user.model';
import { AxiosResponse } from 'axios';
import { EmailCheckRes } from '@/models/user.model';
import { ERROR_ALERT } from '../../constants/message';
import { CommonRes } from '@/models/common.model';

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
      if (err.response.status === 403) {
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
