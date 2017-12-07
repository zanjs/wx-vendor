import Env from '../../env'

export default {
  to2(num) {
    let n = parseInt(num * Env.float2int, 10)

    const s = n.toString()
    const endn = s.substr(s.length - 1, 1)
    if (endn > 4) {
      n += 10
    }

    const v = (n / Env.float2int)
    let vSt = v.toString()
    const arrSp = vSt.split('.')
    const endStr = arrSp[1] || ''
    if (endStr.length > 2) {
      vSt = vSt.substr(0, vSt.length - 1)
    }

    return vSt
  },
  to2n(num) {
    let n = parseInt(num * Env.float2int, 10)

    const s = n.toString()
    const endn = s.substr(s.length - 1, 1)
    if (endn > 4) {
      n += 10
    }

    const v = (n / Env.float2int)
    let vSt = v.toString()
    const arrSp = vSt.split('.')
    const endStr = arrSp[1] || ''
    if (endStr.length > 2) {
      vSt = vSt.substr(0, vSt.length - 1)
    }

    if (endStr.length == 1) {
      vSt = `${vSt}0`
    }

    if (endStr.length == 0) {
      vSt = `${vSt}.00`
    }

    return vSt
  },
}