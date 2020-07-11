//app.js
App({
  test: null,         // 自定义的全局变量 test
  myFunc() {
    this.test = 123   // 通过 this 关键词可以访问到 App 中的变量
  },
  /* 将 onLaunch: function () 改为 onLaunch() 试一试 */
  onLaunch: function (options) {
    console.log('app onLaunch, options value is', options)
    this.myFunc()     // 通过 this 关键词可以调用 App 中的函数

    /* 以下是微信开发者工具自动生成的样例代码 */
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow(options) {
    // 生命周期函数，小程序打开的时候和每次小程序切换到前台都会执行一次
    console.log('app onShow, options value is', options)
  },
  onHide() {
    // 生命周期函数，每次小程序切换到后台都会执行一次
    console.log('app onHide')
  },
  onError(msg) {
    // 错误监听函数，每次小程序JS代码报错都会调用一次
    console.log('app onError, msg is', msg)
  },
  globalData: {
    userInfo: null
  }
})