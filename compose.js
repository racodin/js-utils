
/**
 * 주어진 함수들을 오른쪽에서 왼쪽으로 차례대로 호출하여 하나의 함수로 합성합니다.
 * 
 * @param {...Function[]} funcs - 합성할 함수들
 * @returns {Function} 합성된 함수
 * 
 * @example
 * const add = (a, b) => a + b;
 * const square = x => x * x;
 * const addThenSquare = compose(square, add);
 * addThenSquare(2, 3); // 25
 */
export const compose = (...funcs) => {
  return function composed(...args) {
    return funcs.reduceRight((result, func) => [func.call(this, ...result)], args)[0];
  };
}