export default {
  /**
   * 将页面滚动到目标位置。
   * @param {any} scrollTop 
   */
  pageScrollTo(scrollTop) {
    wx.pageScrollTo({
      scrollTop,
    })
  },
}