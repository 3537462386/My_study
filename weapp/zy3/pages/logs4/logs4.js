Page({
  getLocation:function(){
    var that=this;
    wx.getLocation({
      success:function(res){
        that.setData({
          lat:res.latitude,
          lon:res.longitude,
        })
      }
    })
  }
})