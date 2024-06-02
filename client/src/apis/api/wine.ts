import { AxiosResponse } from 'axios';
import { authInstance, baseInstance } from '../instance';
import { CommonRes, WineSearchRes } from '../../types/api/response';
import { ERROR_ALERT } from '../../constants/message';
import { AddWineNoteReq } from '../../types/api/request';

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
  addWineNote: async (wineData: AddWineNoteReq) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.post(
        '/wine',
        wineData
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
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
