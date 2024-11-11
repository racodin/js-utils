
export class Html {
  
}

/**
 * 템플릿 문자열과 값을 결합하여 처리하는 함수입니다.
 * 
 * @param {TemplateStringsArray} strings - 템플릿 문자열 배열
 * @param {...any} values - 템플릿 문자열에 삽입될 값들
 */
export function html(strings, ...values) {
  // return pipe(
  //   zip(strings, values)
  // );
  console.log(zip(strings, values));
}

html`<div>${'Hello'}</div>`;