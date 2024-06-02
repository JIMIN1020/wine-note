import { WineSearchRes } from '../../types/api/response';

export const getWineData = (response: WineSearchRes) => {
  if (response.isSuccess) {
    return response.result.map((data: any) => {
      return {
        name: data.name,
        link: data.link,
        thumb: data.thumb,
        country: data.country,
        region: data.region,
        average_rating: data.average_rating,
      };
    });
  }
};
