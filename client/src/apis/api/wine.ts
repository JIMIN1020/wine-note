import { AxiosResponse } from 'axios';
import { authInstance, baseInstance } from '../instance';
import { WineSearchRes } from '../../types/api/response';
import { ERROR_ALERT } from '../../constants/message';

export const wineAPI = {
  getWineSearch: async (wineName: string) => {
    try {
      const { data }: AxiosResponse<WineSearchRes> = await baseInstance.get(
        `/api/wine-search?name=${wineName}`
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  addWineNote: async (wineData: any) => {
    try {
      const { data } = await authInstance.post('/wine', wineData);
      return data.isSuccess;
    } catch (err) {
      return false;
    }
  },
  getAllWine: async () => {
    try {
      const { data } = await authInstance.get('/wine?limit=5&page=1');
      return data.result;
    } catch (err) {
      return false;
    }
  },
};
