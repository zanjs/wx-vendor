import {
  Promise,
} from '../libs/es6-promise'
import Message from '../../message/modal'
import Print from '../util/print'

export default {
  /**
   * 获取当前的地理位置、速度
   * @returns
   */
  get() {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          resolve(res)
        },
        fail(err) {
          Print.error(err)
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
   * 打开地图选择位置
   * @returns
   */
  choose() {
    return new Promise((resolve, reject) => {
      wx.chooseLocation({
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        },
        cancel() {
          resolve(false)
        },
      })
    })
  },
  /**
   * 用微信内置地图查看位置
   * @param {any} obj
   * @returns
   */
  open(obj) {
    const data = obj
    return new Promise((resolve, reject) => {
      wx.openLocation({
        latitude: data.latitude,
        longitude: data.longitude,
        scale: data.scale || 18,
        name: data.name,
        address: data.address,
        success(res) {
          resolve(res)
        },
        fail(err) {
          reject(err)
        },
      })
    })
  },
}