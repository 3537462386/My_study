// pages/second/second.js
function formatTime(time) {
  var minute = Math.floor(time / 60) % 60;
  var second = Math.floor(time) % 60
  return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 播放按钮
    play:true,
    // 暂停按钮
    pause:false,
     // 播放列表数据
     playlist: [{
      id: 1,
      title: '青花瓷',
      src: 'https://www.ytmp3.cn/down/77773.mp3',
      image: 'https://bkimg.cdn.bcebos.com/pic/377adab44aed2e737d28a6b38201a18b86d6fa68?x-bce-process=image/resize,m_lfit,w_536,limit_1'
    }, {
      id: 2,
      title: '只因你太美',
      src: 'https://www.ytmp3.cn/down/60223.mp3',
      image: 'https://bkimg.cdn.bcebos.com/pic/0b7b02087bf40ad12d043ef05e2c11dfa8eccec5?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyNzI=,g_7,xp_5,yp_5'
    }, {
      id: 3,
      title: '谁来剪月光',
      src: 'https://www.ytmp3.cn/down/78650.mp3',
      image: 'https://bkimg.cdn.bcebos.com/pic/c995d143ad4bd11343da31ce50afa40f4bfb0532?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5'
    }, {
      id: 4,
      title: '黑桃A',
      src: 'https://www.ytmp3.cn/down/78645.mp3',
      image: 'https://p3fx.kgimg.com/stdmusic/240/20210815/20210815212852202638.jpg'
    }],
    state: 'paused',
    playIndex: 0,
    // 是否循环播放控制
    loop:false,
    plays: {
      duration: '00:00',
      percent: 0,
      title: '孤岛',
      image: '',
    },
    // 进度条的值
    value:0,
    // 动画效果
    anima:false,
    // 当前播放时间
    nowtime:'00:00',
    // 最大时间
    maxtime:'',
    // 控制播放列表显示
    flag:false
   
  },
  // 初始化音频
  // audioCtx: null,
  onLoad: function() {
    this.audioCtx = wx.createInnerAudioContext()
    // 默认选择第1曲
    this.setMusic(0)
    var that = this
    // 播放完成自动换下一曲
    this.audioCtx.onEnded(function() {
      that.next()
    })
    // 自动更新播放进度
    this.audioCtx.onPlay(function() {})
    this.audioCtx.onTimeUpdate(function() {
      var time = that.audioCtx.currentTime
      that.setData({
        'plays.duration': formatTime(that.audioCtx.duration),
        maxtime:that.audioCtx.duration,
        value:parseInt(time),
        nowtime: formatTime(time),
        'plays.percent': that.audioCtx.currentTime / that.audioCtx.duration * 100
      })
      // console.log(that.data.plays.percent);
    })
    
  },
  // 音乐播放，索引号
  setMusic: function(index) {
    var music = this.data.playlist[index]
    this.audioCtx.src = music.src
    this.setData({
      playIndex: index,
      'plays.title': music.title,
      'plays.image': music.image,
      maxtime:this.audioCtx.duration,
      nowtime: "00:00",
      'plays.duration':formatTime(this.audioCtx.duration),
      'plays.percent': this.audioCtx.currentTime / this.audioCtx.duration * 100
    })
    // console.log(this.data.plays.percent);
  },
// 暂停按钮，暂停音频并转换成播放按钮
  switchplay() {
    this.audioCtx.pause()
    this.setData({
      play:true,
      pause:false,
      state: 'running',
      anima:false,  
    })
  },
  // 播放按钮,播放音频并转换成暂停按钮
  switchpause() { 
    this.audioCtx.play()
    // console.log(this.data.plays.duration);
    this.setData({
      state: 'paused' ,
      play:false,
      pause:true,
      anima:true
    })
    
  }, 
  // 下一首
  next: function() {
    // 判断是不是最后一首，是最后一首则从头开始
      // 重置循环为false
      this.setData({
        loop:false,
        anima:false,
        value:0
      })
    var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
    this.setMusic(index)
      // 播放
    this.switchplay()
    var that = this
    // 使用异步操作给系统缓存时间
    setTimeout(function(){
      that.switchpause()
  },2000)
  },

    //上一首
    pre: function() {
      // 重置循环为false
      this.setData({
        loop:false,
        anima:false,
        value:0
      }) 
       // 判断是不是第一首，是第一首则从末尾开始
      var index = this.data.playIndex == 0 ? this.data.playlist.length - 1 : this.data.playIndex - 1;
      this.setMusic(index)
      // console.log(this.data.maxtime);
      // 播放
      this.switchplay()
      var that = this
      // 使用异步操作给系统缓存时间
      setTimeout(function(){
        that.switchpause()
    },2000)
    },
    // 循环播放
    circle:function(){
      
      var index = this.data.playIndex
      var that = this
      that.switchpause()
      // 循环为false则单击之后进行循环播放
      if(this.data.loop==false){
        // console.log(111);
        this.setData({
          loop:true
        })
        this.audioCtx.onEnded(function() {
          that.setMusic(index)
          // 播放
          that.setData({
            nowtime:"00:00",
            value:0
          })
          that.switchplay();
          setTimeout(function(){
              that.switchpause()
          },150)
        
        })
      }

     else{
        this.setData({
          loop:false
        })
        console.log(2222);
        this.audioCtx.onEnded(function() {
         that.next()
        })
    }
  },
  // 进度条
sliderChange: function (e) {
  this.switchplay() 
  this.audioCtx.seek(e.detail.value); 
  var that = this
 // 使用异步操作给系统缓存时间
 setTimeout(function(){
  that.switchpause()
},150)
  this.setData({  
   nowtime: formatTime(e.detail.value),
   value:e.detail.value
  })
  }, 
  // 播放列表
  // 显示播放列表
  displaylist(){
    this.setData({
      flag:true
    })
    // console.log(this.data.flag);
  },
  listplay(e){
    this.setMusic(e.currentTarget.dataset.index)
    // console.log(e.currentTarget.dataset.index);
    this.setData({
      flag:false
    })
    this.audioCtx.pause()
    var that = this
    // 使用异步操作给系统缓存时间
    setTimeout(function(){
      that.audioCtx.play()
    },1500)
  }
})
// 
