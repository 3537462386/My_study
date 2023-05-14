// pages/operation/op4/index.js
Page({
    goToForm:function(){
        wx.setStorageSync('isCard', this.data.isCard)
        wx.navigateTo({
          url: '../form/index',
        })
      },
     
        // 打电话给紧急联系人
        makeCall:function(){
          let tel = this.data.myCard.tel
          wx.makePhoneCall({
            phoneNumber: tel,
          })
        },
    
    /**
     * 页面的初始数据
     */
    data: {
        isCard:false
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
         // 同步获取本地缓存
         let myCard = wx.getStorageSync('myCard')
         let isCard = wx.getStorageSync('isCard')
         // 更新动态数据
         this.setData({
             myCard:myCard,
             isCard:isCard
         })
         console.log(isCard)
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