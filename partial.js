
/**
 * 주어진 함수와 인자를 받아 부분적으로 적용된 함수를 반환합니다.
 * 
 * @param {Function} func - 부분적으로 적용할 함수
 * @param {T} args - 부분적으로 적용할 인자들
 * @returns {T} 부분적으로 적용된 함수
 * 
 * @example
 * // 계산하는 함수 정의
 * function calculate(x, y, z) {
 *   return (x + y) * z
 * }
 * 
 * // 마지막 인수(z)만 필요로 하도록 parital이 적용된 함수 버전으로 생성
 * const multiply10By = partial(calculate, 8, 2);
 * 
 * // 반복 횟수 값을 전달하여 partial이 적용된 함수를 호출
 * const result = multiply10By(5);
 */
export const partial = (func, ...args) => {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs);
  }
}