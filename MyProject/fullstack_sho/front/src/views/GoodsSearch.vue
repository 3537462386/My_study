<template>
    <div class="home-header">
        <van-icon name="arrow-left" color="#fff" size="30px" @click="leftClick" />
        <van-search clear-trigger="focus" shape="round" background="#f86c35" v-model="value" 
            placeholder="夏季畅销" 
            @search="goSearch"
        />
        <i class="iconfont icon-sousuo" @click="goSearch"></i>
    </div>

    <div class="log" v-if="allLogs.length !== 0">
        <div class="logs-header">
        <div class="logs-title">
            <van-icon name="clock-o" class="clock-o" />
            <span class="title">最近搜索</span>
        </div>
        <van-icon name="delete-o" class="delete-o" @click="clear" />
        </div>

        <div class="logs-content">
        <div class="logs-item" @click="fullTitle(item)" v-for="(item,index) in allLogs" :key="index">
            <div class="logs-container">{{ item }}</div>
        </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const value = ref(''); //输入框的值
const state = reactive({
    logs: [] // 搜索历史
})

const allLogs = Array.from(
    new Set(
        JSON.parse(localStorage.getItem('logs')
    ))
)

const router = useRouter()
const leftClick = () => {
    router.push('/home');
}

const setLogs = (val) => {
    state.logs.push(val);
    localStorage.setItem('logs', JSON.stringify(state.logs))
}

const goSearch = () => {
    if (value.value.trim()) {
        if (localStorage.getItem('logs')) {
            JSON.parse(localStorage.getItem('logs')).forEach(
                item => state.logs.push(item))
        }
        setLogs(value.value.trim())
        router.push({path: '/resultSearch', query:{name: value.value.trim()}})
        value.value = ''
    } else {
        if (localStorage.getItem('logs')) {
            JSON.parse(localStorage.getItem('logs')).forEach(
                item => state.logs.push(item))
        }
        setLogs('夏季畅销')
        router.push({path:'/resultSearch', query: {name: '夏季畅销'}})
        value.value = ''
    }
}

const clear = () => {
    state.logs = []
    localStorage.removeItem('logs')
    window.location.reload()
}

const fullTitle = (item) => {
    value.value = item
}
</script>
<style lang="less" scoped>
.home-header {
  width: 100%;
  height: 50px;
  background: #f86c35;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .header-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #232326;
    background: rgba(255, 255, 255);
    border-radius: 10px;
    line-height: 20px;
    padding: 0 10px;
  }

  .icon-sousuo {
    color: #ffffff;
    font-size: 25px;
  }
}

.log {
  margin-top: 50px;

  .logs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5px 0 5px;

    .logs-title {
      display: flex;
      align-items: center;

      .clock-o {
        font-size: 25px;
        color: #9e9e9e;
      }

      .title {
        font-size: 15px;
        color: #7a7a7a;
      }
    }

    .delete-o {
      font-size: 23px;
      color: #9e9e9e;
    }

  }

  .logs-content {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;

    .logs-item {
      line-height: 20px;
      text-align: center;
      background: #dcdcdc;
      border-radius: 10px;
      margin: 6px;

      .logs-container {
        font-size: 13px;
        padding: 5px;
      }
    }
  }
}
</style>

<style>
.van-search {
  height: 50px;
  width: 270px;
}
</style>

