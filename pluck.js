
/**
 * 주어진 배열에서 특정 키의 값을 추출하여 새로운 배열을 반환합니다.
 *
 * @param {Array} array - 객체를 포함하는 배열
 * @param {string} key - 추출할 키의 이름
 * @returns {Array} 주어진 키의 값을 포함하는 새로운 배열
 * 
 * @example
 * const users = [
 *   { id: 1, name: 'Alice', age: 30 },
 *   { id: 2, name: 'Bob', age: 25 },
 *   { id: 3, name: 'Charlie', age: 35 }
 * ];
 * 
 * // Pluck the 'name' property from each user
 * const names = pluck(users, 'name');
 * console.log('Names:', names); // Output: ['Alice', 'Bob', 'Charlie']
 */
export const pluck = (array, key) => {
  return array.map(element => element[key]);
}