export default {
  /**
   * 提取字符串数字
   * @param {any} text 
   * @returns 
   */
  getNumber(text) {
    const value = text.replace(/[^0-9]/ig, '')
    return value
  },
  hasOf(str, str2) {
    if (str.indexOf(str2) > 0) {
      return true
    }
    return false
  },
}