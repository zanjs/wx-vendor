// js 工具集
export default {
  /**
   * 数据对象深拷贝
   * @param {any} arrObj
   * @returns
   */
  deepCopy(arrObj) {
    const vm = this
    if (arrObj instanceof Array) {
      const n = []
      for (let i = 0; i < arrObj.length; i += 1) {
        n[i] = vm.deepCopy(arrObj[i])
      }
      return n
    } else if (arrObj instanceof Object) {
      const n = {}
      for (const i in arrObj) {
        n[i] = vm.deepCopy(arrObj[i])
      }
      return n
    }
    return arrObj
  },
  /**
   * 过滤重复数组
   * @param {any} arr
   * @returns
   */
  unique(arr) {
    const result = []
    const hash = {}
    for (var i = 0, elem;
      (elem = arr[i]) != null; i += 1) {
      if (!hash[elem]) {
        result.push(elem)
        hash[elem] = true
      }
    }
    return result
  },
  /**
   * 验证 URL
   * @param {any} URL
   * @returns
   */
  checkURL(URL) {
    const str = URL

    // 判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    // 下面的代码中应用了转义字符"\"输出一个字符"/"
    const Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
    const objExp = new RegExp(Expression)
    if (objExp.test(str) === true) {
      return true
    }
    return false
  },
  /**
   * 验证手机号
   * @param {any} tel
   * @returns
   */
  checkPhone(tel) {
    const reg = /^(13\d|14[57]|15[^4\D]|17[0135-8]|18\d)\d{8}$/
    const phone = tel.toString().replace(/(^\s*)|(\s*$)/g, '')
    return reg.test(phone)
  },
  /**
   * 取整进一
   * @param {any} v
   * @returns
   */
  modFoat(v) {
    const max = parseInt(v, 10) + 1
    if (max - v < 1) {
      return max
    }
    return v
  },
  /**
   * 保留 n 位小数
   * 解决 toFixed bug
   * @param {any} num
   * @param {any} fractionDigits
   * @returns
   */
  iTofixed(digit, length) {
    const leng = length ? length - 0 : 0
    if (leng <= 0) return Math.round(digit)
    return Math.round(digit * Math.pow(10, leng)) / Math.pow(10, leng)
  },
  /**
   * 进位精度问题 保留s为小数四舍五入
   * @param {any} num
   * @param {any} s
   * @returns
   */
  toFloatFixed(num, s) {
    const times = Math.pow(10, s)
    const des = num * times
    const intNum = Math.round(des)
    const finalNum = intNum / times

    return finalNum
  },
  /**
   * 强制保留两位小数  不足时补充0
   */
  fixTwoNum(f_x) {
    let s_x = f_x.toString()
    let pos_decimal = s_x.indexOf('.')
    if (pos_decimal < 0) {
      pos_decimal = s_x.length
      s_x += '.'
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0'
    }
    return s_x
  },
  toDecimal(num) {
    let f = parseFloat(num)
    if (isNaN(f)) {
      return 0
    }
    f = Math.round(num * 100) / 100
    return f
  },
  /**
   * 保留2位小数
   * @param {any} num 
   * @returns 
   */
  toDecimal2(num) {
    const p = parseFloat(num)
    if (isNaN(p)) {
      return false
    }
    const f = Math.round(num * 100) / 100
    let s = f.toString()
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
  trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, '')
  },
  /**
   * 时间显示格式化
   * @param {any} t
   * @returns
   */
  timeCity(t) {
    let time = t.split(':')
    time = `${time[0]}:${time[1] || '00'}`
    time = time.replace(/-/g, '.')
    return time
  },
  /**
   * 验证邮箱格式
   *
   * @param {any} str
   * @returns
   */
  checkEmail(str) {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    const bChk = reg.test(str)
    return bChk
  },
  subString(str, len, hasDot) {
    let newLength = 0
    let newStr = ''
    const chineseRegex = /[^\x00-\xff]/g
    let singleChar = ''
    const strLength = str.replace(chineseRegex, '**').length
    for (let i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString()
      if (singleChar.match(chineseRegex) != null) {
        newLength += 2
      } else {
        newLength++
      }
      if (newLength > len) {
        break
      }
      newStr += singleChar
    }

    if (hasDot && strLength > len) {
      newStr += '...'
    }
    return newStr
  },
  /**
   *  身份证号
   * @param {any} str 
   * @returns 
   */
  idCard(str) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (reg.test(str) === false) {
      return false
    }
    return true
  },
  /**
   *  0至两位小数
   */
  twoCommon(num) {
    // const reg = /^\d+(\.\d{0,2})?$/
    // const reg = /^\d+\.+(\d{0,2})$/
    const reg = /^\d+[.]?\d{1,2}$/
    return reg.test(num)
  },
}