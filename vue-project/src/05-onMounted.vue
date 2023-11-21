<script setup>
import { onMounted } from 'vue';

// 以前是beforeCreate/created  现在直接写在setup中既可
const getList = ()=>{
  setTimeout(()=>{
    console.log("发送请求,获取数据")
  },2000)
}

//一进入页面的请求
getList()


//如果要在mounted中执行的
onMounted(() => {
  console.log("onMounted生命周期")
})

onMounted(() => {
  console.log("onMounted生命周期2")
})

</script>

<template>
  
</template>