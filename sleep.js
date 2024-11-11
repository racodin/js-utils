
/**
 * 주어진 시간(밀리초) 동안 대기하는 비동기 함수입니다.
 *
 * @param {number} duration - 대기할 시간(밀리초)입니다.
 * @returns {Promise<void>} 주어진 시간 후에 해결되는 프로미스를 반환합니다.
 * 
 * @example await sleep(2000);
 */
export const sleep = (duration) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}