import Print from '../util/print'

const obj = {
  set(key, val) {
    if (!key) {
      console.log('参数错误')
      return false
    }
    try {
      return wx.setStorageSync(key, val)
    } catch (e) {
      Print.error(e)
      return false
    }
  },
  get(key) {
    console.log(key)
    if (!key) {
      console.log('参数错误')
      return false
    }
    try {
      return wx.getStorageSync(key)
    } catch (e) {
      Print.error(e)
      return false
    }
  },
  remove(key) {
    try {
      return wx.removeStorageSync(key)
    } catch (e) {
      Print.error(e)
      return false
    }
  },
}

export default obj