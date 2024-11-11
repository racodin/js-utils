// import { accessTokenStore } from '#/store/auth/access-token-store';
const accessTokenStore = {
  getState() {
    return {
      setAccessToken: (accessToken) => {},
      accessToken: '',
    };
  }
}

/**
 * 로컬 스토리지에 리프레시 토큰을 저장합니다.
 * 
 * @param refreshToken - 저장할 리프레시 토큰
 */
export const saveRefreshTokenToLocalStorage = (refreshToken) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('refreshToken', refreshToken);
  }
};

/**
 * 로컬 스토리지에서 리프레시 토큰을 가져옵니다.
 * 
 * @returns 저장된 리프레시 토큰, 없으면 빈 문자열 반환
 */
export const getRefreshTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refreshToken') || '';
  }
};

/**
 * Zustand 상태 관리에 액세스 토큰을 저장합니다.
 * 
 * @param accessToken - 저장할 액세스 토큰
 */
export const saveAccessTokenToZustand = (accessToken) => {
  accessTokenStore.getState().setAccessToken(accessToken);
};

/**
 * Zustand 상태 관리에서 액세스 토큰을 가져옵니다.
 * 
 * @returns 저장된 액세스 토큰
 */
export const getAccessTokenFromZustand = () => {
  return accessTokenStore.getState().accessToken;
};