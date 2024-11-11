
/**
 * 주어진 이메일 주소가 유효한지 확인하는 함수입니다.
 * 
 * @param {string} email - 유효성을 검사할 이메일 주소 문자열
 * @returns {boolean} 이메일 주소가 유효하면 true, 그렇지 않으면 false를 반환합니다.
 */
export const validEmail = (email) => {
  // const regex = /^\S+@\S+\.\S+$/;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}