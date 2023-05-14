<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

// nuxt 内置的hooks 函数
	const { name } = useAppConfig()
	console.log(name);
	// 统一设置title的地方
	useHead({
		titleTemplate(title) {
			return title ? `${title} - ${name}` : name
		},
	})
	// onMounted 不用引入
	// useState nuxt 内置的hooks react 
	// useLocalStorage 放哪里
	onMounted(() => {
		const currentUserFromStorage = useLocalStorage('currentUser')
		if (currentUserFromStorage) {
			const currentUser = useState('currentUser')
			currentUser.value = currentUserFromStorage
		}
	})
</script>

<style scoped>

</style>