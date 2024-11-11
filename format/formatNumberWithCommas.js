
/**
 * 주어진 숫자를 천 단위로 콤마(,)를 추가하여 문자열로 반환합니다.
 * 
 * @param {number | undefined} number - 포맷할 숫자입니다. undefined일 경우 0을 반환합니다.
 * @returns {string | 0} 천 단위로 콤마가 추가된 문자열을 반환합니다. 입력이 undefined일 경우 0을 반환합니다.
 */
export const formatNumberWithCommas = (number) => {
  if (!number || !/^[0-9,]/.test(String(number))) {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // return number.toLocaleString(); // 해당 국가의 통화에 맞게 숫자를 반환합니다.
}