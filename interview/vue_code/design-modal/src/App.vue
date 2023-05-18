<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
const showModal = () => {
    show.value = true
}
const doCancel = () => {
  console.log('cancel')
}
const doConfirm= ()=> {
  console.log('confirm')
  show.value = false
}
</script>

<template>
<div>
  {{$t('demo.text')}}
  <!-- ElInput  R  name defineComponentName  全局-->
  <button @click="showModal">显示modal</button>
  <RModal v-model="show" title="Modal 标题" @on-cancel="doCancel" @on-confim="doConfirm">
      <div>这是一个Modal</div>
  </RModal>
</div>
</template>

<style>
</style>
