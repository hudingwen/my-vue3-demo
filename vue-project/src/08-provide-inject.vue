<script setup>
import childCenter from '@/components/child-center.vue'

import { provide, ref } from 'vue';

// 跨层传递普通数据
provide('theme-color', 'pink')

// 跨层传递响应式数据
const count = ref(100)
provide('count', count)

setTimeout(() => {
  count.value = 200
}, 2000);

//跨层级传递函数,方便子组件修改父组件的数据,提供方法进行修改
provide('changeCount', (newCount) => {
  count.value = newCount
})

</script>
<template>
  <h1>我是顶层组件 - {{ count }}</h1>
  <childCenter></childCenter>
</template>