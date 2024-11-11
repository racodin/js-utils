
/**
 * 주어진 범위 내에서 보안적으로 안전한 난수를 생성합니다.
 *
 * @param {number} min - 생성할 난수의 최소값 (포함)
 * @param {number} max - 생성할 난수의 최대값 (포함)
 * @returns {number} 주어진 범위 내에서 생성된 보안적으로 안전한 난수
 * 
 * @usecase
 * - 암호화 키 생성
 * - 보안 토큰 생성
 * - 중요한 금융 거래에서의 난수 사용
 */

export const generateSecureRandomNumber = (min, max) => {
  const range = max - min + 1;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const randomBytes = new Uint8Array(bytesNeeded);
  const maximumRange = 256 ** bytesNeeded;
  const randomValue = () => {
    window.crypto.getRandomValues(randomBytes);
    let value = 0;
    for (let i = 0; i < bytesNeeded; i++) {
      value = value * 256 + randomBytes[i];
    }
    return value;
  };

  let result = randomValue();
  while (result >= maximumRange - (maximumRange % range)) {
    result = randomValue();
  }
  return min + (result % range);
}