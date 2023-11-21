<script setup>
//数据
const message = '你好vue3'
//函数
const logMessage = () => {
  console.log(message)
} 
</script>
// <script>
// export default {
//   setup() {
//     //数据
//     const message = '你好vue3'
//     //函数
//     const logMessage = () => {
//       console.log(message)
//     }

//     return {
//       message,
//       logMessage
//     }

//   },
//   beforeCreate() {
//     console.log("beforeCreate函数")
//   }
// }
// </script>
<template>
  <div>{{ message }}</div>
  <button @click="logMessage">按钮</button>
</template>