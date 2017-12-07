import DA from '../util/da'

export default {
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
   * 去掉时间的秒数
   * @param {any} str 
   * @returns 
   */
  processTime(req) {
    const copyObj = DA.deepCopy(req)
    const List = copyObj.List

    List.forEach((val) => {
      const item = val
      item.UpdateTime = item.UpdateTime.slice(0, -3)
    })

    return copyObj
  },
  weChatTime(cTime) {
    return cTime
  },
}