
/**
 * 주어진 배열들을 병합하여 각 배열의 동일한 인덱스에 있는 요소들을 묶어 새로운 배열을 생성합니다.
 * 
 * @param {...Array<any>} arrays - 병합할 배열들
 * @returns {Array<Array<any>>} 각 배열의 동일한 인덱스에 있는 요소들을 묶은 새로운 배열
 * 
 * @example
 * const result = zip([1, 2], ['a', 'b'], [true, false]);
 * console.log(result); // [[1, 'a', true], [2, 'b', false]]
 */
export const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(array => array.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
  });
}