
/**
 * 주어진 문자열의 각 단어의 첫 글자를 대문자로 변환합니다.
 * 
 * @param {string} str - 변환할 문자열
 * @returns {string} 각 단어의 첫 글자가 대문자로 변환된 문자열
 * 
 * @example capitalize("hello, world!") - Output "Hello, World!"
 */
export const capitalize = (str) => {
  const arr = str.trim().toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
};