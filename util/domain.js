import { getDomain } from '../libs/tld'

export default {
  /**
   * 获取顶级域名
   * @param {any} url 
   * @returns 
   */
  get(url) {
    return getDomain(url)
  },
  /**
   * 比较2个 url 相同
   * @param {any} url 
   * @param {any} url2 
   * @returns 
   */
  same(url, url2) {
    const w1 = getDomain(url)
    const w2 = getDomain(url2)

    return w1 == w2
  },
}