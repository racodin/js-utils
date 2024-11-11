/**
 * 주어진 URL로 HTTP 요청을 보내고 응답 데이터를 반환합니다.
 *
 * @template T - 응답 데이터의 타입
 * @param {string} url - 요청을 보낼 URL
 * @param {RequestOptions<T>} options - 요청 옵션 객체
 * @param {HttpMethod} options.method - HTTP 메서드 (GET, POST, PUT, DELETE 중 하나)
 * @param {Object.<string, string>} [options.headers] - 요청 헤더 객체 (선택 사항)
 * @param {T} [options.body] - 요청 본문 데이터 (선택 사항)
 * @returns {Promise<T>} 응답 데이터의 Promise 객체
 * @throws {Error} HTTP 요청이 실패한 경우 에러를 던집니다.
 */
export async function sendRequest(url, options) {
  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    });
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    // 원하는 데이터 형식으로 변환 (예: JSON)
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}


// GET 요청 예시
// const getResponse = await sendRequest<{ exampleData: string }>('https://api.example.com/data', {
//   method: 'GET',
// });

// POST 요청 예시
// const postData = { key: 'value' };
// const postResponse = await sendRequest<{ responseMessage: string }>('https://api.example.com/post', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: postData,
// });