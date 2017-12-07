import { Promise } from '../libs/es6-promise'

export default {
  feach(options) {
    return new Promise((resolve, reject) => {
      const url = options.url
      const data = options.data
      const header = options.header
      const method = options.method
      wx.request({
        url,
        data,
        header,
        method,
        success(res) {
          if (res.statusCode == 200) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
        },
        fail: (err) => {
          reject(err)
        },
      })
    })
  },
}