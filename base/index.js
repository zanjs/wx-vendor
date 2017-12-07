// dao 层 公共
import {
  Promise,
} from '../libs/es6-promise'
// stroage
import WXStorage from '../wx/storage'
import DataKey from '../data/key'
import Login from '../login/index'
// Env
import Env from '../../env'
import Print from '../util/print'

export default {
  /**
   * AU微信用户一站式登陆
   * @returns
   */
  auLogin() {
    return new Promise((resolve) => {
      const ttl = Env.ttl * 1000 * 60
      const keyTime = WXStorage.get(DataKey.userkeyTime)

      if (keyTime) {
        const nowTime = new Date().getTime()
        const distance = nowTime - keyTime
        if (distance > ttl) {
          resolve(Login.auth())
        } else {
          Print.warn('不用登陆')
          resolve(false)
        }
      } else {
        resolve(Login.auth())
      }
    })
  },
}