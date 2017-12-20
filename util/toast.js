import BASE64 from '../../data/base64'
// stack
import Stack from '../wx/stack'

export default {
  /**
   * toast loading
   * @param {number} [duration=0]
   */
  loading(duration = 0) {
    const vm = Stack.page()
    vm.setData({
      error: false,
    })
    vm.wetoast.toast({
      img: BASE64.loader,
      imgClassName: 'my_wetoast_img',
      duration,
      imgMode: 'scaleToFill',
    })
  },
  close() {
    const vm = Stack.page()
    vm.wetoast.toast()
  },
  title(title = 'ok', duration = 1500) {
    const vm = Stack.page()
    vm.wetoast.toast({
      title,
      duration,
    })
  },
}