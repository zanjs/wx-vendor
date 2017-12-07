import { Promise } from '../libs/es6-promise'
import Print from '../util/print'
import MSG from '../mwx/msg'

export default {
  /**
   * 微信支付请求
   * @param {any} data
   * @returns
   */
  payment(data) {
    // const vm = this
    return new Promise((resolve) => {
      wx.requestPayment({
        timeStamp: data.TimeStamp.toString(),
        nonceStr: data.NonceStr,
        package: data.Package,
        signType: data.SignType,
        paySign: data.PaySign,
        success(res) {
          resolve(res)
        },
        fail(res) {
          Print.Warn('调用微信支付失败')
          Print.Warn(res)
          MSG.warnTitle('支付失败')
          resolve(false)
        },
      })
    })
  },
}