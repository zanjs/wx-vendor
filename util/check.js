export default {
  /**
   * 是否手机号
   * @param {any} num 
   * @returns 
   */
  phone(num) {
    const reg = /^(((1(3|4|5|7|8)[0-9]{1}))+\d{8})$/
    return reg.test(num)
  },
  URL(url) {
    const str = url
      // 判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
      // 下面的代码中应用了转义字符"\"输出一个字符"/"
    const Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
    const objExp = new RegExp(Expression)
    if (objExp.test(str) === true) {
      return true
    }
    return false
  },
  textURL(text) {
    const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
    if (!text) {
      return false
    }
    const v = text.match(reg)
    if (!v) {
      return false
    }

    const arr = v || []

    if (!arr.length) {
      return false
    }
    
    return arr[0]
  },
}