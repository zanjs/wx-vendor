/**
 * 黏贴板
 */
import {
  Promise,
} from '../libs/es6-promise'

export default {
  /**
   * 设置剪切板内容
   * @param {any} data 
   */
  set(data) {
    return new Promise((resolve) => {
      wx.setClipboardData({
        data,
        success: (res) => {
          resolve(res)
        },
        fail() {
          resolve(false)
        },
      })
    })
  },
  /**
   * 获取剪切板内容
   */
  get() {
    return new Promise((resolve) => {
      wx.getClipboardData({
        success: (res) => {
          resolve(res.data)
        },
        fail() {
          resolve(false)
        },
      })
    })
  },
}