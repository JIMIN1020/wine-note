import { wineAPI } from '@/apis/api/wine';
import { useQuery } from '@tanstack/react-query';
import useWineStore from '@/store/wineStore';

export const useWine = () => {
  const selectedWine = useWineStore((state) => state.selectedWine);

  const { data, isLoading } = useQuery({
    queryKey: ['wineDetail', selectedWine],
    queryFn: async () => {
      return wineAPI.getWineDetail(selectedWine!).then((res) => res?.result);
    },
    enabled: selectedWine !== null,
  });

  const handleDelete = async () => {
    await wineAPI.deleteWine(selectedWine!).then((res) => {
      if (res?.isSuccess) {
        window.location.reload();
      }
    });
  };

  return {
    wineDetailData: data,
    isLoading,
    handleDelete,
  };
};
