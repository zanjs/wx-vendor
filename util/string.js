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
    /**
   * 截取字符串
   * @param {any} str
   * @param {any} len
   * @param {any} hasDot
   * @returns
   */
  subString(str, len, hasDot) {
    if (str.length < len) {
      return str
    }

    const dot = hasDot || '...'

    let newStr = str.substring(0, len)
    newStr += dot
    return newStr
  },
  toDecimal2(x) {
    const floatnum = parseFloat(x)
    if (isNaN(floatnum)) {
      return false
    }
    const num = Math.round(x * 100) / 100
    let s = num.toString()
    let rs = s.indexOf('.')
    if (rs < 0) {
      rs = s.length
      s += '.'
    }
    while (s.length <= rs + 2) {
      s += '0'
    }
    return s
  },
  /**
   * 截取从0后三位
   * 精确的分钟 去掉秒数
   * @param {any} str 
   * @returns 
   */
  sliceSecond(str) {
    return str.slice(0, -3)
  },
}