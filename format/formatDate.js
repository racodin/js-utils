

/**
 * 주어진 날짜 문자열을 "YYYY.MM.DD" 형식으로 변환합니다.
 *
 * @param {string} date - 변환할 날짜 문자열 (예: "2023-10-05")
 * @returns {string} 변환된 날짜 문자열 (예: "2023.10.05")
 */
export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}