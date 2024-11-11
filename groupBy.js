
/**
 * 주어진 배열을 특정 키를 기준으로 그룹화하여 객체로 반환합니다.
 *
 * @param {Array} array - 그룹화할 배열
 * @param {string} key - 그룹화할 기준이 되는 키
 * @returns {Object} 그룹화된 객체
 * 
 * @example
 * const tasks = [
 *   { id: 1, category: 'Work', title: 'Task 1' },
 *   { id: 2, category: 'Personal', title: 'Task 2' },
 *   { id: 3, category: 'Work', title: 'Task 3' },
 *   { id: 4, category: 'Personal', title: 'Task 4' }
 * ];
 * 
 * // Group tasks by the 'category' property
 * const groupedTasks = groupBy(tasks, 'category');
 * console.log('Grouped Tasks:', groupedTasks);
 */
export const groupBy = (array, key) => {
  return array.reduce((group, element) => {
    const keyValue = element[key];
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] };
  }, {});
}