
/**
 * localStorage를 사용하여 데이터를 저장하고 가져오는 헬퍼 객체입니다.
 * 
 * @example
 * storage.set("motto", "Eat, Sleep, Code, Repeat");
 * storage.get("motto");
 */
export const storage = {
  get: (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};

