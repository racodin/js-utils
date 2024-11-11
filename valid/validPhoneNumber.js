
/**
 * 주어진 전화번호가 유효한지 여부를 확인합니다. (한국 휴대폰 번호)
 *
 * @param {string} phoneNumber - 확인할 전화번호 문자열
 * @returns {boolean} 전화번호가 유효하면 true, 그렇지 않으면 false를 반환합니다.
 */
export const validPhoneNumber = (phoneNumber) => {
  const regex = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  return regex.test(phoneNumber);
}