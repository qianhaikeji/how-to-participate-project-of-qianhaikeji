import Vue from 'vue'
import config from '../Config'
// import {token} from '../services/DataService'
const localStorage = window.localStorage

export default {
  user: {
    logined: false,
    token: null
  },

  getToken () {
    // 获取
    let appid = config.wechatAppId
    let redirectUrl = encodeURI(config.server + '/users/token')
    // base64进行编码。微信的state参数有格式限制，导致当前url不能完整地回传，因此用base64进行编码。
    let currentUrl = window.btoa(window.location.href)

    let wechatAuthUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}` +
                        `&redirect_uri=${redirectUrl}` +
                        `&response_type=code` +
                        `&scope=snsapi_base` +
                        `&state=${currentUrl}` +
                        `#wechat_redirect`
    window.location.href = wechatAuthUrl
  },
  _parseUlrParams (name) {
    let reg = new RegExp('(^|&|%3F)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    return r && unescape(r[2])
  },
  _activeAuthInfo (token) {
    this.user.logined = true
    this.user.token = token
    Vue.http.headers.common['Authorization'] = 'Basic ' + token
    localStorage.setItem('token', token)
  },
  login () {
    let tokenInStorage = localStorage.getItem('token')
    let tokenInUrl = this._parseUlrParams('token')

    if (tokenInStorage) {
      // localStorage中有，则用localStorage中的。
      console.debug('从localStorage获取到了token')
      this._activeAuthInfo(tokenInStorage)
      return true
    } else if (tokenInUrl) {
      // localStorage中没有，但地址栏中有，说明是后端帮忙获取好后，重定向回此页面，并将token带到了地址栏参数。
      console.debug('从地址栏获取到token成功')
      this._activeAuthInfo(tokenInUrl)
      return true
    } else {
      // 从后端取，相当于登录。
      console.debug('没有token，从后端获取')
      this.getToken()
      return false
    }
  }
}

// TODO:对403和401进行拦截。因为token可能超时，如果出现了，再次调用一次 getToken。
