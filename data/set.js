// stack
import Stack from '../wx/stack'
import Lang from '../lang/lang'

export default {
  /**
   * 全局页面初始化状态
   */
  init() {
    const vm = Stack.page()
    vm.setData({
      error: false,
      errorMsg: Lang.ErrorMsg,
      loading: false,
      // noCurItem: false, // 当前列表是否为空
      Lang,
    })
  },
  /**
   * 页面加载状态
   */
  loading() {
    const vm = Stack.page()
    vm.setData({
      loading: true,
    })
  },
  /**
   * 关闭 loading 加载状态
   */
  loadingClone() {
    const vm = Stack.page()
    vm.setData({
      loading: false,
    })
  },
  /**
   * 数据错误处理
   * @param {any} notfind
   * @param {string} [notfindMsg='没找到数据哎...']
   */
  notfind(notfind, notfindMsg = Lang.NotfindMsg) {
    const vm = Stack.page()
    vm.setData({
      notfind,
      notfindMsg,
    })
  },
  /**
   * 错误报告
   * @param {any} [msg=Lang.ErrorMsg]
   */
  error(msg = Lang.ErrorMsg) {
    const vm = Stack.page()
    vm.setData({
      error: true,
      errorMsg: msg,
    })
  },
  /**
   * 弹框提示
   * @param {any} msg 
   */
  alert(msg) {
    const vm = Stack.page()
    vm.setData({
      alert: true,
      alertMsg: msg,
    })
  },
  /**
   * 关闭弹框提示
   */
  alertClose() {
    const vm = Stack.page()
    vm.setData({
      alert: false,
    })
  },
  /**
   * 弹框提示
   * @param {any} msg 
   */
  confirm(msg) {
    const vm = Stack.page()
    vm.setData({
      confirm: true,
      confirmMsg: msg,
    })
  },
  /**
   * 关闭弹框提示
   */
  confirmClose() {
    const vm = Stack.page()
    vm.setData({
      confirm: false,
    })
  },
  /**
   * 登陆过期 认证失败
   */
  expire() {
    const vm = Stack.page()
    vm.setData({
      error: true,
      errorMsg: 'exproe',
    })
  },
  id(id) {
    const vm = Stack.page()
    vm.setData({
      id,
    })
  },
  /**
   * 系统信息
   * @param {any} systeminfo 
   */
  systeminfo(systeminfo) {
    const vm = Stack.page()
    vm.setData({
      systeminfo,
    })
  },
}