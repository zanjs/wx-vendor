import API from './api'
import LANG from '../lang/lang'
// model
import PAYMENT from '../../model/payment'
// stack
import Stack from '../wx/stack'
import PayWX from '../wx/pay'
// Go
import Go from '../../go'
// Toast
import Toast from './toast'

export default {
  /**
   * 微信支付
   * @param {any} obj
   */
  async Wechat(obj) {
    const vm = Stack.page()

    const paymentWechat = await PAYMENT.Wechat(obj)

    if (!API.resData(vm, paymentWechat)) {
      return
    }

    Toast.loading()

    let msg = ''

    const JsPay = paymentWechat.Data.JsPay

    if (!JsPay) {
      msg = LANG.CanNotPay
    } else {
      const wxpayapi = await PayWX.payment(JsPay)

      if (!wxpayapi) {
        msg = LANG.PayFail
      } else {
        msg = LANG.PaySuccess
      }
    }

    Toast.title(msg)

    setTimeout(() => {
      Go.orderList()
    }, 1500)
  },
  /**
   * 微信支付 2
   * @param {any} obj
   */
  async WechatT(page, obj) {
    const vm = Stack.page()
    console.log('wechat 22')

    Toast.loading()

    const paymentWechat = await PAYMENT.Wechat(obj)

    if (!API.resData(vm, paymentWechat)) {
      return
    }

    Toast.close()

    console.log(paymentWechat)

    const JsPay = paymentWechat.Data.JsPay

    if (!JsPay) {
      API.submitNavBack(LANG.CanNotPay, 2000)
      return
    }

    const wxpayapi = await API.payment(JsPay)

    if (wxpayapi.errMsg) {
      API.submitNavBack(LANG.PayFail, 2000)
    } else {
      API.submitNavBack(LANG.PaySuccess, 2000)
    }
  },
}