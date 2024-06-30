import { AxiosResponse } from 'axios';
import { authInstance } from '../instance';
import { ERROR_ALERT } from '@/constants/message';
import {
  CountryStatRes,
  RatingStatRes,
  TypeStatRes,
  WineStatRes,
} from '@/models/analysis.model';

export const analysisAPI = {
  getWineStatistics: async () => {
    try {
      const { data }: AxiosResponse<WineStatRes> =
        await authInstance.get('/analysis/wine');
      return data;
    } catch {
      window.alert(ERROR_ALERT);
    }
  },
  getRatingStatistics: async () => {
    try {
      const { data }: AxiosResponse<RatingStatRes> =
        await authInstance.get('/analysis/rating');
      return data;
    } catch {
      window.alert(ERROR_ALERT);
    }
  },
  getTypeStatistics: async () => {
    try {
      const { data }: AxiosResponse<TypeStatRes> =
        await authInstance.get('/analysis/type');
      return data;
    } catch {
      window.alert(ERROR_ALERT);
    }
  },
  getCountryStatistics: async () => {
    try {
      const { data }: AxiosResponse<CountryStatRes> =
        await authInstance.get('/analysis/country');
      return data;
    } catch {
      window.alert(ERROR_ALERT);
    }
  },
};
