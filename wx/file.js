/**
 * 微信接口模型
 * 文件上传下载
 */
import {
  Promise,
} from '../libs/es6-promise'

export default {
  down(url) {
    return new Promise((resolve) => {
      wx.downloadFile({
        url,
        success(res) {
          wx.playVoice({
            filePath: res.tempFilePath,
          })
          resolve(res.tempFilePath)
        },
        fail() {
          resolve(false)
        },
      })
    })
  },
}