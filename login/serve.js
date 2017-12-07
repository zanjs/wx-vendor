import SetData from '../data/set'
import Login from './index'

export default {
  /**
   * service 数据返回响应处理 是否登陆过期
   * @param {any} res
   */
  async serveReact(res, cb) {
    const data = res
    if (typeof res !== 'object') {
      cb()
    }
    if (data.Code === -2000) {
      SetData.expire()
      await Login.auth()
      cb()
    } else {
      cb()
    }
  },
}