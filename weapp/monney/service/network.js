// 数据请求
  import { baseURL , timeout} from './config.js'
  function request(options) {
    // 交互反馈
    wx.showLoading({
      title: '美味即将到达',
    })
    // 异步请求数据
    return new Promise ((resolve,reject) =>   {
        console.log(baseURL + options.url);

        wx.request({
          url: baseURL + options.url,
          timeout,
          data:options.data || {},
          // 请求成功
          success:function(res) {
            resolve(res.data)
          },
          // 失败
          fail:function (err) {
            reject(err)
          },
          // 请求结束，隐藏加载函数
          complete:function() {
            wx.hideLoading()
          }
        })  
    })
  }

  export default request