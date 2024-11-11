
/**
 * 주어진 문자열을 슬러그 형식으로 변환합니다.
 *
 * @param {string} string - 슬러그로 변환할 문자열입니다.
 * @param {string} [separator="-"] - 단어를 구분할 구분자입니다. 기본값은 "-"입니다.
 * @returns {string} 슬러그 형식으로 변환된 문자열을 반환합니다.
 * 
 * @example
 * slugify("Hello, World!");
 * // Expected output: "hello-world"
 * 
 * slugify("Hello, Universe!", "_");
 * // Expected output: "hello_universe"
 */
export const slugify = (string, separator = "-") => {
  return string
    .toString() // Cast to string (optional)
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, separator) // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\_/g, separator) // Replace _ with -
    .replace(/\-\-+/g, separator) // Replace multiple - with single -
    .replace(/\-$/g, ""); // Remove trailing -
};