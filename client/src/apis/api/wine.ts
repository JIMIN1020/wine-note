import { baseInstance } from '../instance';

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
};
