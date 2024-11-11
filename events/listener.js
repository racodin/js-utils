
/**
 * 주어진 이벤트 타입과 선택자에 대해 이벤트 리스너를 추가합니다.
 * 
 * @param {string} type - 이벤트 타입 (예: 'click', 'submit').
 * @param {string} selector - 이벤트를 감지할 요소의 CSS 선택자.
 * @param {Function} callback - 이벤트가 발생했을 때 호출될 콜백 함수.
 * @param {boolean | AddEventListenerOptions} [options] - 이벤트 리스너 옵션.
 * @param {Document | HTMLElement} [parents=document] - 이벤트를 감지할 부모 요소 (기본값: document).
 * 
 * @example listen("click", buttonElem, () => console.log("Clicked!"), { once: true });
 */
export const listen = (type, selector, callback, options, parents = document) => {
  parent.addEventListener(
  	type, 
    e => {
    	if(e.target.matches(selector)) callback(e)
    },
    options
  )	
};