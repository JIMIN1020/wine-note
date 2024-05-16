import { baseInstance } from '../instance';
import { processUserData } from '../services/user';

export const userAPI = {
  login: async (email: string, password: string) => {
    try {
      const { data } = await baseInstance.post(`/user/login`, {
        email,
        password,
      });
      if (data.isSuccess) {
        processUserData(data);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};
