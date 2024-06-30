import { analysisAPI } from '@/apis/api/analysis';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useCountryStat = () => {
  const [top3, setTop3] = useState<{ country: string; count: number }[]>([]);

  const { data } = useQuery({
    queryKey: ['countryStat'],
    queryFn: async () => {
      return await analysisAPI.getCountryStatistics();
    },
  });

  useEffect(() => {
    if (data) {
      const top3Data = Object.entries(data)
        .filter((item) => item !== undefined)
        .map(([country, count]) => ({ country, count }))
        .sort((a, b) => b.count - a.count);

      setTop3(top3Data);
    }
  }, [data]);

  return { top3 };
};
