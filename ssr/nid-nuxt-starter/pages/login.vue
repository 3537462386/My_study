<script lang="ts" setup>
import { CurrentUser } from '~~/types/user.type';
const router = useRouter();
// 代理跨域 后端 向其他的后端发送请求，跨域
useHead({
  title: '登录'
})

const name = ref('');
const password = ref('')
const currentUser = useState('currentUser')

const login = async () => {
  // 类型的传参
  const { data } = await useApiFetch<CurrentUser>('login', {
    method: 'POST',
    body: {
      name: name.value,
      password: password.value
    }
  })
  console.log(data);
  if (data.value) {
    currentUser.value = data.value;
    useLocalStorage('currentUser', currentUser.value)
    router.push('/')
  }
}
</script>

<template>
  <div>
    <h1>用户登录</h1>
    <form @submit.prevent="">
      <div>
        <input
          v-model="name"
          type="text"
          autocomplete="username"
          placeholder="名字"
        />
      </div>
      <div>
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
          placeholder="密码"
        />
      </div>
      <div>
        <button class="paramr" @click="login">登录</button>
      </div>
    </form>
  </div>
</template>