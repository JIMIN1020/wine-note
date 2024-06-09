import { wineAPI } from '@/apis/api/wine';
import { QUERY_STRING } from '@/constants/queryString';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

export const useWines = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data, isLoading } = useQuery({
    queryKey: [
      'wines',
      params.get(QUERY_STRING.CATEGORY),
      params.get(QUERY_STRING.NAME),
    ],
    queryFn: () =>
      wineAPI
        .getWines({
          category: params.get(QUERY_STRING.CATEGORY)
            ? +params.get(QUERY_STRING.CATEGORY)!
            : undefined,
          name: params.get(QUERY_STRING.NAME)
            ? params.get(QUERY_STRING.NAME)!
            : undefined,
        })
        .then((res) => res?.result),
  });

  return {
    wineData: data,
    isLoading,
  };
};
