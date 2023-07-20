import $axios from './api'

// 登录页面
export const login = (data:any) => {
	return $axios({
		url: '/login',
		method: 'post',
		// 传给后端
		data: data
	})
}

// 注册页面
export const register = (data:any) => {
	return $axios({
		url: '/register',
		method: 'post',
		// 传给后端
		data: data
	})
}

// 发表贴子
export const addPost = (data:any) => {
	return $axios({
		url: '/addPost',
		method: 'post',
		// 传给后端
		data: data
	})
}

// 获取所有贴子
export const getAllPosts = (data:any) => {
	return $axios({
		url: '/getAllPost',
		method: 'post',
		// 传给后端
		data: data
	})
}

// 获取所有贴吧
export const getAllTags=(data:any) => {
	return $axios({
		url:'/getAllTags',
		method:'post',
		data:data
	})
}
// 获取吧广场页面内容
export const getSpaceba=(data:any) => {
	return $axios({
		url:'/spaceba',
		method:'get',
		data:data
	})
}

//获取热搜页面内容
export const getRs=(data:any)=>{
	return $axios({
		url:'/rs',
		method:'get',
		data:data
	})
}

// 点赞取消贴子
export const likePost=(data:any) => {
	return $axios({
		url:'/likePost',
		method:'post',
		data:data
	})
}