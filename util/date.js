import timeago from '../libs/timeago'

export default {
  format(timeStr) {
    // const date = new Date()
    // const gmtTimes = date.getTimezoneOffset() * 60 * 1000
    const utcTime = new Date(timeStr.replace(/-/g, '/'))

    // return timeago().format((utcTime.getTime() - gmtTimes), 'zh_CN')
    return timeago().format(utcTime.getTime(), 'zh_CN')
  },
  formatNow() {
    const utcTime = new Date()
    // return timeago().format((utcTime.getTime() - gmtTimes), 'zh_CN')
    return timeago().format(utcTime.getTime(), 'zh_CN')
  },
}