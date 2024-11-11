
/**
 * 주어진 함수들을 순차적으로 실행하여 결과를 반환하는 함수입니다.
 * 
 * @param {...Function[]} funcs - 순차적으로 실행할 함수들의 목록입니다.
 * @returns {Function} - 주어진 함수들을 순차적으로 실행하는 함수입니다.
 * 
 * @example
 * // 문자열에 추가하는 함수들 정의
 * function addPrefix(str) {
 *   return "prefix-" + str;
 * }
 * 
 * function addSuffix(str) {
 *   return str + "-suffix";
 * }
 * 
 * function toUppercase(str) {
 *     return str.toUpperCase()
 * }
 * 
 * // 세 가지 함수를 올바른 순서로 적용한 파이프된 함수를 생성
 * const decorated1 = pipe(addPrefix, addSuffix, toUppercase);
 * const decorated2 = pipe(toUppercase, addPrefix, addSuffix);
 * 
 * // 입력 문자열로 파이프된 함수 호출
 * const result1 = decorated1("hello");		// PREFIX-HELLO-SUFFIX
 * const result2 = decorated2("hello");		// prefix-HELLO-suffix
 */
export const pipe = (...funcs) => {
  return function piped(...args) {
    return funcs.reduce((result, func) => [func.call(this, ...result)], args)[0];
  };
}