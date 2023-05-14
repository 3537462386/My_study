// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    soup:['玉米汤','罗宋汤','奶油蘑菇汤'],
  
    maincourse:['烤猪排','煎牛肉','清煮三文鱼'],
    dessert:['芒果布丁','芝士蛋糕','草莓冰淇淋'],
    value:[1,1,1],
    menu:[]
  },
  pickerviewChange:function(e){
    let v = e.detail.value;
    let menu = [];
    menu.push(this.data.soup[v[0]])
    menu.push(this.data.maincourse[v[1]])
    menu.push(this.data.dessert[v[2]])
    console.log(this.data.dessert[v[2]]);
    this.setData({
      menu:menu
    })
  }
  
})