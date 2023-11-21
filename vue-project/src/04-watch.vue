<script setup>
import { ref, watch } from 'vue';
const count = ref(0)
const name = ref("张三")

const changeCount = () => {
  count.value++
}
const changeName = () => {
  name.value = "李四"
}

// 单个数据监听
// watch(count, (newValue, oldValue) => {
//   console.info("newValue", newValue)
//   console.info("oldValue", oldValue)
// })
// 多个数据监听
// watch([count, name], (newArr, oldArr) => {
//   console.info("newArr", newArr)
//   console.info("oldArr", oldArr)
// })



const info = ref({ name: '李四', age: 18 })
const changeAge = () => {
  info.value.age++
}
//immediate作用
// watch(info, (newValue, oldValue) => {
//   console.info("newValue", newValue)
//   console.info("oldValue", oldValue)
// }, { immediate: true })
//deep作用
// watch(info, (newValue, oldValue) => {
//   console.info("newValue", newValue)
//   console.info("oldValue", oldValue)
// }, { deep: true })
//精确监听某个对象的属性
watch(() => info.value.age, (newValue, oldValue) => {
  console.info("newValue", newValue)
  console.info("oldValue", oldValue)
})

</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ name }}</div>
  <button @click="changeName">改名称</button>
  <div>{{ info }}</div>
  <button @click="changeAge">改年龄</button>
</template>