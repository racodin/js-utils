/**
 * 연이어 호출되는 함수들 중에서 마지막 함수(또는 제일 처음)만 호출되도록 하는 기능입니다.
 * 
 * @template F - 함수 타입
 * @param {Function} func - 디바운스 처리할 함수
 * @param {number} waitFor - 디바운스 대기 시간 (밀리초)
 * @returns {(...args: Parameters<F>) => void} - 디바운스 처리된 함수
 * 
 * @explain
 * 함수 호출이 시작되면 타이머를 설정하고
 * 설정된 시간(waitFor) 이내에 다시 함수가 호출되면, 이전 타이머를 취소하고 새로운 타이머를 설정합니다.
 * 그리고 설정된 시간 동안 함수 호출이 없으면, 마지막으로 전달된 인자로 함수를 실행합니다.
 * 
 * @usecase
 * - 검색 입력 필드의 자동완성 기능
 * - 창 크기 조절(resize) 이벤트 처리
 * - 버튼 중복 클릭 방지
 * 
 * @example
 * const debouncedSearch = debounce((query: string) => {
 *   // 검색 API 호출
 *   console.log('Searching for:', query);
 * }, 300);
 * 
 * // 사용자가 입력할 때마다 호출되지만, 실제 검색은 마지막 입력 후 300ms 후에 실행
 * inputElement.addEventListener('input', (e) => debouncedSearch(e.target.value));
 */
export const debounce = (func, waitFor) => {
  let timeout = null;

  return (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
}