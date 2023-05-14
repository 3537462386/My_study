// pages/operation/op4/form/index.js
Page({
    dateChange:function(e){
        let value = e.detail.value; //获得选择的日期
        this.setData({date:value}); //将选项名称更新到WXML页面上
      },
     
      
      // 更新血型
      bloodChange:function(e){
        let i = e.detail.value; //获得血型的序号
        this.setData({blood:this.data.bloodItems[i]
        }); //将选项名称更新到WXML页面上
      },
    // 此时可以将滚动选择器修改的内容到当前页面
     
    // 提交表单
    submitForm:function(e){
        // let myCard = !myCard,
      // 同步保存数据
      wx.setStorageSync('myCard', e.detail.value)
      wx.setStorageSync('isCard',this.data.isCard)
      // 成功后返回首页
      wx.navigateBack()
    },
     
    // 删除医疗急救卡
    delMyCard:function(){
    // 同步删除数据
    wx.removeStorageSync('myCard')
    wx.setStorageSync('isCard',false)
    // 成功后返回首页
    wx.navigateBack()
    },
    
    /**
     * 页面的初始数据
     */
    data: {
        isCard:true,
        date:'2000-01-01',
        ylzk:'',
        ylbj:'',
        gmfy:'',
        yy:'',
        blood:'未知',
        qgjz:false, /* 器官捐赠者 */
        height:'160',
        weight:'50',
        bloodItems:['未知','A','B','AB','O']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let isCard = wx.getStorageSync('isCard')
        let myCard = wx.getStorageSync('myCard')
     
        // 有数据
        if(myCard!=''){
          this.setData({
            date:myCard.date,
            ylzk:myCard.ylzk,
            ylbj:myCard.ylbj,
            gmfy:myCard.gmfy,
            yy:myCard.yy,
            blood:myCard.blood,
            qgjz:myCard.qgjz,
            height:myCard.height,
            weight:myCard.weight,
            tel:myCard.tel
          })
        }
        // console.log(isCard)
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