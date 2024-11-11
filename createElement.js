
/**
 * 주어진 타입과 옵션을 사용하여 새로운 HTML 요소를 생성합니다.
 *
 * @param {string} type - 생성할 HTML 요소의 타입을 지정합니다.
 * @param {Object} [options={}] - 요소에 적용할 속성들을 포함하는 객체입니다.
 * @param {string} [options.class] - 요소에 추가할 클래스 이름입니다.
 * @param {Object} [options.dataset] - 요소에 추가할 데이터 속성들을 포함하는 객체입니다.
 * @param {string} [options.text] - 요소의 텍스트 콘텐츠입니다.
 * @returns {HTMLElement} 생성된 HTML 요소를 반환합니다.
 */
export function createElement(type, options = {}) {
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      return element.classList.add(value);
    }

    if (key === "dataset") {
      return Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    }

    if (key === "text") {
      return element.textContent = value;
    }

    element.setAttribute(key, value);
  });
  return element;
}