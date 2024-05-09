import { WineDataType } from '../../types/wineType';

export const getWineData = (rawData: any): WineDataType[] => {
  return rawData.map((data: any) => {
    return {
      name: data.name,
      link: data.link,
      thumb: data.thumb,
      country: data.country,
      region: data.region,
      average_rating: data.average_rating,
    };
  });
};
