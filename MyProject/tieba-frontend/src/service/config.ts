// 配置 $axios 请求时的公共部分
export default {
	// 定义请求方法类型，默认为 "post"
	method: 'post',
	
	// 定义 API 接口的地址，可以根据需要进行修改
	baseUrl: 'http://localhost:3000',
  
	// 定义请求头信息，例如 Content-Type 等
	headers: {
	  "Content-Type": 'application/x-www-form-urlencodedcharset=utf-8' 
	},
  
	data() {},
  
	// 定义请求超时时间，默认为 10 秒
	timeout: 10000,
  
	// 是否携带凭证，在跨域请求时可以选择是否允许携带 cookie 等身份验证信息，默认为 false
	withCredentials: false,
  
	// 定义响应的数据格式，默认为 JSON 格式
	responseType: 'json'
  }
  