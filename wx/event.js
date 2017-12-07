export default {
  /**
   * 获取元素的 data 私有属性
   * @param {any} event
   * @param {any} key
   * @returns
   */
  dataset(event, key) {
    return event.currentTarget.dataset[key]
  },
  value(event) {
    return event.detail.value
  },
  formId(event) {
    return event.detail.formId
  },
  index(event) {
    return event.currentTarget.dataset.index
  },
  current(event) {
    return event.detail.current
  },
  /**
   * 当前图片src地址
   * @param {any} event 
   * @returns 
   */
  src(event) {
    return event.currentTarget.dataset.src
  },
  id(event) {
    return event.currentTarget.dataset.id
  },
  text(event) {
    return event.currentTarget.dataset.text
  },
}