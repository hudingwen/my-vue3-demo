<script setup>
import myRefChild from '@/components/my-ref-child.vue'
import { ref, onMounted } from 'vue';
// 模板引用,可以获取dom,也可以获取组件
// 1.调用ref函数,生成一个ref对象
// 2.通过ref标识进行标定
// 3.通过ref对象.value即可访问到绑定的元素(必须渲染后才能拿到)
const myInput = ref(null)

onMounted(() => {
  console.log("myInput")
  // myInput.value.focus()
})

const clickFn = () => {
  myInput.value.focus()
}


const myChild = ref(null)

const getMyDom = () => {
  console.log(myChild.value)
  myChild.value.sayHi()
}
onMounted(() => {
  console.log(myChild.value)

})



</script>

<template>
  <div>
    <input ref="myInput" type="text" />
    <button @click="clickFn">点击输入聚焦</button>

    <div>
      <myRefChild ref="myChild"></myRefChild>
      <button @click="getMyDom">获取组件信息</button>
    </div>
  </div>
</template>