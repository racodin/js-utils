
/**
 * 주어진 함수에 커링을 적용하여 반환합니다.
 * 
 * @param {Function} func - 커링을 적용할 함수
 * @param {number} arity - 함수의 인수 개수 (기본값은 함수의 인수 개수)
 * @returns {Function} 커링이 적용된 함수
 * 
 * @example
 * // 두 점 간의 거리를 계산하는 함수 정의
 * function distance(x1, y1, x2, y2) {
 *   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
 * }
 *
 * // 한 점만 필요로 하게끔 함수를 curry된 버전으로 생성
 * const distanceFromOrigin = curry(distance, 3)(0, 0);
 *
 * // 다른 점을 인수로 하여 curry된 함수를 호출
 * const d1 = distanceFromOrigin(1, 1);
 * const d2 = distanceFromOrigin(2, 2);
 */
export const curry = (func, arity = func.length) => {
  return function curried(...args) {
    if (args.length >= arity) return func(...args);
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}