
/**
 * 주어진 객체에서 특정 키들에 해당하는 값들만 추출하여 새로운 객체를 반환합니다.
 *
 * @param {Object} obj - 값을 추출할 원본 객체
 * @param {string} keys - 추출할 키들의 배열
 * @returns {Object} 주어진 키들에 해당하는 값들만 포함된 새로운 객체
 */
export const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}