// pages/lab/lab5/index.js
Page({
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    this.getlocationID().then(result => {
      this.getWeather(); //更新天气
    })

  },

  getWeather: function () {
    var that = this; //this不可以之间在微信API函数内部使用，把this赋值到that里面
    wx.showLoading({
      title: "正在获取中",
      mask: true
    });
    wx.request({ //查询天气时地域会变化，因此url也会变化即里面的parameters参数，我们可以分开处理，如下：
      url: 'https://devapi.qweather.com/v7/weather/now?', //主要url
      data: { //http请求当中的参数
        location: that.data.locationID, //地域参数   
        key: '22813770bcc64990b2f247e592a7663c' //key参数
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          now: res.data.now
        })
        wx.hideLoading();
      }
    })
  },
  getlocationID: function () {
    var that = this; //this不可以之间在微信API函数内部使用，把this赋值到that里面
    return new Promise(resolve => {
      wx.request({
        url: 'https://geoapi.qweather.com/v2/city/lookup?', //主要url
        data: { //http请求当中的参数
          location: that.data.region[1], //地域参数
          adm: that.data.region[0], // 防止重名    
          key: '22813770bcc64990b2f247e592a7663c' //key参数
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            locationID: res.data.location[0].id
          })
          return resolve()
        }
      })
    })

  },
  /**
   * 页面的初始数据
   */
  data: {
    region: ['江西省', '南昌市', '青山湖区'],
    locationID: 101240101,
    now: {
      temp: 0,
      text: '未知',
      icon: '999',
      humidity: 0,
      pressure: 0,
      vis: 0,
      windDir: 0,
      windSpeed: 0,
      windScale: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getlocationID().then(result => {
      this.getWeather(); //更新天气
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})