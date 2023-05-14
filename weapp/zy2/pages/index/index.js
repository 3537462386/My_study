// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  // 事件处理函数
  gotoFir:function(){
    wx.navigateTo({
      url: '../first/first',
    })
  },
  gotoSec:function(){
    wx.navigateTo({
      url: '../second/second',
    })
  },

})
