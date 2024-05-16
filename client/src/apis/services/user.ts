export const processUserData = (data: any) => {
  const { accessToken, refreshToken } = data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};
