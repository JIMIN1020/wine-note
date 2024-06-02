import { baseInstance } from '../instance';
import { processUserData } from '../services/user';
import { JoinReq, LoginReq } from '../../types/api/request';
import { AxiosResponse } from 'axios';
import { CommonRes } from '../../types/api/response';

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
      console.log(err);
      if (err.response.status === 401) {
        return err.response.data;
      } else {
        window.alert('오류가 발생했습니다. 다시 시도해주세요.');
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
      window.alert('오류가 발생했습니다. 다시 시도해주세요.');
    }
  },
  checkEmail: async (email: string) => {
    try {
      const { data } = await baseInstance.post(`/user/join/emailCheck`, {
        email,
      });
      return data.result;
    } catch (err) {
      return false;
    }
  },
};
