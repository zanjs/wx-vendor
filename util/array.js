export default {
  /**
   * 得到从 m 元素中取 n 元素的所有组合
   * 结果为[0,1...]形式的数组, 1表示选中，0表示不选
   * @param {any} m
   * @param {any} n
   * @returns
   */
  getCombFlags(m, n) { // m=2,n=1
    if (!n || n < 1) {
      return []
    }

    const aResult = []
    const aFlag = []
    let bNext = true
    let i
    let j
    let iCnt1

    for (i = 0; i < m; i += 1) {
      aFlag[i] = i < n ? 1 : 0 // [1,0]
    }

    aResult.push(aFlag.concat()) // [[1,0]]

    while (bNext) {
      iCnt1 = 0
      for (i = 0; i < m - 1; i += 1) {
        if (aFlag[i] - 0 === 1 && aFlag[i + 1] - 0 === 0) {
          for (j = 0; j < i; j += 1) {
            aFlag[j] = j < iCnt1 ? 1 : 0
          }
          aFlag[i] = 0
          aFlag[i + 1] = 1
          const aTmp = aFlag.concat()
          aResult.push(aTmp)
          if (aTmp.slice(-n).join('').indexOf('0') == -1) {
            bNext = false
          }
          break
        }
        aFlag[i] == 1 && iCnt1++
      }
    }
    return aResult
  },
  compare(prop) {
    return (obj1, obj2) => {
      let val1 = obj1[prop]
      let val2 = obj2[prop]
      if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
        val1 = Number(val1)
        val2 = Number(val2)
      }
      if (val1 < val2) {
        return 1
      } else if (val1 > val2) {
        return -1
      }
      return 0
    }
  },
}