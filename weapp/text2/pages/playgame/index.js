// pages/playgame/index.js
Component({
  properties: {

  },
  data: {
    answer:0,
    isGameStart:true,
    count:0,
    tip:'',
    x:0,
    list:{
    answer:0,
    isGameStart:true,
    count:0,
    tip:'',
    x:0
    }
  },
  onload() {
    data.answer = Math.ceil(Math.random() * 100)
    console.log(data.answer)
  },
  methods: {
      getNumber(e){
        this.data.x = e.detail.value
        
      },
      guess(){
        this.data.count++
        if(this.data.x > this.data.answer){
          this.data.tip+=`第${this.data.count}回合：${this.data.x},大了！`
        }
        if(this.data.x < this.data.answer){
          this.data.tip+=`第${this.data.count}回合：${this.data.x},小了！`
        }
        if(this.data.x = this.data.answer) {
          this.data.isGameStart = false
          this.data.tip+=`第${this.data.count}回合：你猜对了`
        }
        this.setData({
          list:{
            answer:this.data.answer,
            isGameStart:this.data.isGameStart,
            count:this.data.count,
            tip:this.data.tip,
            x:this.data.x
            }
        })
        this.data.x=''
        
      },
      restartGame(){

      }
  }
})
