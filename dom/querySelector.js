
/**
 * 주어진 셀렉터를 사용하여 DOM 요소를 선택합니다.
 * 
 * @param {string} selector - 선택할 요소의 셀렉터.
 * @param {ParentNode} [parent=document] - 선택할 요소의 부모 노드. 기본값은 document.
 * @returns {Element | null} 선택된 요소. 요소가 없으면 null을 반환합니다.
 * 
 * @ezxample const message = qs("#message", formElem);
 */
export const qs = (selector, parent = document) => {
  return parent.querySelector(selector);
};


/**
 * 주어진 셀렉터를 사용하여 모든 일치하는 DOM 요소를 선택합니다.
 * 
 * @param {string} selector - 선택할 요소들의 셀렉터.
 * @param {ParentNode} [parent=document] - 선택할 요소들의 부모 노드. 기본값은 document.
 * @returns {Element[]} 선택된 모든 요소들의 배열.
 * 
 * @example qsa("#todo").map((todo) => return ... );
 */
export const qsa = (selector, parent = document) => {
	return [...parent.querySelectorAll(selector)]
}
