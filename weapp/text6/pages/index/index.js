// pages/lab/lab6/index.js
Page({
    showGuide: function() {
        var that = this
        wx.openLocation({
          latitude: that.data.lat,
          longitude: that.data.lon,
        })
      },
    /**
     * 页面的初始数据
     */
    data: {
        lat: 24.579805,
        lon: 118.095086,
        guest: [{
            avatar: '/images/QQ.png',
            name: '微信事业部技术人员'
          },
          {
            avatar: '/images/one.png',
            name: '周文洁'
          }
        ] 
    
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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