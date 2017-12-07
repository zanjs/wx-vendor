/**
 * api 数据接口模型
 * 登陆
 */
import {
  Promise,
} from '../libs/es6-promise'
import Message from '../../message/modal'
import WXStorage from './storage'
import DataKey from '../data/key'
import Print from '../util/print'

export default {
  code() {
    return new Promise((resolve, reject) => {
      wx.login({
        success(res) {
          if (res.code) {
            const codeTime = +new Date()
            WXStorage.set(DataKey.code, res.code)
            WXStorage.set(DataKey.codeTime, codeTime)
            resolve(res.code)
          } else {
            reject(false)
            Print.log(`获取用户登录态失败！${res.errMsg}`)
          }
        },
      })
    })
  },
  /**
   * 获取用户信息
   * @returns
   */
  userInfo() {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success(req) {
          resolve(req)
        },
        fail(err) {
          if (wx.openSetting) {
            wx.openSetting({
              success: (res) => {
                Print.log(res)
              },
            })
          } else {
            Message.openSetting()
          }
          reject(err)
        },
      })
    })
  },
  /**
   * 微信登陆获取用户信息
   * @returns
   */
  wxLoginGetUserInfo() {
    return new Promise((resolve, reject) => {
      // 调用登录接口
      wx.login({
        success(response) {
          const code = response.code
          wx.getUserInfo({
            success(resp) {
              const obj = {
                code,
                iv: resp.iv,
                encryptedData: resp.encryptedData,
                userInfo: resp.userInfo,
              }
              const codeTime = +new Date()
              WXStorage.set(DataKey.codeTime, codeTime)
              WXStorage.set(DataKey.userInfo, resp.userInfo)
              WXStorage.set(DataKey.code, code)
              resolve(obj)
            },
            fail(err) {
              if (wx.openSetting) {
                wx.openSetting({
                  success: (res) => {
                    Print.log(res)
                  },
                })
              } else {
                Message.openSetting()
              }
              reject(err)
            },
          })
        },
        fail(err) {
          Print.warn('err 获取用户登录态失败')
          reject(err)
        },
      })
    })
  },
}