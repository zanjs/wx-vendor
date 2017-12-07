import Print from '../util/print'

export default {
  setting() {
    wx.openSetting({
      success: (res) => {
        Print.Log(res)
      },
    })
  },
}