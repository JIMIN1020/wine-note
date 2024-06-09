import { wineAPI } from '@/apis/api/wine';
import { QUERY_STRING } from '@/constants/queryString';
import useStore from '@/store/store';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useWines = () => {
  const [openWineModal, setOpenWineModal] = useState<boolean>(false);
  const { setWineList, setSelectedWine } = useStore();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleClickWine = async (id: number) => {
    wineAPI.getWineDetail(id).then((res) => {
      if (res?.isSuccess) {
        setSelectedWine(res!.result);
        setOpenWineModal(true);
      }
    });
  };

  const closeModal = () => {
    setOpenWineModal(false);
  };

  useEffect(() => {
    wineAPI
      .getWines({
        category: params.get(QUERY_STRING.CATEGORY)
          ? +params.get(QUERY_STRING.CATEGORY)!
          : undefined,
        name: params.get(QUERY_STRING.NAME)
          ? params.get(QUERY_STRING.NAME)!
          : undefined,
      })
      .then((res) => {
        if (res?.isSuccess) {
          setWineList(res!.result);
        }
      });
  }, [params]);

  return { handleClickWine, openWineModal, closeModal };
};
