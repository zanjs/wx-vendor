import DA from '../util/da'
import Stack from '../wx/stack'

export default {
  /**
   * 图片等比例缩放
   * @param {any} e
   * @param {any} width
   */
  scaleZoom(e, width) {
    const vm = Stack.page()
    const imgOrginWidth = e.detail.width
    const imgOrginHeight = e.detail.height
    wx.getSystemInfo({
      success(res) {
        const screenWidth = res.windowWidth

        // const screenHeight = res.windowHeight
        const imgRate = DA.iTofixed((screenWidth - width) / imgOrginWidth, 2)
        const computedImgWidth = `${screenWidth - width}px`
        const computedImgHeight = `${imgOrginHeight * imgRate}px`
        vm.setData({
          computedImgWidth,
          computedImgHeight,
        })
      },
      fail() {
        console.log('获取getSystemInfo失败')
      },
    })
  },
}