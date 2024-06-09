import { AxiosResponse } from 'axios';
import { authInstance, baseInstance } from '../instance';
import {
  CommonRes,
  GetAllWineRes,
  GetWineDetailRes,
  WineSearchRes,
} from '../../types/api/response';
import { ERROR_ALERT } from '../../constants/message';
import { AddWineNoteReq, GetWinesParams } from '../../types/api/request';

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
  getWines: async (params: GetWinesParams) => {
    try {
      const { data }: AxiosResponse<GetAllWineRes> = await authInstance.get(
        '/wine?limit=5&page=1',
        { params: params }
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  getWineDetail: async (wineId: number) => {
    try {
      const { data }: AxiosResponse<GetWineDetailRes> = await authInstance.get(
        `/wine/${wineId}`
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
  deleteWine: async (wineId: number) => {
    try {
      const { data }: AxiosResponse<CommonRes> = await authInstance.delete(
        `/wine/${wineId}`
      );
      return data;
    } catch (err) {
      window.alert(ERROR_ALERT);
    }
  },
};
