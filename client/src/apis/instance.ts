import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // token이 없는 경우
    if (!accessToken || !refreshToken) {
      window.location.replace('/login'); // 로그인 화면으로 redirect
      return config;
    }

    // header에 토큰 담기
    config.headers['authorization'] = `Bearer ${accessToken}`;
    config.headers['refresh'] = refreshToken;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    console.log(config.url);

    // access token이 만료된 경우
    if (status === 401) {
      const originReq = config;
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      // access token 재발급
      try {
        const result = await baseInstance.get(`/user/refresh`, {
          headers: {
            authorization: `Bearer ${accessToken}`,
            refresh: refreshToken,
          },
        });

        // 새로운 access token 발급된 경우
        const newAccessToken = result.data.accessToken; // 새로운 토큰 꺼내기
        localStorage.setItem('accessToken', newAccessToken); // localstorage에 저장
        originReq.headers['authorization'] = `Bearer ${newAccessToken}`; // 기존 요청 헤더에 담기
        return authInstance(originReq);
      } catch (err) {
        // access token 발급 실패한 경우 -> 재로그인
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
        window.location.replace('/login');
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
