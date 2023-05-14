

Page({
  chooseVideo:function(){
    var that=this
    wx.chooseMedia({
      sourceType:['album','camera'],
      maxDuration:60,
      camera:'back',
      success:function(res){
        that.setData({
          src:res.tempFiles[0].tempFilePath
        })
      }
    })
  },

  play:function(){
    this.videoContext.play()
  },
  
  pause:function(){
    this.videoContext.pause()
  },

  saveVideo:function(){
    var src=this.data.src
    wx.saveVideoToPhotosAlbum({
      filePath: src,
      success:function(res){
        wx.showToast({
          title: '保存成功',
        })
      }
    })
  },
  onLoad:function(options){
    this.videoContext=wx.createVideoContext('myVideo')
  }

})
