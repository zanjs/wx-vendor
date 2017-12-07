export default {
  /**
   * 判断是否是对象
   * @param {any} data 
   * @returns 
   */
  is(data) {
    if (typeof data !== 'object') {
      return false
    }
    return true
  },
}