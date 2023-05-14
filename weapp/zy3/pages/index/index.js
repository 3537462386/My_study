// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  // 事件处理函数
  homework1:function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  homework2:function(){
    wx.navigateTo({
      url: '../logs2/logs2',
    })
  },
  homework3:function(){
    wx.navigateTo({
      url: '../logs4/logs4',
    })
  },
  homework4:function(){
    wx.navigateTo({
      url: '../logs3/logs3',
    })
  },
 
})
