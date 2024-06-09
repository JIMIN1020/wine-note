import { wineAPI } from '@/apis/api/wine';
import useStore from '@/store/store';
import { useQuery } from '@tanstack/react-query';

export const useWine = () => {
  const { selectedWine } = useStore();

  const { data, isLoading } = useQuery({
    queryKey: ['wineDetail', selectedWine],
    queryFn: async () => {
      console.log('called!');
      return wineAPI.getWineDetail(selectedWine!).then((res) => res?.result);
    },
    enabled: selectedWine !== null,
  });

  return {
    wineDetailData: data,
    isLoading,
  };
};
