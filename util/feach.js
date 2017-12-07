import { Promise } from '../libs/es6-promise'
import WXStorage from '../wx/storage'
import DataKey from '../data/key'
import Login from '../login/index'
import LANG from '../lang/lang'
// stack
import Status from '../data/set'
import Print from '../util/print'
import Config from '../../config'
import WXRequest from '../wx/request'
import WXMessage from '../wx/msg'

const REQ_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

const HEADER = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ',
}

const HEADERFile = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'multipart/form-data',
  'Authorization': 'Bearer ',
}


export default {
  /**
   * 发起 POST 请求
   * @param {any} url
   * @param {any} [data={}]
   * @returns
   */
  post(url, objData = {}) {
    return new Promise((resolve, reject) => {
      const key = WXStorage.get(DataKey.userKey)
      if (!key) {
        const obj = {
          Success: false,
          Code: -9999,
          Message: LANG.LoginKeyNotFind,
        }
        resolve(obj)
        return
      }

      const data = objData
      data.AppKey = Config.AppKey
      data.Token = key
      HEADER.Authorization = `Bearer ${key}`

      const ops = {
        url,
        data,
        header: HEADER,
        method: REQ_METHOD.POST,
      }

      WXRequest.feach(ops)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          Print.error('报错了')
          Print.error(error)
          const code = error.Code || 999
          const messageTxt = error.Message || 'sorry serve error'
          if (code == -2000) {
            const loginRe = Login.auth()

            loginRe.then(() => {
              reject(true)
            })
          } else  {
            WXMessage.showModal(messageTxt)
          }
        })
    })
  },
  /**
   * 发起GET请求
   * @param {any} url
   * @param {any} data
   * @returns
   */
  get(url, data = {}) {
    return new Promise((resolve) => {
      const key = WXStorage.get(DataKey.userKey)
      HEADER.Authorization = `Bearer ${key}`
      const ops = {
        url,
        data,
        header: HEADER,
        method: REQ_METHOD.GET,
      }

      WXRequest.feach(ops)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          Print.error('报错了')
          Print.error(error)
          resolve(false)
        })
    })
  },
  getJson(jsonName) {
    return new Promise((resolve) => {
      const url = `${Config.ImgHost}/json/${jsonName}.json`
      wx.request({
        url,
        method: REQ_METHOD.GET,
        success(res) {
          resolve(res.data)
        },
        fail: (err) => {
          Print.error('报错了')
          Status.notfind(true, err)
          resolve(false)
        },
      })
    })
  },
  getHtml(htmlName) {
    return new Promise((resolve) => {
      const url = `${Config.ImgHost}/html/${htmlName}.html`
      wx.request({
        url,
        method: REQ_METHOD.GET,
        success(res) {
          resolve(res.data)
        },
        fail: (err) => {
          Print.error('报错了')
          Status.notfind(true, err)
          resolve(false)
        },
      })
    })
  },
  file(url, filePath) {
    return new Promise((resolve) => {
      const key = WXStorage.get(DataKey.userKey)

      HEADERFile.Authorization = `Bearer ${key}`

      wx.uploadFile({
        url,
        filePath,
        header: HEADERFile,
        name: 'image',
        formData: {
          'user': 'test',
          'Token': key,
        },
        success(res) {
          const data = res.data
          Print.log(data)
          if (data) {
            resolve(JSON.parse(data))
          } else {
            resolve(false)
          }
        },
      })
    })
  },
}