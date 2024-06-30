import { AxiosResponse } from 'axios';
import { authInstance } from '../instance';
import { ERROR_ALERT } from '@/constants/message';
import { RatingStatRes, WineStatRes } from '@/models/analysis.model';

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
};
