
/**
 * 주어진 HTML 문자열을 안전하게 변환합니다.
 * 
 * 이 함수는 주어진 문자열을 HTML 요소의 텍스트 콘텐츠로 설정하여
 * 잠재적인 XSS 공격을 방지합니다. 변환된 문자열은 안전하게
 * innerHTML로 반환됩니다.
 * 
 * @param {string} input - 변환할 HTML 문자열
 * @returns {string} 안전하게 변환된 HTML 문자열
 * 
 * @example sanitize("<h1>Hello, World!</h1>"); - Output "&lt;h1&gt;Hello, World!&lt;/h1&gt;"
 */
export const sanitize = (input) => {
  const encodedCharacters = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  return input.replace(/[&<>"'/]/g, match => encodedCharacters[match]);
};
