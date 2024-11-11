
/**
 * 주어진 비밀번호가 유효한지 확인하는 함수입니다.
 * 
 * 비밀번호는 다음 조건을 만족해야 합니다:
 * - 최소 8자 이상
 * - 최소 하나의 문자 포함 (대소문자 구분 없음)
 * - 최소 하나의 숫자 포함
 * - 최소 하나의 특수 문자 포함 (@$!%*#?&)
 * 
 * @param {string} password - 유효성을 검사할 비밀번호 문자열
 * @returns {boolean} 비밀번호가 유효하면 true, 그렇지 않으면 false를 반환합니다.
 */
export const validPassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(password);
}