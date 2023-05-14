<template>
    <div class="container">
        <div class="header">
            <van-icon name="arrow-left" size="20" />
            <van-icon name="setting-o" size="20" />
        </div>
        <div class="body">
            <h2>登录百度账号&nbsp;精彩永相随</h2>
            <div class="myinput"><input type="text" placeholder="请输入用户名/邮箱/手机号" class="user" v-model="state.formData.username"></div>
            <div class="myinput"><input type="password" placeholder="请输入登录密码" class="pw" v-model="state.formData.password"></div>
            <div class="other">
                <a href="">更换设备登录</a>
                <a href="">忘记密码</a>
            </div>
            <button @click="submitForm">登录</button>
        </div>
        <div class="foot">

        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import router from '@/router'
import { showNotify } from 'vant'

const state = reactive({
  formData: {
      username: '',
      password: ''
  },
  checked: true
})

const submitForm = () => {
	if (!state.formData.password) return;
		if (state.formData.username === 'admin' && state.formData.password === '666666') {
			showNotify({ type: 'success', message: '登录成功' })
			localStorage.setItem('my_name', state.formData.username)
			router.push('/');
		} else {
			showNotify({ type: 'warning', message: '不存在的账号' });
			return false;
		}
}

</script>

<style lang="stylus" scoped>
.container
    background-image linear-gradient(to right, #4facfe 0%, #00f2fe 100%)
    width 100vw
    height 100vh
    display flex
    flex-direction column
    justify-content space-between
    align-items center
    .header
        display flex
        justify-content space-between
        padding 10px
        width 92%
    .body
        background-color white
        display flex
        flex-direction column
        align-items center
        height 60vh
        width 90%
        border-radius 20px
        .myinput
            width 80%
            height 50px
            border-radius 25px
            background-color #F5F5F5
            margin 10px
            input 
                position relative
                top 50%
                left 50%
                transform translate(-50%, -50%)
                height 48px
                border none 
                background-color #F5F5F5
                width 70%
                text-align center
                font-size 18px
        .other
            margin 10px
            display flex
            justify-content space-between
            width 80%
            height 40px
            font-size 13px
        button 
            width 80%
            height 50px 
            border-radius 25px
            margin 10px
            background-color #87CEFA
            border none 
            color white
            font-size 18px
        h2
            margin 40px
</style>    