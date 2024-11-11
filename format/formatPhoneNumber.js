
/**
 * 주어진 전화번호 문자열을 형식에 맞게 포맷팅합니다.
 * 
 * @param {string} phoneNumber - 포맷팅할 전화번호 문자열. 문자열이 없거나 null인 경우 '-'를 반환합니다.
 * @returns {string} 형식에 맞게 포맷팅된 전화번호 문자열을 반환합니다. 
 * - 전화번호가 10자리인 경우 'XXX-XXX-XXXX' 형식으로,
 * - 11자리인 경우 'XXX-XXXX-XXXX' 형식으로,
 * - 9자리인 경우 'XX-XXX-XXXX' 형식으로 포맷팅됩니다.
 * - 그 외의 길이인 경우 숫자만 남기고 그대로 반환합니다.
 */
export const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber) {
    // 모든 숫자 제외하고 제거
    const cleaned = phoneNumber.replace(/[^0-9]/g, '');
    // 형식에 맞게 '-' 삽입
    let formatted = '';
    if (cleaned.length === 10) {
      formatted = cleaned.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
    } else if (cleaned.length === 11) {
      formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    } else if (cleaned.length === 9) {
      formatted = cleaned.replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
    } else {
      // 기타 길이의 번호는 그대로 반환
      formatted = cleaned;
    }
    return formatted;
  }
  return '-';
}