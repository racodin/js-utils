

/**
 * 주어진 날짜 문자열을 "YYYY.MM.DD HH:mm" 형식의 문자열로 변환합니다.
 *
 * @param {string} date - 변환할 날짜 문자열
 * @returns {string} 변환된 날짜 문자열
 */
export const formatDateWithTime = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} ${hours}:${minutes}`;
}