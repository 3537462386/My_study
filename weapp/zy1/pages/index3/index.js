
Page({

  data: {
    multiSelectorItems: [['玉米汤','蘑菇汤'],['牛排','羊排','鱼排'],['冰淇淋','焦糖布丁','咖啡']]
  },
  multiSelectorChange: function(e){
    let arrayIndex = e.detail.value;
    let array = this.data.multiSelectorItems;
    let value = new Array();
    for(let i = 0; i < arrayIndex.length; i++){
      let k = arrayIndex[i];
      let v = array[i][k];
      value.push(v);
    }
    this.setData({multiSelector: value});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
})