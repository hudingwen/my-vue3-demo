<script setup>
//父传子
// 1.给子组件,添加属性方式传值
// 2.子子组件,通过props接收
import mychild from '@/components/mychild.vue'

// 传递动态值
import { ref } from 'vue';
const money = ref(100)

const addMoney = () => {
  money.value++
}


//子传父
// 1.在子组件内部,emit触发事件
// 2.在父组件通过@监听
const changeFn = (m) => {
  money.value -= m
}
</script>

<template>
  <div>
    父组件 - {{ money }} - <button @click="addMoney">+1</button>
    <mychild car="我是父组件传过来的参数" :money="money" :addMoney="addMoney" @change-Money="changeFn"></mychild>
  </div>
</template>