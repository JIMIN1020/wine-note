import { wineAPI } from '@/apis/api/wine';
import { getWineData } from '@/apis/services/wine';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useWineSearch = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [openResult, setOpenResult] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['searchResult', searchValue],
    queryFn: () =>
      wineAPI.getWineSearch(searchValue).then((res) => res && getWineData(res)),
    enabled: searchValue.length > 0,
  });

  const triggerSearch = (name: string) => {
    setSearchValue(name);
  };

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setOpenResult(true);
    }
  }, [data]);

  return { data, isLoading, triggerSearch, isError, openResult };
};
