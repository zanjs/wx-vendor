import Print from '../util/print'

export default {
  userKey: 'userKey',
  userkeyTime: 'userkeyTime', // 用户key创建时间
  code: 'code',
  codeTime: 'codeTime',
  title: 'title',
  description: 'description',
  imageList: 'imageList',
  image: 'image',
  email: 'email',
  userInfo: 'userInfo',
  konwShow: 'konwShow',
  guideGroupDetail: 'guideGroupDetail', // 拼单详情页引导层
  RealName: 'RealName',
  IdCard: 'IdCard',
  createFirst: 'createFirst', // 第一次创建拼单
  idCardList: 'idCardList', //  拼长上传身份证照片
  certiSubmited: 'certiSubmited', // 是否已经提交过审核资料
  withdrawDetail: 'withdrawDetail', // 提现详情object
  createWechat: 'createWechat', // 创建拼单时记录微信号
  createDescription: 'createDescription', // 创建拼单时记录描述
  creatLocation: 'creatLocation', // 创建拼单时记录地理位置
  createRead: 'createRead',
  incomeDetail: 'incomeDetail', // 收支详情
  processDetail: 'processDetail', // 进度跟踪
  orderName: 'orderName', // 订单姓名
  orderPhone: 'orderPhone', // 订单手机号
  orderProvince: 'orderProvince', // 订单省
  orderCity: 'orderCity', // 订单市
  orderArea: 'orderArea', // 订单区
  orderPostalcode: 'orderPostalcode', // 订单区
  orderAddress: 'orderAddress', // 订单街道地址 
  orderReceiptType: 'orderReceiptType', // 订单收货方式
  transDetail: 'transDetail', // 交易详情
  bindPhoneNoShow: 'bindPhoneNoShow', // 绑定手机号弹框不在显示
  set(key, val) {
    try {
      return wx.setStorageSync(key, val)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
  get(key) {
    try {
      return wx.getStorageSync(key)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
  remove(key) {
    try {
      return wx.removeStorageSync(key)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
}