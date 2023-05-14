
Page({
  data: {
    list: [
      {
        id: '1001',
        title: '杨国宜先生口述校史实录',
        videoUrl: 'https://zzb.ecut.edu.cn/_upload/article/videos/c4/2e/e6ea7cb54c938cd7e4484b6d6b3e/8d6caf9d-192f-4c6b-8295-9bf589532db2.mp4'
      },
      {
        id: '1002',
        title: '唐成伦先生口述校史实录',
        videoUrl: 'https://zzb.ecut.edu.cn/_upload/article/videos/c4/2e/e6ea7cb54c938cd7e4484b6d6b3e/8d6caf9d-192f-4c6b-8295-9bf589532db2.mp4'
      },
      {
        id: '1003',
        title: '倪光明先生口述校史实录',
        videoUrl: 'https://zzb.ecut.edu.cn/_upload/article/videos/26/54/a38be273476f8c9c38aeb8e711f4/8555e296-4bdc-4eb2-9f7e-ed7f07aeb637-B.mp4'
      },
      {
        id: '1004',
        title: '吴仪兴先生口述校史实录',
        videoUrl: 'https://www.ecut.edu.cn/_upload/article/videos/0e/96/b434602f4b73b795eb62113f3c75/00349a58-7882-4010-8869-ffc4cc8341fa.mp4'
      }
  ],
   
    src:'',
   inputValue:''
  },

  
  playVideo: function(e){
    this.videoCtx.stop()
    this.setData({
      src: e.currentTarget.dataset.url
    })
      setTimeout(()=>{ 
          this.videoCtx.play();
      },1000)
},
  
  bindInputBlur:function(e){
    this.inputValue=e.detail.value
  },
  bindSendDanmu:function(){
    this.videoCtx.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  onLoad(options) {
  this.videoCtx=wx.createVideoContext('myVideo')
  },
})

function getRandomColor() {
  let rgb=[]
  for(let i=0; i<3; i++){
    let color=Math.floor(Math.random()*256).toString(16)
    color=color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
