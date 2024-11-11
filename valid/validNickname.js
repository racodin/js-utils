
/**
 * 주어진 닉네임이 유효한지 검사하는 함수입니다.
 * 
 * 닉네임은 한글, 영문 대소문자, 숫자로 구성될 수 있으며,
 * 길이는 2자에서 10자 사이여야 합니다.
 * 
 * @param {string} nickname - 검사할 닉네임 문자열
 * @returns {boolean} 닉네임이 유효하면 true, 그렇지 않으면 false를 반환합니다.
 */
export const validNickname = (nickname) => {
  const regex = /^[가-힣a-zA-Z0-9]{2,10}$/;
  return regex.test(nickname);
}