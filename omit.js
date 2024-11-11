
/**
 * 주어진 객체에서 특정 키를 제외한 새로운 객체를 반환합니다.
 *
 * @param {Object} obj - 키를 제외할 원본 객체
 * @param {string} keys - 제외할 키의 배열
 * @returns {Object} 주어진 키를 제외한 새로운 객체
 */
export const omit = (obj, keys) => {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}