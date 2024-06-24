import { STORAGE } from '@/constants/strorage';

export const processUserData = (data: any) => {
  const { accessToken, refreshToken } = data;
  localStorage.setItem(STORAGE.ACCESS_KEY, accessToken);
  localStorage.setItem(STORAGE.REFRESH_KEY, refreshToken);
};
