
/**
 * 주어진 최소값과 최대값 사이의 임의의 정수를 생성합니다.
 *
 * @param {number} min - 생성할 수 있는 최소 정수 값
 * @param {number} max - 생성할 수 있는 최대 정수 값
 * @returns {number} 주어진 범위 내의 임의의 정수
 */
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}