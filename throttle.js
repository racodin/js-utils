/**
 * 일정 시간 간격으로 함수가 최대 한 번만 실행되도록 하는 기능입니다.
 * 
 * @param {Function} func - 호출할 함수
 * @param {number} limit - 함수가 다시 호출될 수 있는 시간 간격 (밀리초)
 * @returns {Function} 주어진 시간 간격 내에서 최대 한 번만 실행되는 함수
 * 
 * @explain
 * 함수가 호출되면 즉시 실행되고 이후 설정된 시간 : limit 동안은 함수 호출을 무시합니다.
 * 그리고 설정된 시간이 지나면 다시 함수 호출이 가능해집니다.
 * 
 * @usecase
 * - 스크롤 이벤트 처리
 * - 게임에서의 공격 속도 제어
 * - 분당 요청 수 제한 등의 API 요청 제한
 * 
 * @example
 * const throttledScroll = throttle(() => {
 *   // 스크롤 위치에 따른 작업 수행
 *   console.log('Scroll position:', window.scrollY);
 * }, 1000);
 * 
 * // 스크롤 이벤트가 빈번히 발생해도 1초에 최대 한 번만 실행
 * window.addEventListener('scroll', throttledScroll);
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (this, ...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}