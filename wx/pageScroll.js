export default {
  /**
   * 页面滚动到最底部
   */
  bottom() {
    if (!wx.pageScrollTo) {
      return
    }
    wx.pageScrollTo({
      scrollTop: 99999,
    })
  },
  /**
   * 页面滚动到最顶部
   */
  top() {
    if (!wx.pageScrollTo) {
      return
    }
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
}