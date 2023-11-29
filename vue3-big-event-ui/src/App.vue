<script setup>
// 在 Vue3 CompositionAPI 中
// 1.获取路由对象 router useRouterconst router = useRouter()
// 2.获取路由参数 route useRouteconst route = useRoute( )

import { useRoute, useRouter } from 'vue-router'
// import { useUserStore } from './stores/user'
import { useUserStore } from '@/stores'
// 这儿的路由不能在方法中use创建,否则会创建失败
const n1 = useRoute()
const n2 = useRouter()

const goList = () => {
  // 错误用法,在setup无法获取到this
  // this.$router.push('/list')

  console.info('route', n1)
  console.info('router', n2)
  n2.push('/list')
}
const userStore = useUserStore()
</script>

<template>
  <router-view></router-view>
  <div>我是app</div>
  <test-demo></test-demo>
  <button @click="$router.push('/home')">跳首页</button>
  <button @click="goList">跳列表</button>

  <div>
    我是element-plus
    <el-button>按钮</el-button>

    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('Bearer asjfkajsdhjashdkj')"
      >登录</el-button
    >
    <el-button @click="userStore.removeToken">退出</el-button>
  </div>
</template>

<style scoped></style>
