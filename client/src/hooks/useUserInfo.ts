import { userAPI } from '@/apis/api/user';
import { useQuery } from '@tanstack/react-query';

export const useUserInfo = () => {
  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () =>
      await userAPI.getUserInfo().then((res) => {
        if (res && 'result' in res) {
          return res.result;
        }
      }),
  });

  return { userInfo: data };
};
