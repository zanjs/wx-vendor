// login 层
import {
  Promise,
} from '../libs/es6-promise'
import Config from '../../config'
// stroage
import WXStorage from '../wx/storage'
import DataKey from '../data/key'
import WxLogin from '../wx/login'
import Print from '../util/print'
import Message from '../../message/wx'

export default {
  /**
   * AU微信用户一站式登陆
   * @returns
   */
  auth() {
    return new Promise((resolve) => {
      const wxUserInfo = WxLogin.wxLoginGetUserInfo()

      wxUserInfo.then((resp) => {
        Message.loginLoading()

        wx.request({
          url: `${Config.ApiHost}platform/login`,
          method: 'POST',
          data: {
            Type: 20,
            LoginType: 10,
            Client: {
              AppKey: Config.AppKey,
              FromClient: 'SmallProgram',
            },
            SmallProgram: {
              IV: resp.iv,
              EncryptedData: resp.encryptedData,
              SmallProgramJsCode: resp.code,
            },
          },
          header: {
            'content-type': 'application/json',
          },
          success(res) {
            Print.log(res.data)
            const nowTime = new Date().getTime()
            
            WXStorage.set(DataKey.userKey, res.data.Data.Key)
            WXStorage.set(DataKey.userkeyTime, nowTime)

            resolve(res)
          },
          fail(err) {
            Print.error(err)
            resolve(false)
          },
          complete(){
            Message.loadingClose()
          },
        })

        Print.log(resp)
      })

      wxUserInfo.catch((err) => {
        Print.error('err 拒绝了授权')
        Print.error(err)
        resolve(false)
      })
    })
  },
}