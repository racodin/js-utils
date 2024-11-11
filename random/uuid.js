
/**
 * UUID를 생성하는 함수입니다.
 * 
 * @returns {string} 생성된 UUID 문자열
 */
export const uuid = () => {
  return crypto.randomUUID();
}