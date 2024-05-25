import { authInstance, baseInstance } from '../instance';

export const wineAPI = {
  getWineSearch: async (wineName: string) => {
    try {
      const { data } = await baseInstance.get(
        `/api/wine-search?name=${wineName}`
      );
      return data.result;
    } catch (err) {
      return err;
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
};
