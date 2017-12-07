export default {
  /**
   * 显示当前页面的转发按钮
   */
  show() {
    wx.showShareMenu({
      withShareTicket: true,
    })
  },
}