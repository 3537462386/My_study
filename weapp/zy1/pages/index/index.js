
const app = getApp()

Page({
  data: {
    ischange:false
  },
  changecolor(){
    const a = this.data.ischange
    this.setData({ischange:!a})
  },
  
})
