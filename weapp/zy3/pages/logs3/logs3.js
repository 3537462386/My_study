Page({
  data:{
    isDownload:false
  },
  download:function(){
    var that=this
    var downloadTask=wx.downloadFile({
      url: 'https://hjsyy.ecut.edu.cn/_upload/article/images/37/da/222e0eac4c119b29d3005e029f86/ca64cbfd-2208-41e3-85d5-b5f69f6d0990.jpg',
      success:function(res){
        if(res.statusCode===200){
          let src=res.tempFilePath
          that.setData({
            src:src,
            isDownload:true
          })
        }
      }
    })
    downloadTask.onProgressUpdate((res)=>{
      console.log('上传进度',res.progress)
      console.log('已经上传的数据长度',res.totalBytesSent)
      console.log('预期需要上传的数据总长度',res.totalBytesExpectedToSend)
    })
  },
  reset:function(){
    this.setData({
      src:'',
      isDownload:false
    })
  }
})