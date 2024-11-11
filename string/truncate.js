/**
 * 주어진 문자열이 지정된 길이를 초과할 경우, 
 * 해당 길이만큼 자르고 말줄임표(...)를 추가하여 반환합니다.
 * 
 * @param {string} content - 자를 문자열
 * @param {number} number - 최대 문자열 길이
 * @returns {string} 길이가 지정된 길이를 초과하면 자르고 말줄임표를 추가한 문자열, 그렇지 않으면 원본 문자열
 */
export const truncateString = (content, number) => {
  // 문자열 길이가 16 초과일 경우
  if (content?.length > number) {
    // 처음 16글자를 가져오고 말줄임표(...)를 추가
    return content.substring(0, number) + "...";
  }
  // 길이가 16 미만이면 원본 문자열 반환
  return content;
}