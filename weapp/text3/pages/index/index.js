// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    a:'',
    b:'',
    c:'',
    d:'',
    e:'',
    list_one:[
      {name:'大一',value:'one'},
      {name:'大二',value:'two'},
      {name:'大三',value:'three'},
      {name:'大四',value:'four'}
    ],
    list_two:[
      {name:'社交',value:'社交'},
      {name:'网购',value:'网购'},
      {name:'学习',value:'学习'},
      {name:'其他',value:'其他'}
    ],
    list_three:[
      {name:'有',value:'有'},
      {name:'无',value:'无'}
    ]
  },
  radioChange (e) {
    let a = ''
    if (e.detail.value === 'one') {
      a = '大一'
    }
    if (e.detail.value === 'two') {
      a = '大二'
    }
    if (e.detail.value === 'three') {
      a = '大三'
    }
    if (e.detail.value === 'four') {
      a = '大四'
    }
    this.data.a = `你选择的现在大几：${a}`
  },
  checkChange(e) {
    let arr = []
    arr.push(e.detail.value)
    this.data.b = `你使用手机的最大用途是：${arr}`
  },
  sliderChange(e){
    this.data.c = `你选择的每天使用手机的时间是：${e.detail.value}`
  },
  radiochange(e){
    this.data.d = `你选择的是否使用过小程序是：${e.detail.value}`
  },
  getinput(e){
    this.data.e = `你输入的对小程序未来前途发展的看法是：${e.detail.value}`
  },
  commit(){
    console.log(this.data.a)
    console.log(this.data.b)
    console.log(this.data.c)
    console.log(this.data.d)
    console.log(this.data.e)
  },
  onRest(){

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
